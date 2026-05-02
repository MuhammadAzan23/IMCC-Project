'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState, useEffect, useCallback } from 'react';

const navItems = [
  { name: 'Dashboard', href: '/admin/dashboard', icon: 'ri-dashboard-line' },
  { name: 'Students', href: '/admin/students', icon: 'ri-user-line' },
  { name: 'Registrations', href: '/admin/registrations', icon: 'ri-file-list-3-line' },
  { name: 'Contact', href: '/admin/contact-submissions', icon: 'ri-mail-line' },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'));
  }, []);

  const toggleDark = useCallback(() => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  }, [isDark]);

  const handleLogout = async () => {
    await fetch('/api/admin/login', { method: 'DELETE' });
    router.push('/admin/login');
  };

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + '/');

  // Don't wrap login page with admin shell
  if (pathname === '/admin/login') {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex">
      {/* Sidebar — Desktop */}
      <aside className="hidden lg:flex lg:flex-col w-64 bg-imcc-navy text-white fixed inset-y-0 left-0 z-30">
        <div className="p-6 border-b border-white/10">
          <Link href="/admin/dashboard" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-sky-500 rounded-xl flex items-center justify-center font-black text-lg">
              IM
            </div>
            <div>
              <h1 className="font-bold text-lg">IMCC Admin</h1>
              <p className="text-xs text-sky-400">Management Panel</p>
            </div>
          </Link>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                isActive(item.href)
                  ? 'bg-sky-500/20 text-sky-400'
                  : 'text-gray-300 hover:bg-white/5 hover:text-white'
              }`}
            >
              <i className={`${item.icon} text-lg`} />
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-white/10 space-y-2">
          <button
            onClick={toggleDark}
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white transition-all w-full"
          >
            <i className={`${isDark ? 'ri-sun-line' : 'ri-moon-line'} text-lg`} />
            {isDark ? 'Light Mode' : 'Dark Mode'}
          </button>
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-red-400 hover:bg-red-500/10 transition-all w-full"
          >
            <i className="ri-logout-box-line text-lg" />
            Logout
          </button>
        </div>
      </aside>

      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-30 bg-imcc-navy text-white h-16 flex items-center justify-between px-4">
        <Link href="/admin/dashboard" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-sky-500 rounded-lg flex items-center justify-center font-black text-sm">IM</div>
          <span className="font-bold">Admin</span>
        </Link>
        <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2">
          <i className={`ri-${sidebarOpen ? 'close' : 'menu'}-line text-xl`} />
        </button>
      </div>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <>
          <div className="fixed inset-0 bg-black/50 z-30 lg:hidden" onClick={() => setSidebarOpen(false)} />
          <aside className="fixed inset-y-0 left-0 z-40 w-64 bg-imcc-navy text-white lg:hidden pt-16">
            <nav className="p-4 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    isActive(item.href)
                      ? 'bg-sky-500/20 text-sky-400'
                      : 'text-gray-300 hover:bg-white/5'
                  }`}
                >
                  <i className={`${item.icon} text-lg`} />
                  {item.name}
                </Link>
              ))}
            </nav>
            <div className="p-4 border-t border-white/10 space-y-2">
              <button onClick={toggleDark} className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-gray-300 hover:bg-white/5 w-full">
                <i className={`${isDark ? 'ri-sun-line' : 'ri-moon-line'} text-lg`} />
                {isDark ? 'Light Mode' : 'Dark Mode'}
              </button>
              <button onClick={handleLogout} className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-red-400 hover:bg-red-500/10 w-full">
                <i className="ri-logout-box-line text-lg" />
                Logout
              </button>
            </div>
          </aside>
        </>
      )}

      {/* Main Content */}
      <main className="flex-1 lg:ml-64 min-h-screen pt-16 lg:pt-0">
        <div className="p-6 lg:p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
