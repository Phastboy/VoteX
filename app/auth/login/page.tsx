'use client'
import React from 'react';
import Login from './login';
import { useRouter } from 'next/navigation';

function LoginPage() {
    const router = useRouter();

    const handleLoginSuccess = () => {
        router.push('/dashboard');
    };

    return (
        <div>
            <Login onLoginSuccess={handleLoginSuccess} />
        </div>
    );
}

export default LoginPage;
