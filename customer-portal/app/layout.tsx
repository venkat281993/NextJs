import { ThemeProvider } from '@/components/theme-provider'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import Sidebar from '@/components/layout/sidebar'
import '@/app/globals.css'
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {/* Top Header */}
          <Header />

          {/* Main content (sidebar + page) */}
          <div className="flex flex-1">
            <Sidebar />

            <main className="flex-1 p-6 bg-background">
              {children}
            </main>
          </div>

          {/* Bottom Footer */}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
