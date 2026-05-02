/**
 * Student Registration API Route
 * ================================
 * Handles POST requests from the registration form.
 * - Validates input data
 * - Rate limits by IP via Upstash Redis (sliding window: 5 req / 5 min)
 * - Prevents duplicate phone submissions via Redis key (5 min TTL)
 * - Appends data to the correct Google Sheet tab based on class
 * - Adds "Pending" status column
 * - Sends WhatsApp notification placeholder
 */

import { NextRequest, NextResponse } from 'next/server';
import { ratelimit, getClientIp, isDuplicateSubmission } from '@/lib/redis';
import {
  CLASS_TO_SHEET,
  appendToSheet,
  getPKTTimestamp,
  isValidPhone,
} from '@/lib/sheets';

// ─── Types ───────────────────────────────────────────────────────
interface RegistrationData {
  name: string;
  phone: string;
  email?: string;
  class: string;
}

// ─── Helper: Send WhatsApp Notification (Placeholder) ────────────
async function sendWhatsAppNotification(data: RegistrationData): Promise<void> {
  try {
    // TODO: Replace with actual WhatsApp Business API or webhook URL
    console.log('📱 WhatsApp Notification (placeholder):', {
      to: data.phone,
      message: `New registration received!\nName: ${data.name}\nClass: ${data.class}\nPhone: ${data.phone}`,
    });
  } catch (error) {
    // Non-critical — don't fail the registration if notification fails
    console.error('⚠️ WhatsApp notification failed:', error);
  }
}

// ═══════════════════════════════════════════════════════════════════
// POST Handler
// ═══════════════════════════════════════════════════════════════════
export async function POST(request: NextRequest) {
  try {
    // ─── Rate Limiting (Upstash Redis) ────────────────────────
    const ip = getClientIp(request);

    const { success, remaining } = await ratelimit.limit(ip);

    if (!success) {
      console.warn(`🚫 Rate limited IP: ${ip}`);
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429, headers: { 'X-RateLimit-Remaining': String(remaining) } }
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

    // ─── Duplicate Phone Check (Redis) ─────────────────────────
    const isDuplicate = await isDuplicateSubmission(
      `duplicate:${phone.trim()}`,
      300 // 5 minutes
    );

    if (isDuplicate) {
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
      const timestamp = getPKTTimestamp();
      await appendToSheet(sheetTab, [
        name.trim(),
        phone.trim(),
        email?.trim() || '',
        studentClass,
        timestamp,
        'Pending', // Status column
      ]);
      console.log(`✅ Data appended to sheet tab: ${sheetTab}`);
    } catch (sheetError: any) {
      console.error('❌ Google Sheets error:', sheetError?.message || sheetError);

      if (sheetError?.message?.includes('credentials')) {
        return NextResponse.json(
          { error: 'Server configuration error. Please contact the administrator.' },
          { status: 500 }
        );
      }

      if (
        sheetError?.message?.includes('Unable to parse range') ||
        sheetError?.code === 400
      ) {
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
