import Link from "next/link";

export function Nav() {
    const navLinks = [
        ["/election-settings", "Settings"],
        ["/ballot", "Ballot"],
        ["/voters", "Voters"],
        ["/preview", "Preview"],
        ["/launch-election", "Launch"]
    ];

    return (
        <nav className="flex flex-wrap items-center justify-between p-2">
            <div className={`md:mb-4`}>
                {navLinks.map(([url, title]) => (
                    <Link key={url} href={url} className="block md:mr-4 text-center py-2 px-6 rounded-md hover:bg-gray-100">
                        {title}
                    </Link>
                ))}
            </div>
        </nav>
    );
}
