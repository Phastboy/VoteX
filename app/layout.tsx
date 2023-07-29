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
      <body className={inter.className}>
		<header className="flex flex-row dark:bg-gray-900 col-white p-10">
			<nav className="flex justify-center space-x-4">
			<div id="logo">
  <Link href="/" className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">
				<Image src="/logo.svg"
					alt="VoteX logo"
					height={200}
					width={144}
					className="h-8 mr-3"
				/>
  </Link></div>
  <Link href="/pricing" className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Pricing</Link>
  <Link href="/projects" className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Reviews</Link>
  <Link href="/reports" className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Contact</Link>
</nav>
		</header>
		<div>
			{children}
		</div>
	  </body>
    </html>
  )
}
