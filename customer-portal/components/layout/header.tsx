import { ThemeToggle } from '@/components/themetoggle'

export default function Header() {
  return (
    <header className="w-full px-6 py-3 border-b bg-background flex items-center justify-between">
      <div className="text-lg font-semibold"></div>
      <div className="flex items-center gap-2">
      <ThemeToggle />
      <div className="text-sm font-bold">🚀 YourLogo</div>
      </div>
    </header>
  )
}
