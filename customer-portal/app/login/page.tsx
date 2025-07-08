'use client'

import { signIn } from 'next-auth/react'
import { Button } from '@/components/ui/button'

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-background px-4">
      <h1 className="text-2xl font-bold mb-6">Login</h1>

      <div className="flex space-x-4">
        <Button onClick={() => signIn('google')}>Sign in with Google</Button>
        <Button onClick={() => signIn()}>Sign in as Admin</Button>
      </div>
    </div>
  )
}
