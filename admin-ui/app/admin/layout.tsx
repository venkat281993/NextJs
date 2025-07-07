'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import Link from 'next/link';
// import { Separator } from '@/components/ui/separator';
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

  // Automatically expand Tenants if a route matches
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
      <aside className="w-60 bg-gray-100 p-4 space-y-4">
        {/* <h2 className="text-lg font-bold mb-2">Admin</h2> */}

        {/* Dashboard */}
        <SidebarLink href="/admin/dashboard" label="Dashboard" isActive={pathname === '/dashboard'} />

        {/* Tenants Menu */}
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

          {tenantOpen && (
            <div className="ml-3 mt-1 space-y-1">
              <SidebarLink href="/admin/tenants/users" label="Users" isActive={pathname === '/tenants/users'} />
              <SidebarLink href="/admin/tenants/licenses" label="Licenses" isActive={pathname === '/tenants/licenses'} />
              <SidebarLink href="/admin/tenants/subscriptions" label="Subscriptions" isActive={pathname === '/tenants/subscriptions'} />
            </div>
          )}
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1">
        {/* <header className="bg-white shadow p-4 font-semibold">Admin Dashboard</header>
        <Separator /> */}
        <div className="p-6">{children}</div>
      </main>
    </div>
  );
}
