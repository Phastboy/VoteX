import React from 'react';
import { Button } from '@/components/ui/button';
import { Nav } from '../nav';
import Link from 'next/link';

export default function Ballot() {
    return (
        <div className='flex h-screen'>
            <div className='w-1/4'>
                <Nav />
            </div>
            <div className='w-3/4'>
                <main className="flex items-center justify-center bg-gray-100 p-10">
                    <div className="bg-white p-8 rounded-lg shadow-md">
                        <h1 className="text-2xl font-semibold mb-2">Create Ballot</h1>
                        <p className="text-gray-600 mb-4">Start off by adding your first ballot</p>
                        <Link href="/election/ballot/addBallot">
                            <Button variant='continue' className="w-full">
                                Add Ballot
                            </Button>
                        </Link>
                    </div>
                </main>
            </div>
        </div>
    );
}
