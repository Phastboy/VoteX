import Image from "next/image";
import Link from "next/link";

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
                <form 
                className="space-y-6" 
                action="/feed" 
                method="POST">
                    <div>
                        <label 
                        htmlFor="email" 
                        className="block text-sm font-medium leading-6 text-gray-900">
                        Email address
                        </label>
                        <div className="mt-2">
                            <input id="email" 
                            name="email" type="email" 
                            placeholder="example@gmail.com"
                            autoComplete="email" 
                            required 
                            className="block w-full rounded-md border-0 ps-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                            Password
                            </label>
                        </div>
                        <div className="mt-2">
                            <input 
                            id="password" 
                            name="password" 
                            type="password" 
                            placeholder="*******"
                            autoComplete="current-password" 
                            required 
                            className="block w-full rounded-md border-0 ps-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"/>
                        </div>
                    </div>
					<div className="flex items-start">
            <div className="flex items-start">
                <div className="flex items-center h-5">
                    <input id="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-green-300 dark:bg-green-700 dark:border-gray-600 dark:focus:ring-green-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" />
                </div>
                <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
            </div>
            <Link href="/auth/login/forgot-password" className="font-semibold ml-auto text-sm text-green-600 hover:text-green-500 dark:text-green-500">Forgot Password?</Link>
        </div>
                    <div>
                        <button type="submit"
                        className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">
                            Sign in
                        </button>
                    </div>
                </form>
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
