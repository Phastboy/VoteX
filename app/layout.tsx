import './globals.css';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { Setup } from '@/components/utils';
import  Provider  from 'redux/provider';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'VoteX',
  description: 'online voting system',
};

type ChildrenProps = {
  children: React.ReactNode;
};

{/* export default function RootLayout({ children }: ChildrenProps) {
  return (
      <html lang="en">
        <body className={inter.className}>
          {children}
        </body>
      </html>
      
  );
} */}
export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<Provider>
					<Setup />
					
					<div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 my-8'>
						{children}
					</div>
				</Provider>
			</body>
		</html>
	);
}
