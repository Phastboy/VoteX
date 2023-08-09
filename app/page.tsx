'use client'
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Menu from "./menu";
import autoprefixer from 'autoprefixer';

export default function Home() {
  return (
	<>
	<Head>
		<title>VoteX</title>
		<meta name="description" content="online voting system" />
		<link rel="icon" href="/logo.svg" />
	</Head>
	<main className="">
		<div className="bg-[url('/bg-top.png')] bg-auto md:h-screen lg:h-screen bg-gray-900">
		<header className="flex flex-wrap space-x-0 p-5 md:space-x-20">
          <div >
              <Link href="/" className="">
                <Image src="/logo.svg"
                alt="VoteX logo"
				height={100}
		    	width={144}
				className='float-left transition-transform hover:scale-105'
                />
              </Link>
            </div>
        	<nav className="hidden md:flex md:mt-4 md:w-auto md:justify-end lg:justify-end" id='nav'> 
            	{[
            		['Pricing', '/pricing'],
            		['Reviews', '/reviews'],
            		['Contact', '/contact'],
        			['Login', '/auth/login'],
            		['Sign Up', '/auth/sign-up']
            	].map(([title, url]) => (
            		<Link href={url} 
					className="rounded-lg px-3 py-2 text-white font-medium hover:bg-slate-100 hover:text-slate-900 transition-colors">
						{title}</Link>
            	))}
        	</nav>
		  <div className="float-right justify-end md:hidden lg:hidden">
		  	<Menu />
		  </div>
        </header>
			<div className="text-white">
				<div className="flex flex-col md:flex-row py-5">
					<div className="p-10 md:w-1/2">
						<h3>
							<span className="font-semibold">Vote anytime, anywhere with </span>
							<Image
							src="/logo.png"
							alt="votex logo"
							width={100}
							height={144}
							/>
							: YOUR SECURE ONLINE VOTING APP
						</h3>
						<p className='pt-10'>
						Cast your vote anytime, anywhere with confidence. Simple, secure, and ready to empower your voice. Register now and make a difference!
						</p>
						<Link href='/auth/sign-up'><button className="bg-gray-100 text-black font-bold rounded py-2 px-4 mt-5">Get started</button></Link>
					</div>
					<Image 
					src="/cast_vote.png"
					width={300}
					height={300}
					style={{width: 'auto', height: 'auto'}}
					alt="votex logo"
					className="mt-10 md:w-1/2 md:mt-0 mx-auto"
					/>
				</div>
			</div>
			</div>
		<div className="flex flex-col mx-auto text-center space-y-8 mb-5">
			<div className="flex flex-col text-center mx-auto py-5">
				<h2>Putting Your Needs First: The Ultimate Online Voting System</h2>
				<p>Discover a comprehensive range of or he voting software goons, from secure polling software to managing corales virtual voting events, all designet to exceed your expectations</p>
			</div>
			<div>
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
		</div>
		<div className="bg-gray-900 p-5 text-white">
			<div className="flex flex-col text-center mx-auto">
				<h2>View all Features & Capabilities</h2>
				<p>Unleash the full potential of our platform! Delve into a world of powerful features and capabilities that make online voting a seamless and rewarding experience for all.</p>
				<button className="bg-gray-100 text-black font-bold rounded py-2 px-2 mt-5">Learn more ...</button>
			</div>
		</div>
		<div className="flex flex-col py-10 ">
			<div className="text-center bg-green-100 py-5">
				<Image 
					src="/mac_book.png"
					width={200}
					height={200}
					alt="votex logo"
					className="mx-auto"
				/>
				<h3>Empower Your Voice: Introducing VoteX Online Voting App</h3>
				<p>Fostering leadership through every vote</p>
				<div className="flex space-x-10 justify-center p-10">
					<Link href='/auth/login'><button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
					Login
					</button></Link>
					<Link href='/auth/sign-up'><button className="bg-green-600 hover:bg-green-400 text-white font-bold py-2 px-4 rounded">
					Sign up
					</button></Link>
				</div>
			</div>
			<div className="text-center bg-green-600 text-white py-5 h-full">
				<h3>Initiate Your First Election Journey Today</h3>
				<p>Experience the Power of Votex - Unmatched Online Voting Software. Witness its Brilliance Firsthand.</p>
				<Link href='/auth/sign-up'><button className="bg-gray-100 text-black font-bold rounded py-2 px-4 mt-5">Get started</button></Link>
			</div>
		</div>
		<footer className="bg-gray-900 text-white py-5 text-center h-full">
			<div className="flex-col text-center">
							<Image
							src="/logo.png"
							alt="votex logo"
							width={100}
							height={100}
							className="mx-auto"
							/>
							<p className="text-sm">Your secure online app</p>
			</div>
			<div className="flex space-x-4 justify-center py-5">
							<Image
							src="/ig.png"
							alt="votex logo"
							width={15}
							height={15}
							/>
							<Image
							src="/fb.png"
							alt="votex logo"
							width={15}
							height={15}
							/>
							<Image
							src="/x.png"
							alt="votex logo"
							width={15}
							height={15}
							/>
							<Image
							src="/wa.png"
							alt="votex logo"
							width={15}
							height={15}
							/>
			</div>
			<div className="flex space-x-8 justify-center">
				<div className="flex-col">
					<div className="flex-col my-5 py-5">
						<h4>What we do</h4>
						<div className="text-sm h-full">
							<p>Features</p>
							<p>Blog</p>
							<p>Security</p>
							<p>For Business</p>
							<p>For private Election</p>
						</div>
					</div>
					<div className="flex-col">
						<h4>Use VoteX</h4>
						<div className="text-sm h-full">
							<p>Iphone</p>
							<p>Android</p>
							<p>PC/Mac</p>
						</div>
					</div>
				</div>
				<div className="flex-col">
					<div className="flex-col my-5 py-5">
						<h4>Who we are</h4>
						<div className="text-sm h-full">
							<p>About us</p>
							<p>Careers</p>
							<p>Brand center</p>
							<p>Privacy</p>
						</div>
					</div>
					<div className="flex-col my-5 py-5">
						<h4>Need help?</h4>
						<div className="text-sm h-full">
							<p>Contact us</p>
							<p>Help center</p>
							<p>Security advisories</p>
						</div>
					</div>
				</div>
			</div>
			<p className="pt-5">VoteX, Copyright &copy; 2023</p>
		</footer>
	</main>
	</>
  );
}
