'use client';

import { useEffect, useState } from 'react';

interface Stats {
  totalRegistrations: number;
  classCounts: Record<string, number>;
  recentRegistrations: any[];
}

export default function DashboardPage() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/admin/stats')
      .then((res) => res.json())
      .then((data) => { setStats(data); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="w-8 h-8 border-2 border-sky-500/30 border-t-sky-500 rounded-full animate-spin" />
      </div>
    );
  }

  if (!stats) {
    return <p className="text-red-500">Failed to load dashboard data.</p>;
  }

  const classCards = [
    { label: 'Class 9', key: 'Class9', icon: 'ri-book-3-line', color: 'bg-blue-500' },
    { label: 'Class 10', key: 'Class10', icon: 'ri-flask-line', color: 'bg-emerald-500' },
    { label: 'Class 11', key: 'Class11', icon: 'ri-microscope-line', color: 'bg-violet-500' },
    { label: 'Class 12', key: 'Class12', icon: 'ri-global-line', color: 'bg-amber-500' },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-1">Dashboard</h1>
        <p className="text-gray-500 dark:text-gray-400">Overview of all registrations</p>
      </div>

      {/* Total Card */}
      <div className="bg-gradient-to-r from-imcc-navy to-blue-900 text-white p-8 rounded-2xl shadow-lg">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center">
            <i className="ri-user-star-line text-3xl" />
          </div>
          <div>
            <p className="text-blue-200 text-sm font-medium">Total Registrations</p>
            <p className="text-4xl font-black">{stats.totalRegistrations}</p>
          </div>
        </div>
      </div>

      {/* Per-Class Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {classCards.map((card) => (
          <div key={card.key} className="bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className={`w-10 h-10 ${card.color} rounded-xl flex items-center justify-center text-white`}>
                <i className={`${card.icon} text-lg`} />
              </div>
              <span className="text-2xl font-black text-gray-900 dark:text-white">
                {stats.classCounts[card.key] || 0}
              </span>
            </div>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{card.label}</p>
          </div>
        ))}
      </div>

      {/* Recent Registrations */}
      <div className="bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-2xl shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-100 dark:border-white/10">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white">Recent Registrations</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-white/5">
              <tr>
                {['Name', 'Phone', 'Class', 'Date', 'Status'].map((h) => (
                  <th key={h} className="px-6 py-3 text-left text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-white/5">
              {stats.recentRegistrations.map((student: any) => (
                <tr key={student.id} className="hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">{student.name}</td>
                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">{student.phone}</td>
                  <td className="px-6 py-4">
                    <span className="px-2.5 py-1 rounded-lg bg-sky-50 dark:bg-sky-500/10 text-sky-700 dark:text-sky-400 text-xs font-bold">
                      {student.class}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">{student.timestamp}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 rounded-lg text-xs font-bold ${
                      student.status === 'Reviewed'
                        ? 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400'
                        : 'bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400'
                    }`}>
                      {student.status}
                    </span>
                  </td>
                </tr>
              ))}
              {stats.recentRegistrations.length === 0 && (
                <tr><td colSpan={5} className="px-6 py-8 text-center text-gray-400">No registrations yet.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
