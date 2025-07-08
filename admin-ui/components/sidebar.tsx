'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Users, Settings } from 'lucide-react'

const navItems = [
  { name: 'Dashboard', href: '/', icon: <Home size={18} /> },
  { name: 'Tenants', href: '/tenants', icon: <Users size={18} /> },
  { name: 'Settings', href: '/settings', icon: <Settings size={18} /> },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 bg-muted flex flex-col justify-start">
      <div className="flex flex-col h-full p-4 space-y-2">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`flex items-center gap-2 p-2 rounded-md hover:bg-accent transition-colors ${
              pathname === item.href ? 'bg-accent font-semibold' : ''
            }`}
          >
            {item.icon}
            {item.name}
          </Link>
        ))}
      </div>
    </aside>
  )
}
