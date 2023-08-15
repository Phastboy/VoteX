'use client'
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Menu from "./menu";
import { useSession, signIn, signOut } from "next-auth/react"
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
            		<Link key={url} href={url} className="rounded-lg px-3 py-2 text-white font-medium hover:bg-slate-100 hover:text-slate-900 transition-colors">
                	    {title}
            	    </Link>
            		))}
        		</nav>
				<div className="float-right justify-end md:hidden lg:hidden">
                	<Menu />
            	</div>
        	</header>
			<div className="text-white">
    			<div className="flex flex-col md:flex-row py-10 overflow-hidden">
        			<div className="p-10 md:w-1/2">
            			<h3 className="font-semibold">
                			Vote Anytime, Anywhere with{' '}
                			<Image src="/logo.png" alt="Votex logo" width={100} height={144} />: Your Secure Online Voting App
            			</h3>
            			<p className="pt-10">
                		Make your voice heard! Explore our platform where your opinions shape the narrative.
                		Dive into engaging elections, vibrant polls, and thought-provoking discussions. Join today and be part of the dialogue that matters most to you!
            			</p>
            			<Link href="/auth/sign-up">
                			<button className="bg-gray-100 text-black font-bold rounded py-2 px-4 mt-5">Get Started</button>
            			</Link>
        			</div>
        			<Image
            		src="/cast_vote.png"
            		width={300}
            			height={300}
            		style={{ width: 'auto', height: 'auto' }}
            		alt="Votex logo"
            		className="mt-10 md:w-1/2 md:mt-0 mx-auto"
        			/>
    			</div>
			</div>
		</div>
		<div className="flex flex-col mx-auto text-center space-y-8 mb-5">
    		<div className="flex flex-col text-center mx-auto py-5">
        	<h2 className="text-3xl font-semibold">
            Putting Your Needs First: The Ultimate Online Voting System
        	</h2>
        	<p className="text-lg">
            Explore a comprehensive range of voting solutions, from secure polling software to managing virtual voting events, all designed to exceed your expectations.
        	</p>
    		</div>
    		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        		<div className="flex flex-col items-center">
            		<Image 
                	src="/register.png"
                	width={100}
                	height={100}
                	alt="Votex logo"
                	className="mx-auto"
            		/>
        		    <h3 className="text-xl font-semibold mt-3">
                	Convenient Onboarding
            		</h3>
            		<p>
                	Quick and hassle-free registration to get you started.
            		</p>
        		</div>
        		<div className="flex flex-col items-center">
            		<Image 
                	src="/Vector.png"
                	width={100}
                	height={100}
                	alt="Votex logo"
                	className="mx-auto"
            		/>
            		<h3 className="text-xl font-semibold mt-3">
                	Rock Solid Security
            		</h3>
            		<p>
                	Advanced encryption and authentication to protect your vote.
            		</p>
        		</div>
        		<div className="flex flex-col items-center">
            		<Image 
                	src="/carbon_result.png"
                	width={100}
                	height={100}
                	alt="Votex logo"
                	className="mx-auto"
            		/>
            		<h3 className="text-xl font-semibold mt-3">
                	Real-time Results
            		</h3>
            		<p>
                	Stay informed with live updates on election outcomes.
            		</p>
        		</div>
        		<div className="flex flex-col items-center">
            		<Image 
                	src="/game-icons_vote.png"
                	width={100}
                	height={100}
                	alt="Votex logo"
                	className="mx-auto"
            		/>
            		<h3 className="text-xl font-semibold mt-3">
                	Diverse Elections
            		</h3>
            		<p>
                	Participate in various polls and express your opinions.
            		</p>
        		</div>
        		<div className="flex flex-col items-center">
            		<Image 
            	    src="/ph_globe.png"
                	width={100}
	                height={100}
	                alt="Votex logo"
    	            className="mx-auto"
    		        />
		            <h3 className="text-xl font-semibold mt-3">
	                Universal Access
		            </h3>
		            <p>
	                Vote from anywhere around the globe, 24/7.
		            </p>
		        </div>
		        <div className="flex flex-col items-center">
        		    <Image 
	                src="/material-symbols_support.png"
	                width={100}
	                height={100}
	                alt="Votex logo"
	                className="mx-auto"
		            />
		            <h3 className="text-xl font-semibold mt-3">
        	        Exceptional Support
		            </h3>
        		    <p>
	                Questions or need help? Our support team responds within 10 minutes during business hours.
		            </p>
		        </div>
		    </div>
			</div>

			<div className="bg-gray-900 p-5 text-white">
    			<div className="flex flex-col items-center mx-auto text-center">
        			<h2 className="text-2xl font-semibold">
            		Explore All Features & Capabilities
        			</h2>
        			<p className="mt-3">
            		Unleash the full potential of our platform! Discover a world of powerful features and capabilities that transform online voting into a seamless and rewarding experience for all.
        			</p>
        			<button className="bg-gray-100 text-black font-bold rounded py-2 px-4 mt-5">
            		Learn More ...
        			</button>
    			</div>
			</div>
			<div className="flex flex-col py-10">
    			<div className="text-center bg-green-100 py-5">
        			<Image 
            		src="/mac_book.png"
            		width={200}
            		height={200}
            		alt="VoteX logo"
            		className="mx-auto"
        			/>
        			<h3 className="text-xl font-semibold mt-3">
            		Empower Your Voice with VoteX Online Voting App
        			</h3>
        			<p className="mt-2">
            		Fostering leadership through every vote.
        			</p>
        			<div className="flex space-x-10 justify-center mt-5">
            			<Link href='/auth/login'>
                			<button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                    		Login
                			</button>
            			</Link>
            			<Link href='/auth/sign-up'>
                			<button className="bg-green-600 hover:bg-green-400 text-white font-bold py-2 px-4 rounded">
                    		Sign Up
                			</button>
            			</Link>
        			</div>
    			</div>
    			<div className="text-center bg-green-600 text-white py-5 mt-5">
        			<h3 className="text-xl font-semibold">
        		    Begin Your First Election Journey Today
        			</h3>
        			<p className="mt-2">
            		Experience the Power of VoteX - Unmatched Online Voting Software. Witness its Brilliance Firsthand.
        			</p>
        			<Link href='/auth/sign-up'>
            			<button className="bg-gray-100 text-black font-bold rounded py-2 px-4 mt-5">
                			Get Started
            			</button>
        			</Link>
    			</div>
			</div>

		<footer className="bg-gray-900 text-white py-5 text-center">
    		<div className="flex flex-col items-center">
        		<div className="flex flex-col items-center">
            		<Image
                	src="/logo.png"
                	alt="VoteX logo"
                	width={100}
                	height={100}
                	className="mx-auto"
            		/>
            		<p className="text-sm">Your Secure Online App</p>
        		</div>
        		<div className="flex space-x-4 justify-center mt-5">
            		<Image src="/ig.png" alt="Instagram" width={15} height={15} />
            		<Image src="/fb.png" alt="Facebook" width={15} height={15} />
            		<Image src="/x.png" alt="Twitter" width={15} height={15} />
            		<Image src="/wa.png" alt="WhatsApp" width={15} height={15} />
        		</div>
        		<div className="flex space-x-8 justify-center mt-8">
        		    <div className="flex flex-col">
                		<div className="flex flex-col my-5 py-3">
                    		<h4 className="text-sm font-semibold">What We Do</h4>
                    		<div className="text-xs">
                        		<p>Features</p>
                        		<p>Blog</p>
                        		<p>Security</p>
                        		<p>For Business</p>
                        		<p>For Private Election</p>
                    		</div>
                		</div>
                		<div className="flex flex-col my-5 py-3">
                    		<h4 className="text-sm font-semibold">Use VoteX</h4>
                    		<div className="text-xs">
                        		<p>iPhone</p>
                        		<p>Android</p>
                        		<p>PC/Mac</p>
                    		</div>
                		</div>
            		</div>
            		<div className="flex flex-col">
                		<div className="flex flex-col my-5 py-3">
                    		<h4 className="text-sm font-semibold">Who We Are</h4>
                    		<div className="text-xs">
                        		<p>About Us</p>
                        		<p>Careers</p>
                        		<p>Brand Center</p>
                        		<p>Privacy</p>
                    		</div>
                		</div>
                		<div className="flex flex-col my-5 py-3">
                    		<h4 className="text-sm font-semibold">Need Help?</h4>
                    		<div className="text-xs">
                    		    <p>Contact Us</p>
                        		<p>Help Center</p>
                		        <p>Security Advisories</p>
                		    </div>
                		</div>
            		</div>
        		</div>
    			</div>
    			<p className="text-xs mt-8">VoteX, Copyright &copy; 2023</p>
			</footer>
		</main>
	</>
  );
}
