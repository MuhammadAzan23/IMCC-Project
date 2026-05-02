/**
 * Admin Contact Submissions API Route
 * ====================================
 * GET: Returns all contact form submissions from the "Contact" sheet tab
 */

import { NextResponse } from 'next/server';
import { readSheet } from '@/lib/sheets';

export async function GET() {
  try {
    const rows = await readSheet('Contact', 'A:E');

    // Skip header row if present
    const dataRows = rows.length > 0 && rows[0][0]?.toLowerCase() === 'name'
      ? rows.slice(1)
      : rows;

    const submissions = dataRows.map((row, index) => ({
      id: index + 2,
      name: row[0] || '',
      phone: row[1] || '',
      email: row[2] || '',
      message: row[3] || '',
      timestamp: row[4] || '',
    }));

    // Sort by newest first
    submissions.sort((a, b) => {
      try {
        return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
      } catch {
        return 0;
      }
    });

    return NextResponse.json({ submissions, total: submissions.length });
  } catch (error: any) {
    console.error('❌ Contacts error:', error?.message || error);
    return NextResponse.json({ error: 'Failed to fetch contact submissions.' }, { status: 500 });
  }
}
