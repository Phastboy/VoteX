import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Nav() {
    const navLinks = [
        ["/election-settings", "Settings"],
        ["/ballot", "Ballot"],
        ["/voters", "Voters"],
        ["/preview", "Preview"],
        ["/launch-election", "Launch"]
    ];

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="flex flex-wrap items-center justify-between p-2">
            <div className={`md:mb-4`}>
                {navLinks.map(([url, title]) => (
                    <Link key={url} href={url} className="block md:mr-4 text-center py-2 px-6 rounded-md hover:bg-gray-100">
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
