'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home } from 'lucide-react'
// import { cn } from '@/lib/utils'

export default function Breadcrumbs() {
  const pathname = usePathname()
  const segments = pathname.split('/').filter(Boolean)

  // Build the breadcrumb path step by step
  const breadcrumbs = segments.map((segment, index) => {
    const href = '/' + segments.slice(0, index + 1).join('/')
    const label = decodeURIComponent(segment.replace(/-/g, ' '))

    return { href, label }
  })

  return (
    <nav className="text-sm text-muted-foreground mb-4">
      <ol className="flex items-center space-x-2">
        <li>
          <Link href="/" className="text-foreground hover:underline flex items-center gap-1">
            <Home size={16} />
          </Link>
        </li>
        {breadcrumbs.map((crumb, index) => (
          <li key={crumb.href} className="flex items-center gap-2">
            <span>/</span>
            {index === breadcrumbs.length - 1 ? (
              <span className="text-foreground capitalize">{crumb.label}</span>
            ) : (
              <Link href={crumb.href} className="hover:underline capitalize">
                {crumb.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
