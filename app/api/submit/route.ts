/**
 * Student Registration API Route
 * ================================
 * Handles POST requests from the registration form.
 * - Validates input data
 * - Rate limits by IP (max 5 requests per 5 minutes)
 * - Prevents duplicate phone submissions (same phone blocked for 5 min)
 * - Appends data to the correct Google Sheet tab based on class
 * - Sends WhatsApp notification placeholder
 */

import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';

// ─── Types ───────────────────────────────────────────────────────
interface RegistrationData {
  name: string;
  phone: string;
  email?: string;
  class: string;
}

// ─── In-Memory Rate Limiting Store ───────────────────────────────
// Note: Resets on serverless cold start. For production at scale,
// consider using Redis or a database-backed solution.
const rateLimitMap = new Map<string, { count: number; firstRequest: number }>();
const phoneSubmissionMap = new Map<string, number>();

const RATE_LIMIT_WINDOW = 5 * 60 * 1000; // 5 minutes
const RATE_LIMIT_MAX = 5; // max requests per window per IP
const PHONE_COOLDOWN = 5 * 60 * 1000; // 5 minutes between same phone submissions

// ─── Class to Sheet Tab Mapping ──────────────────────────────────
const CLASS_TO_SHEET: Record<string, string> = {
  'Class 9': 'Class9',
  'Class 10': 'Class10',
  'Class 11': 'Class11',
  'Class 12': 'Class12',
};

// ─── Helper: Check Rate Limit ────────────────────────────────────
function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now - entry.firstRequest > RATE_LIMIT_WINDOW) {
    // Reset or create new entry
    rateLimitMap.set(ip, { count: 1, firstRequest: now });
    return false;
  }

  if (entry.count >= RATE_LIMIT_MAX) {
    return true;
  }

  entry.count++;
  return false;
}

// ─── Helper: Check Duplicate Phone ───────────────────────────────
function isDuplicatePhone(phone: string): boolean {
  const now = Date.now();
  const lastSubmission = phoneSubmissionMap.get(phone);

  if (lastSubmission && now - lastSubmission < PHONE_COOLDOWN) {
    return true;
  }

  phoneSubmissionMap.set(phone, now);
  return false;
}

// ─── Helper: Validate Phone Format ──────────────────────────────
function isValidPhone(phone: string): boolean {
  // Pakistani phone formats: 03xx-xxxxxxx, 03xxxxxxxxx, +923xxxxxxxxx
  const phoneRegex = /^(\+92|0)?3\d{2}[-\s]?\d{7}$/;
  return phoneRegex.test(phone.trim());
}

// ─── Helper: Send WhatsApp Notification (Placeholder) ────────────
async function sendWhatsAppNotification(data: RegistrationData): Promise<void> {
  try {
    // TODO: Replace with actual WhatsApp Business API or webhook URL
    // Example with a webhook service:
    // await fetch('https://your-webhook-url.com/whatsapp', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
    //     phone: data.phone,
    //     message: `New registration: ${data.name} for ${data.class}`
    //   })
    // });

    console.log('📱 WhatsApp Notification (placeholder):', {
      to: data.phone,
      message: `New registration received!\nName: ${data.name}\nClass: ${data.class}\nPhone: ${data.phone}`,
    });
  } catch (error) {
    // Non-critical — don't fail the registration if notification fails
    console.error('⚠️ WhatsApp notification failed:', error);
  }
}

// ─── Helper: Append to Google Sheet ──────────────────────────────
async function appendToGoogleSheet(
  data: RegistrationData,
  sheetTab: string
): Promise<void> {
  const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
  const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');
  const sheetId = process.env.GOOGLE_SHEET_ID;

  if (!clientEmail || !privateKey || !sheetId) {
    throw new Error(
      'Google Sheets credentials are not configured. Please set GOOGLE_CLIENT_EMAIL, GOOGLE_PRIVATE_KEY, and GOOGLE_SHEET_ID environment variables.'
    );
  }

  // Authenticate with Google Sheets API
  const auth = new google.auth.JWT({
    email: clientEmail,
    key: privateKey,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  const sheets = google.sheets({ version: 'v4', auth });

  // Generate timestamp in PKT (Pakistan Standard Time)
  const timestamp = new Date().toLocaleString('en-PK', {
    timeZone: 'Asia/Karachi',
    year: 'numeric',
    month: 'short',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  // Append row to the correct sheet tab
  await sheets.spreadsheets.values.append({
    spreadsheetId: sheetId,
    range: `${sheetTab}!A:E`,
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values: [[data.name, data.phone, data.email || '', data.class, timestamp]],
    },
  });
}

// ─── Cleanup stale rate limit entries periodically ───────────────
function cleanupStaleEntries(): void {
  const now = Date.now();
  for (const [key, value] of rateLimitMap.entries()) {
    if (now - value.firstRequest > RATE_LIMIT_WINDOW) {
      rateLimitMap.delete(key);
    }
  }
  for (const [key, value] of phoneSubmissionMap.entries()) {
    if (now - value > PHONE_COOLDOWN) {
      phoneSubmissionMap.delete(key);
    }
  }
}

// ═══════════════════════════════════════════════════════════════════
// POST Handler
// ═══════════════════════════════════════════════════════════════════
export async function POST(request: NextRequest) {
  try {
    // Cleanup stale entries on each request
    cleanupStaleEntries();

    // ─── Rate Limiting ─────────────────────────────────────────
    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      request.headers.get('x-real-ip') ||
      'unknown';

    if (isRateLimited(ip)) {
      console.warn(`🚫 Rate limited IP: ${ip}`);
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    // ─── Parse Request Body ────────────────────────────────────
    const body: RegistrationData = await request.json();
    const { name, phone, email, class: studentClass } = body;

    console.log('📋 Registration request received:', {
      name,
      phone,
      email: email || '(not provided)',
      class: studentClass,
    });

    // ─── Validation ────────────────────────────────────────────
    if (!name || !name.trim()) {
      return NextResponse.json(
        { error: 'Full name is required.' },
        { status: 400 }
      );
    }

    if (!phone || !phone.trim()) {
      return NextResponse.json(
        { error: 'Phone number is required.' },
        { status: 400 }
      );
    }

    if (!isValidPhone(phone)) {
      return NextResponse.json(
        { error: 'Please enter a valid Pakistani phone number (e.g. 03xx-xxxxxxx).' },
        { status: 400 }
      );
    }

    if (!studentClass || !CLASS_TO_SHEET[studentClass]) {
      return NextResponse.json(
        { error: 'Please select a valid class.' },
        { status: 400 }
      );
    }

    // ─── Duplicate Phone Check ─────────────────────────────────
    if (isDuplicatePhone(phone.trim())) {
      console.warn(`🔁 Duplicate phone submission blocked: ${phone}`);
      return NextResponse.json(
        { error: 'This phone number was recently submitted. Please wait a few minutes before trying again.' },
        { status: 409 }
      );
    }

    // ─── Get Target Sheet Tab ──────────────────────────────────
    const sheetTab = CLASS_TO_SHEET[studentClass];

    // ─── Append to Google Sheets ───────────────────────────────
    try {
      await appendToGoogleSheet(
        { name: name.trim(), phone: phone.trim(), email: email?.trim(), class: studentClass },
        sheetTab
      );
      console.log(`✅ Data appended to sheet tab: ${sheetTab}`);
    } catch (sheetError: any) {
      console.error('❌ Google Sheets error:', sheetError?.message || sheetError);

      // Check if it's a credentials issue
      if (sheetError?.message?.includes('credentials')) {
        return NextResponse.json(
          { error: 'Server configuration error. Please contact the administrator.' },
          { status: 500 }
        );
      }

      // Check if sheet tab doesn't exist
      if (sheetError?.message?.includes('Unable to parse range') ||
          sheetError?.code === 400) {
        return NextResponse.json(
          { error: `Sheet tab "${sheetTab}" not found. Please contact the administrator.` },
          { status: 500 }
        );
      }

      return NextResponse.json(
        { error: 'Failed to save registration data. Please try again later.' },
        { status: 500 }
      );
    }

    // ─── Send WhatsApp Notification ────────────────────────────
    await sendWhatsAppNotification({
      name: name.trim(),
      phone: phone.trim(),
      email: email?.trim(),
      class: studentClass,
    });

    // ─── Success Response ──────────────────────────────────────
    console.log(`🎉 Registration successful for: ${name} (${studentClass})`);
    return NextResponse.json(
      { message: 'Registration successful!', success: true },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('❌ Unexpected error in /api/submit:', error?.message || error);
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again later.' },
      { status: 500 }
    );
  }
}
