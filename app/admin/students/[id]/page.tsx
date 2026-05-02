'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';

export default function StudentDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;
  const [student, setStudent] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);

  useEffect(() => {
    fetch(`/api/admin/students/${id}`)
      .then((res) => res.json())
      .then((data) => { setStudent(data.student); setLoading(false); })
      .catch(() => setLoading(false));
  }, [id]);

  const toggleStatus = async () => {
    if (!student) return;
    setUpdating(true);
    const newStatus = student.status === 'Pending' ? 'Reviewed' : 'Pending';

    try {
      const res = await fetch(`/api/admin/students/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      });

      if (res.ok) {
        setStudent({ ...student, status: newStatus });
      }
    } catch {
      // ignore
    }
    setUpdating(false);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="w-8 h-8 border-2 border-sky-500/30 border-t-sky-500 rounded-full animate-spin" />
      </div>
    );
  }

  if (!student) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-500 dark:text-gray-400 mb-4">Student not found.</p>
        <Link href="/admin/students" className="text-sky-500 hover:underline font-medium">← Back to Students</Link>
      </div>
    );
  }

  const fields = [
    { label: 'Full Name', value: student.name, icon: 'ri-user-line' },
    { label: 'Phone', value: student.phone, icon: 'ri-phone-line' },
    { label: 'Email', value: student.email || 'Not provided', icon: 'ri-mail-line' },
    { label: 'Class', value: student.class, icon: 'ri-book-open-line' },
    { label: 'Registered', value: student.timestamp, icon: 'ri-calendar-line' },
    { label: 'Sheet Tab', value: student.sheetTab, icon: 'ri-file-list-3-line' },
  ];

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="flex items-center gap-4">
        <button onClick={() => router.back()} className="w-10 h-10 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/10 transition-colors">
          <i className="ri-arrow-left-line text-lg" />
        </button>
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{student.name}</h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm">ID: {student.id}</p>
        </div>
      </div>

      <div className="bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-2xl p-6 shadow-sm space-y-5">
        {fields.map((field) => (
          <div key={field.label} className="flex items-start gap-4">
            <div className="w-10 h-10 bg-gray-50 dark:bg-white/5 rounded-xl flex items-center justify-center text-sky-500 flex-shrink-0">
              <i className={`${field.icon} text-lg`} />
            </div>
            <div>
              <p className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">{field.label}</p>
              <p className="text-gray-900 dark:text-white font-medium">{field.value}</p>
            </div>
          </div>
        ))}

        <div className="pt-4 border-t border-gray-100 dark:border-white/10">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Status</p>
              <span className={`px-3 py-1.5 rounded-lg text-sm font-bold ${
                student.status === 'Reviewed'
                  ? 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400'
                  : 'bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400'
              }`}>
                {student.status}
              </span>
            </div>
            <button
              onClick={toggleStatus}
              disabled={updating}
              className="px-5 py-2.5 bg-imcc-navy dark:bg-sky-500 text-white rounded-xl text-sm font-bold hover:opacity-90 transition-all disabled:opacity-50"
            >
              {updating ? 'Updating...' : `Mark as ${student.status === 'Pending' ? 'Reviewed' : 'Pending'}`}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
