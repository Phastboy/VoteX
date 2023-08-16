'use client'
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function AddVoters(){
    const [voters, setVoters] = useState([]);
    return (
        <div className="bg-white p-8 rounded-lg shadow-md">
            <h1 className="text-2xl font-semibold mb-4">Add Voters</h1>
            <div className="mb-4">
                <Label htmlFor="voters">Add Voter email</Label>
                <Input/>
            </div>
            <div className="mb-4">
                <Label htmlFor="voter">Add Voter phone number</Label>
                <Input/>
            </div>
        </div>
    );
}