/**
 * Next.js Middleware — Admin Route Protection
 * =============================================
 * Protects all /admin/* routes (except /admin/login).
 * Validates the imcc_admin_session cookie.
 */

import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Only protect /admin routes (except /admin/login and /api/admin/login)
  if (
    pathname.startsWith('/admin') &&
    !pathname.startsWith('/admin/login') &&
    !pathname.startsWith('/api/admin/login')
  ) {
    const sessionCookie = request.cookies.get('imcc_admin_session')?.value;

    if (!sessionCookie || sessionCookie !== getExpectedToken()) {
      const loginUrl = new URL('/admin/login', request.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

/**
 * Generate the expected session token.
 * Uses a simple hash of ADMIN_PASSWORD for validation.
 */
function getExpectedToken(): string {
  const password = process.env.ADMIN_PASSWORD || '';
  // Simple base64 encoding of password + salt for cookie validation
  // In production, use crypto.subtle for HMAC
  return Buffer.from(`imcc_session:${password}`).toString('base64');
}

export const config = {
  matcher: ['/admin/:path*'],
};
