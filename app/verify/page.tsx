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
            type="text"
            placeholder="enter the verification code that was sent to you"
            />
            <button className="btn btn-green">
            Button
            </button>
        </form>
        </>
    );
}