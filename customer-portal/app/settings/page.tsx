import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { redirect } from 'next/navigation'

export default async function SettingsPage() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect('/login')
  }

  return (
    <div>
      <h1 className="text-2xl font-semibold">Settings</h1>
      <p>Welcome, {session.user?.name}!</p>
    </div>
  )
}
