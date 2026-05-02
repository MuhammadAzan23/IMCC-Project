'use client';

import { useEffect, useState } from 'react';

export default function RegistrationsPage() {
  const [students, setStudents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api/admin/students')
      .then((res) => res.json())
      .then((data) => { setStudents(data.students || []); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  const toggleStatus = async (student: any) => {
    setUpdatingId(student.id);
    const newStatus = student.status === 'Pending' ? 'Reviewed' : 'Pending';

    try {
      const res = await fetch(`/api/admin/students/${student.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      });

      if (res.ok) {
        setStudents((prev) =>
          prev.map((s) => (s.id === student.id ? { ...s, status: newStatus } : s))
        );
      }
    } catch {
      // ignore
    }
    setUpdatingId(null);
  };

  const pendingCount = students.filter((s) => s.status === 'Pending').length;

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-1">Registrations</h1>
          <p className="text-gray-500 dark:text-gray-400">Manage registration status</p>
        </div>
        {pendingCount > 0 && (
          <div className="px-4 py-2 bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400 rounded-xl text-sm font-bold">
            {pendingCount} pending
          </div>
        )}
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
                  {['Name', 'Phone', 'Class', 'Date', 'Status', 'Action'].map((h) => (
                    <th key={h} className="px-6 py-3 text-left text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-white/5">
                {students.map((s: any) => (
                  <tr key={s.id} className="hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">{s.name}</td>
                    <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">{s.phone}</td>
                    <td className="px-6 py-4">
                      <span className="px-2.5 py-1 rounded-lg bg-sky-50 dark:bg-sky-500/10 text-sky-700 dark:text-sky-400 text-xs font-bold">{s.class}</span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">{s.timestamp}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2.5 py-1 rounded-lg text-xs font-bold ${
                        s.status === 'Reviewed'
                          ? 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400'
                          : 'bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400'
                      }`}>{s.status}</span>
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => toggleStatus(s)}
                        disabled={updatingId === s.id}
                        className="px-3 py-1.5 bg-imcc-navy dark:bg-sky-500 text-white rounded-lg text-xs font-bold hover:opacity-90 transition-all disabled:opacity-50"
                      >
                        {updatingId === s.id ? '...' : s.status === 'Pending' ? 'Review' : 'Unreview'}
                      </button>
                    </td>
                  </tr>
                ))}
                {students.length === 0 && (
                  <tr><td colSpan={6} className="px-6 py-12 text-center text-gray-400">No registrations found.</td></tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
