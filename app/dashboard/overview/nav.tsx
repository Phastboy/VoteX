"use client"
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Nav() {
    const navLinks = [
        ["/dashboard/election-settings", "Settings"],
        ["/dashboard/ballot", "Ballot"],
        ["/dashboard/voters", "Voters"],
        ["/dashboard/preview", "Preview"],
        ["/dashboard/launch-election", "Launch"]
    ];

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="flex flex-wrap items-center justify-between p-2 bg-green-700 text-white">
            <div className="mb-4">
                <Link href="/" className="text-center">
                    <Image 
                        src="/black.svg"
                        alt="VoteX logo"
                        height={80}
                        width={120}
                    />
                </Link>
            </div>
            <div className={`md:flex md:space-x-4 ${isMenuOpen ? "block" : "hidden"} md:mb-4`}>
                {navLinks.map(([url, title]) => (
                    <Link key={url} href={url} className="block md:inline-block md:mr-4 text-center py-2 px-6 rounded-md hover:bg-green-800">
                        {title}
                    </Link>
                ))}
            </div>
            <div className={`md:hidden ${isMenuOpen ? "hidden" : "block"}`}>
                <Menu className="w-6 h-6 text-white cursor-pointer" onClick={toggleMenu} />
            </div>
            <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"} md:mb-4`}>
                <X className="w-6 h-6 text-white cursor-pointer" onClick={toggleMenu} />
            </div>
        </nav>
    );
}
