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
                   Verify your account 
                </h2>
				<p className="mt-3 text-center leading-9 tracking-tight text-gray-900">Verification code has been sent to your email and phone number</p>
            </div>
                
             <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-sm">
                <form 
                className="space-y-6" 
                action="/feed" 
                method="POST">
                    <div>
                        <label 
                        htmlFor="email" 
                        className="mt-10 text-center font-bold leading-9 tracking-tight text-gray-900">
                        Enter OTP
                        </label>
                        <div className="mt-2">
                            <input id="email" 
                            name="email" type="number" 
                            placeholder="Enter the verification code"
                            autoComplete="email" 
                            required 
                            className="block w-full rounded-md border-0 ps-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div >
                        <button type="submit"
                        className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">
                           Verify 
                        </button>
                    </div>
                </form>
				<div className="text-sm">
					<p className="mt-10 text-center text-sm text-gray-500">
                Did not receive OTP?
						<Link href="#" 
						className="font-semibold leading-6 text-green-600 hover:text-green-500">
						Resend OTP
						</Link>
					</p>
				</div>
            </div>
        </div>
    );
}

