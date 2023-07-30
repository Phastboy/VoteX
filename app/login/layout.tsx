import '../globals.css'
import type { Metadata } from 'next';
import Head from 'next/head'; 
import Image from 'next/image';
import { Inter } from 'next/font/google';
import Link from 'next/link';


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Login to your VoteX account',
  description: 'Login to your VoteX account'
}
type ChildrenProps={
  children: React.ReactNode
}
export default function RootLayout({
  children,
}: ChildrenProps) {
  return (
    <>
       {/*<Head>
        <title>Login</title>
        <meta name="description" content="Login to your VoteX account" />
  </Head>*/}
      <body className={inter.className}>
      <div>
        {children}
      </div>
	  </body>
    </>
  )
}
