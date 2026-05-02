/**
 * Admin Stats API Route
 * =====================
 * GET: Returns registration counts per class + recent 5 registrations
 */

import { NextResponse } from 'next/server';
import { readSheet, ALL_CLASS_TABS } from '@/lib/sheets';

export async function GET() {
  try {
    const classCounts: Record<string, number> = {};
    const allRegistrations: any[] = [];

    for (const tab of ALL_CLASS_TABS) {
      try {
        const rows = await readSheet(tab, 'A:F');
        // Skip header row if present
        const dataRows = rows.length > 0 && rows[0][0]?.toLowerCase() === 'name'
          ? rows.slice(1)
          : rows;

        classCounts[tab] = dataRows.length;

        dataRows.forEach((row, index) => {
          allRegistrations.push({
            id: `${tab}-${index + 2}`, // +2 for 1-indexed + header
            name: row[0] || '',
            phone: row[1] || '',
            email: row[2] || '',
            class: row[3] || tab,
            timestamp: row[4] || '',
            status: row[5] || 'Pending',
            sheetTab: tab,
          });
        });
      } catch (err) {
        console.error(`Error reading ${tab}:`, err);
        classCounts[tab] = 0;
      }
    }

    // Sort by timestamp (newest first) and take recent 5
    const recent = allRegistrations
      .sort((a, b) => {
        try {
          return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
        } catch {
          return 0;
        }
      })
      .slice(0, 5);

    const totalRegistrations = Object.values(classCounts).reduce((a, b) => a + b, 0);

    return NextResponse.json({
      totalRegistrations,
      classCounts,
      recentRegistrations: recent,
    });
  } catch (error: any) {
    console.error('❌ Stats error:', error?.message || error);
    return NextResponse.json(
      { error: 'Failed to fetch stats.' },
      { status: 500 }
    );
  }
}
