import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function VerifyVoters(){
    return (
        <div className="bg-white p-8 rounded-lg shadow-md">
            <h1 className="text-2xl font-semibold mb-4">Verify Voters</h1>
            <form>
                <div className="mb-4">
                    <Label htmlFor="voters">Enter your email to continue</Label>
                    <Input/>
                </div>
                <Button variant="continue">Verify</Button>
            </form>
        </div>
    );
}