import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'MONGO_DB CRUD',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        <h1 className='text-center text-2xl font-bold mt-10'>MONGO_DB CRUD</h1>
        
        {children}</body>
    </html>
  )
}
