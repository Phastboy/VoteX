import Image from "next/image";
import Link from "next/link";
import LoginForm from "@/components/forms/LoginForm";
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Full Auth | Login',
	description: 'Full Auth login page',
};

export default function Login() {
    return (
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <Image 
                className="mx-auto h-10 w-auto" 
                height={100}
                width={100}
                src="/black.svg" 
                alt="VoteX"
                />
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Sign in to your account
                </h2>
            </div>
                
             <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
             <LoginForm />
				<div className="text-sm">
					<p className="mt-10 text-center text-sm text-gray-500">
                Not a member?
						<Link href="/auth/sign-up" 
						className="font-semibold leading-6 text-green-600 hover:text-green-500">
						Sign up
						</Link>
					</p>
				</div>
            </div>
        </div>
    );
}
