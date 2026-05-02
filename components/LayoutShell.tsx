'use client';

import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

interface LayoutShellProps {
  header: ReactNode;
  footer: ReactNode;
  children: ReactNode;
}

export function LayoutShell({ header, footer, children }: LayoutShellProps) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith('/admin');

  if (isAdmin) {
    return <>{children}</>;
  }

  return (
    <>
      {header}
      <main className="flex-grow pt-20">{children}</main>
      {footer}
    </>
  );
}
