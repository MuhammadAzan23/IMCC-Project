'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function StudentsPage() {
  const [students, setStudents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [classFilter, setClassFilter] = useState('');

  useEffect(() => {
    const params = classFilter ? `?class=${classFilter}` : '';
    fetch(`/api/admin/students${params}`)
      .then((res) => res.json())
      .then((data) => { setStudents(data.students || []); setLoading(false); })
      .catch(() => setLoading(false));
  }, [classFilter]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-1">Students</h1>
          <p className="text-gray-500 dark:text-gray-400">All registered students ({students.length})</p>
        </div>
        <select
          value={classFilter}
          onChange={(e) => { setClassFilter(e.target.value); setLoading(true); }}
          className="bg-white dark:bg-white/10 border border-gray-200 dark:border-white/20 rounded-xl px-4 py-2.5 text-sm font-medium dark:text-white outline-none focus:ring-2 focus:ring-sky-500"
        >
          <option value="">All Classes</option>
          <option value="Class9">Class 9</option>
          <option value="Class10">Class 10</option>
          <option value="Class11">Class 11</option>
          <option value="Class12">Class 12</option>
        </select>
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
                  {['Name', 'Phone', 'Email', 'Class', 'Date', 'Status', ''].map((h) => (
                    <th key={h} className="px-6 py-3 text-left text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-white/5">
                {students.map((s: any) => (
                  <tr key={s.id} className="hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">{s.name}</td>
                    <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">{s.phone}</td>
                    <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">{s.email || '—'}</td>
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
                      <Link
                        href={`/admin/students/${s.id}`}
                        className="text-sky-500 hover:text-sky-400 text-sm font-medium"
                      >
                        View →
                      </Link>
                    </td>
                  </tr>
                ))}
                {students.length === 0 && (
                  <tr><td colSpan={7} className="px-6 py-12 text-center text-gray-400">No students found.</td></tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
