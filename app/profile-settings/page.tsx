import '../globals.css';
import Image from "next/image";
import Link from "next/link";

export default function Login() {
    return (
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                
             <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
					<h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
					Profile settings
					</h2>
                <form 
                className="space-y-6" 
                action="/api" 
                method="POST">
					<div className="sm:mx-auto sm:w-full sm:max-w-sm">
						<Image 
						className="my-5 h-auto w-auto" 
						height={200}
						width={200}
						src="/avatar.png" 
						alt="VoteX"
						/>
                        <input id="avatar" 
                        name="avatar" type="file" 
                        placeholder="Change avatar"
						accept="image/png, image/jpg, image/svg, image/jpeg, image/gif"
                        className="hidden block w-full border-0 ps-2 py-1.5 rounded-md text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                        />
                        <label 
                        htmlFor="avatar" 
                        className="block text-sm font-medium leading-6 text-gray-900">
                        Change avatar
                        </label>
					</div>
                    <div>
                        <label 
                        htmlFor="email" 
                        className="block text-sm font-medium leading-6 text-gray-900">
                        Change email address
                        </label>
                        <div className="mt-2">
                            <input id="email" 
                            name="email" type="email" 
                            placeholder="newexample@gmail.com"
                            className="block w-full rounded-md border-0 ps-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                            Change username
                            </label>
                        </div>
                        <div className="mt-2">
                            <input 
                            id="username" 
                            name="username" 
                            type="name" 
							placeholder="New username"
                            className="block w-full rounded-md border-0 ps-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"/>
                        </div>
                    </div>
                    <div className="">
                        <button type="submit"
                        className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">
                           Update profile 
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

