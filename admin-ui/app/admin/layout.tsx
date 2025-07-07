'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
// import {  Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/mode-toggle'; // 🔁 See below
import { cn } from '@/lib/utils';

const SidebarLink = ({ href, label, isActive }: { href: string; label: string; isActive: boolean }) => (
  <Link
    href={href}
    className={cn(
      'block px-3 py-2 rounded-md text-sm transition-colors',
      isActive ? 'bg-blue-600 text-white' : 'text-gray-800 hover:bg-gray-200'
    )}
  >
    {label}
  </Link>
);

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  const [tenantOpen, setTenantOpen] = useState(false);

  useEffect(() => {
    if (pathname.startsWith('/tenants')) {
      setTenantOpen(true);
    }
  }, [pathname]);

  const handleTenantClick = () => {
    if (!pathname.startsWith('/tenants')) {
      router.push('/admin/tenants');
    }
    setTenantOpen((prev) => !prev);
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-60 bg-gray-100 p-4 space-y-4 border-r">
        {/* <h2 className="text-lg font-bold mb-2">Admin</h2> */}

        <SidebarLink href="/admin/dashboard" label="Dashboard" isActive={pathname === '/dashboard'} />

        <div>
          <button
            onClick={handleTenantClick}
            className={cn(
              'w-full flex justify-between items-center text-sm font-medium text-left px-3 py-2 rounded',
              pathname === '/tenants' ? 'bg-blue-600 text-white' : 'text-gray-800 hover:bg-gray-200'
            )}
          >
            <span>Tenants</span>
            <span className="text-xs">{tenantOpen ? '−' : '+'}</span>
          </button>

          {/* {tenantOpen && (
            // <div className="ml-3 mt-1 space-y-1">
            //   <SidebarLink href="/admin/tenants/users" label="Users" isActive={pathname === '/tenants/users'} />
            //   <SidebarLink href="/admin/tenants/licenses" label="Licenses" isActive={pathname === '/tenants/licenses'} />
            //   <SidebarLink href="/admin/tenants/subscriptions" label="Subscriptions" isActive={pathname === '/tenants/subscriptions'} />
            // </div>
          )} */}
        </div>
      </aside>

      {/* Main */}
      <div className="flex flex-col flex-1">
        {/* Header */}
        <header className="w-full px-4 py-3 flex justify-end border-b bg-white dark:bg-gray-900 dark:border-gray-800">
      {/* <h1 className="font-semibold text-lg">Admin </h1> */}

          <div className="flex items-center space-x-4">
            <ModeToggle />
            <img src="/globe.svg" alt="Logo" className="w-8 h-8 rounded-full border" />
          </div>
        </header>

        <Separator />

        {/* Content */}
        <main className="flex-1 p-6">{children}</main>

        {/* Footer */}
        <footer className="bg-gray-50 dark:bg-gray-950 text-center text-sm py-4 text-gray-600 dark:text-gray-400 border-t">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
