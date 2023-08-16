'use client'
import { createContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import jwt_decode from "jwt-decode";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const router = useRouter();
    const [authTokens, setAuthTokens] = useState(() => {
        const storedTokens = localStorage.getItem('authTokens');
        return storedTokens ? JSON.parse(storedTokens) : null;
    });
    const [user, setUser] = useState(() => {
        const storedTokens = localStorage.getItem('authTokens');
        return storedTokens ? jwt_decode(storedTokens) : null;
    });
    const [loading, setLoading] = useState(true);
    const [profile, setProfile] = useState([]);
    const [userdata, setUserdata] = useState([]);
    const [paymentdata, setPaymentData] = useState([]);

    const loginUser = async (e) => {
        e.preventDefault();
        const response = await fetch('https://api.mperial.ng/api/login/tenant', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 'email': e.target.email.value, 'password': e.target.password.value })
        });

        if (response.status === 200) {
            const data = await response.json();
            setAuthTokens(data);
            setUser(jwt_decode(data.access));
            localStorage.setItem('authTokens', JSON.stringify(data));
            router.push('/');
        } else {
            alert('Invalid Credentials!');
        }
    };

    const logoutUser = () => {
        setAuthTokens(null);
        setUser(null);
        localStorage.removeItem('authTokens');
        router.push('/login');
    };

    const updateToken = async () => {
        // ... (your updateToken logic)
    };

    const getProfile = async () => {
        // ... (your getProfile logic)
    };

    const getpaymentinfo = async () => {
        // ... (your getpaymentinfo logic)
    };

    useEffect(() => {
        // ... (your useEffect logic)
    }, [authTokens, loading]);

    const context_data = {
        user: user,
        authTokens: authTokens,
        loginUser: loginUser,
        logoutUser: logoutUser,
        getProfile: getProfile,
        profile: profile,
        userdata: userdata,
        getpaymentinfo: getpaymentinfo,
        paymentdata: paymentdata
    };

    return (
        <AuthContext.Provider value={context_data}>
            {loading ? null : children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
