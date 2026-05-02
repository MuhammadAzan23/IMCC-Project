'use client';

import { useEffect, useState } from 'react';

export default function ContactSubmissionsPage() {
  const [submissions, setSubmissions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/admin/contacts')
      .then((res) => res.json())
      .then((data) => { setSubmissions(data.submissions || []); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-1">Contact Submissions</h1>
        <p className="text-gray-500 dark:text-gray-400">All messages from the contact form ({submissions.length})</p>
      </div>

      <div className="bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-2xl shadow-sm overflow-hidden">
        {loading ? (
          <div className="flex items-center justify-center h-40">
            <div className="w-8 h-8 border-2 border-sky-500/30 border-t-sky-500 rounded-full animate-spin" />
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-white/5">
                <tr>
                  {['Name', 'Email', 'Phone', 'Message', 'Date'].map((h) => (
                    <th key={h} className="px-6 py-3 text-left text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-white/5">
                {submissions.map((s: any) => (
                  <tr key={s.id} className="hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white whitespace-nowrap">{s.name}</td>
                    <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">{s.email || '—'}</td>
                    <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">{s.phone || '—'}</td>
                    <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300 max-w-xs truncate" title={s.message}>{s.message}</td>
                    <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">{s.timestamp}</td>
                  </tr>
                ))}
                {submissions.length === 0 && (
                  <tr><td colSpan={5} className="px-6 py-12 text-center text-gray-400">No submissions yet.</td></tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
