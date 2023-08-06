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
	<main className="">
		{/*<header className="">
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
          </nav>
        </header>*/}
			<div className="bg-[url('/bg-top.png')] bg-gray-900 text-white">
				<div className="flex py-2 my-10">
					<div className="flex-col">
						<h2>
						Vote anytime, anywhere with 
							<Image
							src="/logo.png"
							alt="votex logo"
							width={100}
							height={100}
							/>
						</h2>
						<h5 >
							: YOUR SECURE ONLINE VOTING APP
						</h5>
						<p>
						Cast your vote anytime, anywhere with confidence. Simple, secure, and ready to empower your voice. Register now and make a difference!
						</p>
					</div>
					<Image 
					src="/cast_vote.png"
					width={100}
					height={100}
					alt="votex logo"
					className="float-right"
					/>
				</div>
			</div>
		<div className="flex flex-col mx-auto text-center space-y-10 mb-10">
			<div className="flex flex-col text-center mx-auto mb-10">
				<h2>Putting Your Needs First: The Ultimate Online Voting System</h2>
				<p>Discover a comprehensive range of or he voting software goons, from secure polling software to managing corales virtual voting events, all designet to exceed your expectations</p>
			</div>
			<div className="flex flex-col text-center">
				<Image 
					src="/register.png"
					width={100}
					height={100}
					alt="votex logo"
					className="mx-auto"
				/>
				<h3>
					Convenient Onboarding
				</h3>
				<p>Quick and hassle free registration to get you started.</p>
			</div>
			<div className="flex flex-col mx-auto">
				<Image 
					src="/Vector.png"
					width={100}
					height={100}
					alt="votex logo"
					className="mx-auto"
				/>
				<h3>
					Rock solid security
				</h3>
				<p>Advanced encryption and authentication to protect your vote.</p>
			</div>
			<div className="flex flex-col mx-auto">
				<Image 
					src="/carbon_result.png"
					width={100}
					height={100}
					alt="votex logo"
					className="mx-auto"
				/>
				<h3>
					Real-time results
				</h3>
				<p>Stay informed with live updates on election outcomes.</p>
			</div>
			<div className="flex flex-col mx-auto">
				<Image 
					src="/game-icons_vote.png"
					width={100}
					height={100}
					alt="votex logo"
					className="mx-auto"
				/>
				<h3>
					Diverse Elections
				</h3>
				<p>Participate in various polls and express your opinions.</p>
			</div>
			<div className="flex flex-col mx-auto">
				<Image 
					src="/ph_globe.png"
					width={100}
					height={100}
					alt="votex logo"
					className="mx-auto"
				/>
				<h3>
					universal access
				</h3>
				<p>Vote from anywhere around the globe, 24/7</p>
			</div>
			<div className="flex flex-col mx-auto">
				<Image 
					src="/material-symbols_support.png"
					width={100}
					height={100}
					alt="votex logo"
					className="mx-auto"
				/>
				<h3>
					Exceptional support
				</h3>
				<p>Questions or need help? Our support team respond within 10 minutes during business hours.</p>
			</div>
		</div>
		<div>
			<div>
				<h3>
					Initiate your first election journey
				</h3>
			</div>
		</div>
	</main>
	</>
  );
}
