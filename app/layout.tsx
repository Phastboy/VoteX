//import './globals.css'
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
		<header className="flex flex-row dark:bg-gray-900 col-white p-10">
			<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
				<Image src="/logo.svg"
					alt="VoteX logo"
					height={200}
					width={144}
					className="h-8 mr-3"
				/>
			</div>
			<div className="hidden w-full md:block md:w-auto">
				<ul>
					<li>pricing</li>
					<li>reviews</li>
					<li>contact</li>
				</ul>
			</div>
			<div>
				<ul>
					<li>login</li>
					<li>sign up</li>
				</ul>
			</div>
		</header>
		{children}
	  </body>
    </html>
  )
}
