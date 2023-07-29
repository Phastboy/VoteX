import './globals.css'
import type { Metadata } from 'next'
import Image from 'next/image';
import { Inter } from 'next/font/google';
import Link from 'next/link';



const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'VoteX',
  description: 'online voting system',
}
type ChildrenProps={
  children: React.ReactNode
}
export default function RootLayout({
  children,
}: ChildrenProps) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
