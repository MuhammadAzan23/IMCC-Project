/**
 * Admin Student Detail API Route
 * ==============================
 * GET: Returns a single student by ID (format: Class9-5)
 * PATCH: Updates the Status column for that row
 */

import { NextRequest, NextResponse } from 'next/server';
import { readSheet, updateSheetCell } from '@/lib/sheets';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const [sheetTab, rowStr] = id.split('-');
    const rowIndex = parseInt(rowStr, 10);

    if (!sheetTab || isNaN(rowIndex)) {
      return NextResponse.json({ error: 'Invalid student ID.' }, { status: 400 });
    }

    const rows = await readSheet(sheetTab, `A${rowIndex}:F${rowIndex}`);

    if (!rows || rows.length === 0) {
      return NextResponse.json({ error: 'Student not found.' }, { status: 404 });
    }

    const row = rows[0];
    const student = {
      id,
      name: row[0] || '',
      phone: row[1] || '',
      email: row[2] || '',
      class: row[3] || sheetTab,
      timestamp: row[4] || '',
      status: row[5] || 'Pending',
      sheetTab,
      rowIndex,
    };

    return NextResponse.json({ student });
  } catch (error: any) {
    console.error('❌ Student detail error:', error?.message || error);
    return NextResponse.json({ error: 'Failed to fetch student.' }, { status: 500 });
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const [sheetTab, rowStr] = id.split('-');
    const rowIndex = parseInt(rowStr, 10);

    if (!sheetTab || isNaN(rowIndex)) {
      return NextResponse.json({ error: 'Invalid student ID.' }, { status: 400 });
    }

    const body = await request.json();
    const { status } = body;

    if (!status || !['Pending', 'Reviewed'].includes(status)) {
      return NextResponse.json(
        { error: 'Status must be "Pending" or "Reviewed".' },
        { status: 400 }
      );
    }

    // Update column F (Status) at the given row
    await updateSheetCell(sheetTab, rowIndex, 'F', status);

    return NextResponse.json({ success: true, message: `Status updated to ${status}.` });
  } catch (error: any) {
    console.error('❌ Student update error:', error?.message || error);
    return NextResponse.json({ error: 'Failed to update student.' }, { status: 500 });
  }
}
