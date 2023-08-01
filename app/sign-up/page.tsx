import '../globals.css';
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
                    Sign up for free
                </h2>
            </div>
                
             <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form 
                className="space-y-6" 
                action="/dashboard" 
                method="POST">
                    <div>
                        <label 
                        htmlFor="matric_no" 
                        className="block text-sm font-medium leading-6 text-gray-900">
                        Matric number
                        </label>
                        <div className="mt-2">
                            <input id="matric_no" 
                            name="matric_no" type="text" 
                            placeholder="ABC/1990/01"
                            required 
                            className="block w-full rounded-md border-0 ps-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <label 
                        htmlFor="email" 
                        className="block text-sm font-medium leading-6 text-gray-900">
                        Student email address
                        </label>
                        <div className="mt-2">
                            <input id="email" 
                            name="email" type="email" 
                            placeholder="example@school.edu.ng"
                            required 
                            className="block w-full rounded-md border-0 ps-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <label 
                        htmlFor="phone_no" 
                        className="block text-sm font-medium leading-6 text-gray-900">
                        Phone number
                        </label>
                        <div className="mt-2">
                            <input id="tel" 
                            name="phone_no" type="tel" 
                            placeholder="+123456789"
                            required 
                            className="block w-full rounded-md border-0 ps-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <label 
                        htmlFor="username" 
                        className="block text-sm font-medium leading-6 text-gray-900">
                        Userrname
                        </label>
                        <div className="mt-2">
                            <input id="username" 
                            name="username" type="text" 
                            placeholder="username"
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
                    <div>
                        <button type="submit"
                        className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">
                        Sign up
                        </button>
                    </div>
                </form>
                <p className="mt-10 text-center text-sm text-gray-500">
                Not a student?
                    <Link href="/guest" 
                    className="font-semibold leading-6 text-green-600 hover:text-green-500">
                    Sign up as guest
                    </Link>
                </p>
            </div>
        </div>
    );
}