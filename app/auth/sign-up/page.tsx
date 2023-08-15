'use client';
import Image from "next/image";
import Link from "next/link";
import { useState, ChangeEvent, FormEvent } from "react";
import  Spinner  from '@/components/common/Spinner';
import { useRegister } from "@/hooks";
import { RegisterForm } from "@/components/forms";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Full Auth | Register',
	description: 'Full Auth register page',
};



export default function Login() {
    const [value, setValue] = useState()

    const {
		email,
        username,
		password,
        phone_no,
		matric_no,
        user_type,
        isLoading,
		onChange,
		onSubmit,
    } = useRegister();
    
      
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
                
             <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
                <RegisterForm/>
                <p className="mt-10 text-center text-sm text-gray-500">
                Not a student?
                    <Link href="/auth/guest" 
                    className="font-semibold leading-6 text-green-600 hover:text-green-500">
                    Sign up as guest
                    </Link>
                </p>
            </div>
        </div>
    );
}
