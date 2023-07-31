import Image from "next/image";

export default function Login() {
    return (
        <>
        <div>
            <Image
            src='/logo.svg'
            height={100}
            width={100}
            alt="VoteX logo"
            />
        </div>
        <h3>Your verifiication code has been sent to your phone number and email</h3>
        <form>
            <input
            type="number"
            placeholder="enter the verification code that was sent to you"
            />
            <button 
            type="submit"
            className="bg-green-600 rounded-md lg:rounded-lg font-semibold">
            Submit
            </button>
        </form>
        </>
    );
}