import { Inter } from 'next/font/google'
import { getServerSession } from 'next-auth'

import SessionProvider from '@/components/SessionProvider'
import "@/style/tailwind.css";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function Layout({ children}) {
  const session = await getServerSession()
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>{children}</SessionProvider>
      </body>
    </html>
  )
}