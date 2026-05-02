/**
 * Admin Students API Route
 * ========================
 * GET: Returns all student registrations across all class tabs
 * Query params: ?class=Class9 (optional filter)
 */

import { NextRequest, NextResponse } from 'next/server';
import { readSheet, ALL_CLASS_TABS } from '@/lib/sheets';

export async function GET(request: NextRequest) {
  try {
    const classFilter = request.nextUrl.searchParams.get('class');
    const tabs = classFilter && ALL_CLASS_TABS.includes(classFilter)
      ? [classFilter]
      : ALL_CLASS_TABS;

    const allStudents: any[] = [];

    for (const tab of tabs) {
      try {
        const rows = await readSheet(tab, 'A:F');
        const dataRows = rows.length > 0 && rows[0][0]?.toLowerCase() === 'name'
          ? rows.slice(1)
          : rows;

        dataRows.forEach((row, index) => {
          allStudents.push({
            id: `${tab}-${index + 2}`,
            name: row[0] || '',
            phone: row[1] || '',
            email: row[2] || '',
            class: row[3] || tab,
            timestamp: row[4] || '',
            status: row[5] || 'Pending',
            sheetTab: tab,
            rowIndex: index + 2,
          });
        });
      } catch (err) {
        console.error(`Error reading ${tab}:`, err);
      }
    }

    // Sort by timestamp descending
    allStudents.sort((a, b) => {
      try {
        return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
      } catch {
        return 0;
      }
    });

    return NextResponse.json({ students: allStudents, total: allStudents.length });
  } catch (error: any) {
    console.error('❌ Students error:', error?.message || error);
    return NextResponse.json({ error: 'Failed to fetch students.' }, { status: 500 });
  }
}
