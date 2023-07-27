import './globals.css'
import type { Metadata } from 'next'
import Image from 'next/image';
import { Inter } from 'next/font/google'

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
		<header>
			<div>
				<Image src="/logo.svg"
					alt="VoteX logo"
					height={200}
					width={144}
				/>
			</div>
			<nav>
				<ul>
					<li>pricing</li>
					<li>reviews</li>
					<li>contact</li>
				</ul>
				<ul>
					<li>login</li>
					<li>sign up</li>
				</ul>
			</nav>
		</header>
		{children}
	  </body>
    </html>
  )
}
