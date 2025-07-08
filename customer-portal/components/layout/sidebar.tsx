'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import {
  Users,
  Settings,
  Briefcase,
  FileText,
} from 'lucide-react'

const navItems = [
  { href: '/users', label: 'Users', icon: Users },
  { href: '/jobs', label: 'Jobs', icon: Briefcase },
  { href: '/results', label: 'Results', icon: FileText },
  { href: '/settings', label: 'Settings', icon: Settings },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 bg-muted flex flex-col justify-start space-y-2">
      {navItems.map(({ href, label, icon: Icon }) => (
        <Link
          key={href}
          href={href}
          className={cn(
            'flex items-center gap-3 px-3 py-2 rounded-md hover:bg-muted-foreground/10 text-sm',
            pathname === href && 'bg-muted-foreground/10 font-medium'
          )}
        >
          <Icon className="w-4 h-4" />
          <span>{label}</span>
        </Link>
      ))}
    </aside>
  )
}
