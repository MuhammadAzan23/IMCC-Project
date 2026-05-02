/**
 * Admin Login API Route
 * =====================
 * POST: Validates password, sets httpOnly session cookie
 * DELETE: Clears session cookie (logout)
 */

import { NextRequest, NextResponse } from 'next/server';

function generateToken(): string {
  const password = process.env.ADMIN_PASSWORD || '';
  return Buffer.from(`imcc_session:${password}`).toString('base64');
}

export async function POST(request: NextRequest) {
  try {
    const { password } = await request.json();

    if (!password) {
      return NextResponse.json({ error: 'Password is required.' }, { status: 400 });
    }

    const adminPassword = process.env.ADMIN_PASSWORD;

    if (!adminPassword) {
      console.error('❌ ADMIN_PASSWORD environment variable is not set.');
      return NextResponse.json(
        { error: 'Server configuration error.' },
        { status: 500 }
      );
    }

    if (password !== adminPassword) {
      return NextResponse.json({ error: 'Invalid password.' }, { status: 401 });
    }

    // Set session cookie
    const token = generateToken();
    const response = NextResponse.json({ success: true, message: 'Login successful.' });

    response.cookies.set('imcc_admin_session', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24, // 24 hours
    });

    return response;
  } catch (error: any) {
    console.error('❌ Login error:', error?.message || error);
    return NextResponse.json(
      { error: 'An unexpected error occurred.' },
      { status: 500 }
    );
  }
}

export async function DELETE() {
  const response = NextResponse.json({ success: true, message: 'Logged out.' });
  response.cookies.delete('imcc_admin_session');
  return response;
}
