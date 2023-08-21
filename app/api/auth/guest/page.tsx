'use client'
import React, { useState, ChangeEvent, FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";

interface FormData {
    email: string;
    phone_number: string;
    username: string;
    password: string;
    user_type: string
  }

export default function RegisterGuest() {
    const [formData, setFormData] = useState<FormData>({
        email: "",
        phone_number: "",
        username: "",
        password: "",
        user_type: 'guest'
    });

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
        const response = await fetch(
            "http://votex-backend.eastasia.cloudapp.azure.com/accounts/register/",
            {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
            }
        );

        if (response.ok) {
            alert("Registration successful");
        } else {
            alert("Registration failed");
        }
        } catch (error) {
        console.error(error);
        }
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
        }));
    };

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
                    Sign up
                </h2>
            </div>
                
             <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form 
                className="space-y-6" 
                onSubmit={handleSubmit}>
                    <div>
                        <label 
                        htmlFor="email" 
                        className="block text-sm font-medium leading-6 text-gray-900">
                        Email address
                        </label>
                        <div className="mt-2">
                            <input id="email" 
                            name="email" type="email" 
                            placeholder="example@gmail.com"
                            autoComplete="email" 
                            required 
                            onChange={handleChange}
                            className="block w-full rounded-md border-0 ps-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <label 
                        htmlFor="phone_no" 
                        className="block text-sm font-medium leading-6 text-gray-900">
                        Phone number
                        </label>
                        <div className="mt-2">
                            <input id="phone_no" 
                            name="phone_no" type="tel" 
                            placeholder="+123456789"
                            required 
                            onChange={handleChange}
                            className="block w-full rounded-md border-0 ps-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <label 
                        htmlFor="username" 
                        className="block text-sm font-medium leading-6 text-gray-900">
                        Username
                        </label>
                        <div className="mt-2">
                            <input id="username" 
                            name="username" type="text" 
                            placeholder="your username"
                            autoComplete="username" 
                            required 
                            onChange={handleChange}
                            className="block w-full rounded-md border-0 ps-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                            Password
                            </label>
                        </div>
                        <div className="mt-2">
                            <input 
                            id="password" 
                            name="password" 
                            type="password" 
                            placeholder="*******"
                            autoComplete="current-password" 
                            required 
                            onChange={handleChange}
                            className="block w-full rounded-md border-0 ps-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"/>
                        </div>
                    </div>
                    <div>
                        <button type="submit"
                        className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">
                            Sign up
                        </button>
                    </div>
                </form>
                <p className="mt-10 text-center text-sm text-gray-500">
                Have an account?
                    <Link href="/auth/login" 
                    className="font-semibold leading-6 text-green-600 hover:text-green-500">
                    Login
                    </Link>
                </p>
            </div>
        </div>
    );
}
