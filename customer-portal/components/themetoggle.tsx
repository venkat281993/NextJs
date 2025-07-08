'use client'

import * as React from 'react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
// import { MoonIcon, SunIcon } from 'lucide-react'

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme()

  const isDark = resolvedTheme === 'dark'

  return (
    <Button
      variant="outline"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label="Toggle theme"
      className="flex items-center gap-2 px-4 py-2"
    >
      {/* {isDark ? <MoonIcon className="h-4 w-4" /> : <SunIcon className="h-4 w-4" />} */}
      <span className="text-2xl leading-none">
        {isDark ? '🌙' : '☀️'}
      </span>
    </Button>
  )
}
