'use client'
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Menu from "./menu";

export default function Home() {
  return (
	<>
	<Head>
		<title>VoteX</title>
		<meta name="description" content="online voting system" />
		<link rel="icon" href="/logo.svg" />
	</Head>
	<main className="bg-black">
		<header className="">
          <div >
              <Link href="/" className="">
                <Image src="/logo.svg"
                alt="VoteX logo"
					      height={200}
					      width={144}
					      className='float-left p-10'
                />
              </Link>
            </div>
            <Menu/>{/*
          <nav className="float-right space-x-4 p-10"> 
            {[
              ['Pricing', '/pricing'],
              ['Reviews', '/reviews'],
              ['Contact', '/contact'],
              ['Login', '/login'],
              ['Sign Up', '/sign-up']
            ].map(([title, url]) => (
            <Link href={url} className="">{title}</Link>
            ))}
          </nav>*/}
        </header>
		<div className="flex flex-col items-center pb-10">
			<div className="bg-[url('/bg-top.png')]">
			<div>
				<h2>
					Put your needs first:
				</h2>
				<p>epistle</p>
			</div>
			<div>
				<p>
					Discover comprehensive range
				</p>
			</div>
			<div className=''>
				<Image 
					src="/cast_vote.png"
					width={100}
					height={100}
					alt="votex logo"
				/>
			</div>
			</div>
			<div>
				<Image 
					src="/register.png"
					width={100}
					height={100}
					alt="votex logo"
				/>
				<h1>
					Convenient Onboarding
				</h1>
			</div>
			<div>
				<Image 
					src="/Vector.png"
					width={100}
					height={100}
					alt="votex logo"
				/>
				<h1>
					Rock solid security
				</h1>
			</div>
			<div>
				<Image 
					src="/carbon_result.png"
					width={100}
					height={100}
					alt="votex logo"
				/>
				<h1>
					Real-time results
				</h1>
			</div>
			<div>
				<Image 
					src="/game-icons_vote.png"
					width={100}
					height={100}
					alt="votex logo"
				/>
				<h1>
					Diverse Elections
				</h1>
			</div>
			<div>
				<Image 
					src="/ph_globe.png"
					width={100}
					height={100}
					alt="votex logo"
				/>
				<h1>
					universal access
				</h1>
			</div>
			<div>
				<Image 
					src="/material-symbols_support.png"
					width={100}
					height={100}
					alt="votex logo"
				/>
				<h1>
					Exceptional support
				</h1>
			</div>
		</div>
		<div>
			<div>
				<h1>
					Initiate your first election journey
				</h1>
			</div>
		</div>
	</main>
	</>
  );
}
