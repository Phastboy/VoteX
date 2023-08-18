export default function LogOut() {
    const handleSignOut = async (event) => {
        event.preventDefault();
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        window.location.href = '/auth/login';
    }

    return (
        <div>
            <h1>Log Out</h1>
            <form method="post" action="/api/auth/signout">
                <button type="submit">Sign out</button>
            </form>
        </div>
    )
}