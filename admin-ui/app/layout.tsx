// app/layout.tsx
import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import Header from '@/components/header'
import Sidebar from '@/components/sidebar'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Admin UI',
  description: 'License and Subscription Management',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {/* Full height page */}
          <div className="flex flex-col min-h-screen">
            <Header />

            {/* Main layout */}
            <div className="flex flex-1">
              <Sidebar />

              {/* Main content */}
              <main className="flex-1 p-6 bg-background">{children}</main>
            </div>

            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
