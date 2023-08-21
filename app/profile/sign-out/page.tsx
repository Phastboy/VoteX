'use client'
import { Button } from "@/components/ui/button";

export default function LogOut() {
    const handleSignOut = async (event) => {
        event.preventDefault();
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        window.location.href = '/auth/login';
    }

    return (
        <div className="m-10">
            <h1>Log Out</h1>
            <form method="post" onSubmit={handleSignOut}>
                <Button variant="continue" type="submit">Sign out</Button>
            </form>
        </div>
    )
}