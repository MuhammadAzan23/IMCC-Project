/**
 * Contact Form API Route
 * =======================
 * Handles POST requests from the contact form.
 * - Validates input: name required, phone Pakistani format, message required (max 500)
 * - Rate limits by IP via Upstash Redis (sliding window: 5 req / 5 min)
 * - Saves to "Contact" tab in Google Sheets
 */

import { NextRequest, NextResponse } from 'next/server';
import { ratelimit, getClientIp } from '@/lib/redis';
import { appendToSheet, getPKTTimestamp, isValidPhone } from '@/lib/sheets';

// ─── Types ───────────────────────────────────────────────────────
interface ContactData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

// ═══════════════════════════════════════════════════════════════════
// POST Handler
// ═══════════════════════════════════════════════════════════════════
export async function POST(request: NextRequest) {
  try {
    // ─── Rate Limiting ─────────────────────────────────────────
    const ip = getClientIp(request);
    const { success, remaining } = await ratelimit.limit(`contact:${ip}`);

    if (!success) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429, headers: { 'X-RateLimit-Remaining': String(remaining) } }
      );
    }

    // ─── Parse Body ────────────────────────────────────────────
    let body: ContactData;
    const contentType = request.headers.get('content-type') || '';

    if (contentType.includes('application/x-www-form-urlencoded')) {
      const formData = await request.formData();
      body = {
        name: formData.get('name') as string || '',
        phone: formData.get('phone') as string || '',
        email: formData.get('email') as string || '',
        message: formData.get('message') as string || '',
      };
    } else {
      body = await request.json();
    }

    const { name, phone, email, message } = body;

    // ─── Validation ────────────────────────────────────────────
    if (!name || !name.trim()) {
      return NextResponse.json(
        { error: 'Name is required.' },
        { status: 400 }
      );
    }

    if (phone && phone.trim() && !isValidPhone(phone)) {
      return NextResponse.json(
        { error: 'Please enter a valid Pakistani phone number (e.g. 03xx-xxxxxxx).' },
        { status: 400 }
      );
    }

    if (!message || !message.trim()) {
      return NextResponse.json(
        { error: 'Message is required.' },
        { status: 400 }
      );
    }

    if (message.trim().length > 500) {
      return NextResponse.json(
        { error: 'Message must be 500 characters or less.' },
        { status: 400 }
      );
    }

    // ─── Save to Google Sheets ("Contact" tab) ─────────────────
    try {
      const timestamp = getPKTTimestamp();
      await appendToSheet('Contact', [
        name.trim(),
        phone?.trim() || '',
        email?.trim() || '',
        message.trim(),
        timestamp,
      ]);
      console.log(`✅ Contact form saved from: ${name}`);
    } catch (sheetError: any) {
      console.error('❌ Google Sheets error (contact):', sheetError?.message || sheetError);
      return NextResponse.json(
        { error: 'Failed to save your message. Please try again later.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Message sent successfully! We will get back to you soon.', success: true },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('❌ Unexpected error in /api/contact:', error?.message || error);
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again later.' },
      { status: 500 }
    );
  }
}
