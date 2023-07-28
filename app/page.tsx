'use client'
import Image from 'next/image';
import Link from 'next/link';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"




export default function Home() {
  return (
	<>
		<nav>
			<ul>
				<li>
					Pricing
				</li>
				<li>
					Reviews
				</li>
				<li>
					Contact
				</li>
				<li>
					Login
				</li>
				<li>
					sign up
				</li>
			</ul>
		</nav>
		<h1>Home page</h1>
		<div>
			<h1>
				vote anytime with
				<Image 
					src="/logo.svg"
					width={100}
					height={100}
					alt="votex logo"
				/>
			</h1>
		</div>
		<div>
			<div>
				<h2>
					Put your needs first:
				</h2>
			</div>
			<div>
				<p>
					Discover comprehensive range
				</p>
			</div>
			<div>
				<Image 
					src="/cast_vote.png"
					width={100}
					height={100}
					alt="votex logo"
				/>
				<h1>
				</h1>
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
	</>
  );
}
