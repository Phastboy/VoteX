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
        <h3>Sign up for free on Votex</h3>
        </>
    );
}