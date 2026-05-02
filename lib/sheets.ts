/**
 * Shared Google Sheets helper module
 * ====================================
 * Reusable auth + CRUD operations for Google Sheets.
 * Used by /api/submit, /api/contact, and admin API routes.
 */

import { google, sheets_v4 } from 'googleapis';

// ─── Types ──────────────────────────────────────────────────────
interface SheetsClient {
  sheets: sheets_v4.Sheets;
  spreadsheetId: string;
}

// ─── Class to Sheet Tab Mapping ─────────────────────────────────
export const CLASS_TO_SHEET: Record<string, string> = {
  'Class 9': 'Class9',
  'Class 10': 'Class10',
  'Class 11': 'Class11',
  'Class 12': 'Class12',
};

export const ALL_CLASS_TABS = ['Class9', 'Class10', 'Class11', 'Class12'];

// ─── Get Authenticated Sheets Client ────────────────────────────
export function getAuthenticatedSheets(): SheetsClient {
  const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
  const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');
  const spreadsheetId = process.env.GOOGLE_SHEET_ID;

  if (!clientEmail || !privateKey || !spreadsheetId) {
    throw new Error(
      'Google Sheets credentials are not configured. Please set GOOGLE_CLIENT_EMAIL, GOOGLE_PRIVATE_KEY, and GOOGLE_SHEET_ID environment variables.'
    );
  }

  const auth = new google.auth.JWT({
    email: clientEmail,
    key: privateKey,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  const sheets = google.sheets({ version: 'v4', auth });

  return { sheets, spreadsheetId };
}

// ─── Generate PKT Timestamp ─────────────────────────────────────
export function getPKTTimestamp(): string {
  return new Date().toLocaleString('en-PK', {
    timeZone: 'Asia/Karachi',
    year: 'numeric',
    month: 'short',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });
}

// ─── Append Row to Sheet ────────────────────────────────────────
export async function appendToSheet(
  sheetTab: string,
  values: string[]
): Promise<void> {
  const { sheets, spreadsheetId } = getAuthenticatedSheets();

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: `${sheetTab}!A:Z`,
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values: [values],
    },
  });
}

// ─── Read All Rows from Sheet ───────────────────────────────────
export async function readSheet(
  sheetTab: string,
  range: string = 'A:Z'
): Promise<string[][]> {
  const { sheets, spreadsheetId } = getAuthenticatedSheets();

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range: `${sheetTab}!${range}`,
  });

  return (response.data.values as string[][]) || [];
}

// ─── Update a Single Cell ───────────────────────────────────────
export async function updateSheetCell(
  sheetTab: string,
  row: number,
  column: string,
  value: string
): Promise<void> {
  const { sheets, spreadsheetId } = getAuthenticatedSheets();

  await sheets.spreadsheets.values.update({
    spreadsheetId,
    range: `${sheetTab}!${column}${row}`,
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values: [[value]],
    },
  });
}

// ─── Phone Validation ───────────────────────────────────────────
export function isValidPhone(phone: string): boolean {
  const phoneRegex = /^(\+92|0)?3\d{2}[-\s]?\d{7}$/;
  return phoneRegex.test(phone.trim());
}
