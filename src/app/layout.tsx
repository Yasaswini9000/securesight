import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SecureSight Dashboard',
  description: 'CCTV incident monitoring dashboard',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="pt-20 px-4 bg-[#0A1128] min-h-screen text-white">
          {children}
        </main>
      </body>
    </html>
  )
}