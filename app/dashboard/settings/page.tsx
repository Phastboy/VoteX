import Link from "next/link";

export default function Profile(){
	return (
		<div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
			<h1>Account settings</h1>
			<div className="ps-4">
				<h6>
					<Link href="/dashboard/settings/profile-settings" className="font-semibold text-sm">
					Profile
					</Link>
				</h6>
				<h6>
					<Link href="#" className="font-semibold text-sm">
					Appearance
					</Link>
				</h6>
				<h6>
					<Link href="#" className="font-semibold text-sm">
					Security
					</Link>
				</h6>
				<h6>
					<Link href="#" className="font-semibold text-sm">
					Deactivate account
					</Link>
				</h6>
			</div>
		</div>
	);
}
