"use client"
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React, { useState, ChangeEvent, FormEvent } from 'react';

interface VoterVerificationProps {
    allowedVoters: AllowedVoter[];
    onVoterVerified: (isAllowed: boolean) => void;
}

interface AllowedVoter {
    email: string;
    phone: string;
}

export default function VoterVerification({ allowedVoters, onVoterVerified }: VoterVerificationProps): JSX.Element {
    const [verificationData, setVerificationData] = useState({
        email: '',
        phone: '',
    });

    const handleInputChange = (field: 'email' | 'phone', event: ChangeEvent<HTMLInputElement>) => {
        setVerificationData({
            ...verificationData,
            [field]: event.target.value,
        });
    };

    const handleVerificationSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const matchedVoter = allowedVoters.find(
            (voter) =>
                voter.email === verificationData.email && voter.phone === verificationData.phone
        );

        onVoterVerified(matchedVoter !== undefined);
    };

    return (
        <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-2">Voter Verification</h2>
            {allowedVoters? (
            <form onSubmit={handleVerificationSubmit}>
                <div className="mb-2">
                    <Input
                        type="email"
                        value={verificationData.email}
                        onChange={(event) => handleInputChange('email', event)}
                        placeholder="Email"
                    />
                </div>
                <div className="mb-2">
                    <Input
                        type="tel"
                        value={verificationData.phone}
                        onChange={(event) => handleInputChange('phone', event)}
                        placeholder="Phone"
                    />
                </div>
                <Button type="submit" variant="continue">Check Voter Eligibility</Button>
            </form>
            ) : (
                <p className="text-center">Loading Voters...</p>
            )
            }
        </div>
    );
}
