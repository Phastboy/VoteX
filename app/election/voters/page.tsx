'use client'
import { Button } from '@/components/ui/button';
import React, { useState, ChangeEvent } from 'react';

interface VotingOptionsProps {
    onAllowedVotersChange: (allowedVoters: string[]) => void;
    onPublicVotingChange: (isPublicVoting: boolean) => void;
}

function VotingOptions({
    onAllowedVotersChange,
    onPublicVotingChange
}: VotingOptionsProps): JSX.Element {
    const [allowedVoters, setAllowedVoters] = useState<string[]>([]);
    const [isPublicVoting, setIsPublicVoting] = useState(false);

    const handleAllowedVoterChange = (index: number, event: ChangeEvent<HTMLInputElement>) => {
        const newAllowedVoters = [...allowedVoters];
        newAllowedVoters[index] = event.target.value;
        setAllowedVoters(newAllowedVoters);
        onAllowedVotersChange(newAllowedVoters);
    };

    const handlePublicVotingChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.checked;
        setIsPublicVoting(value);
        onPublicVotingChange(value);
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            const response = await fetch('https://votex-backend.eastasia.cloudapp.azure.com/elections/:id/voters', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    allowedVoters,
                    isPublicVoting,
                }),
            });

            if (response.ok) {
                const data = await response.json();
                alert('Voters registered')
                console.log('Voting options submitted:', data);
            } else {
                console.error('Error submitting voting options:', response.status);
            }
        } catch (error) {
            alert('Voters registration failed')
            console.error('Error submitting voting options:', error);
        }
    }



    return (
        <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-2">Allowed Voters</h2>
            <form onSubmit={handleSubmit}>
                {allowedVoters.map((voter, index) => (
                    <input
                        key={index}
                        type="text"
                        value={voter}
                        onChange={(event) => handleAllowedVoterChange(index, event)}
                        className="block w-full border rounded-md p-2 mb-2"
                        placeholder={`Allowed Voter ${index + 1}`}
                    />
                ))}
                <button onClick={() => setAllowedVoters([...allowedVoters, ''])}>
                    Add Allowed Voter
                </button>

                <div className="mt-4">
                    <label>
                        <input
                            type="checkbox"
                            checked={isPublicVoting}
                            onChange={handlePublicVotingChange}
                        />
                        Public Voting
                    </label>
                </div>
                <Button type="submit" className="mt-4" variant='continue'>
                    Submit voters
                </Button>
            </form>
        </div>
    );
}

export default function AddAllowedVoters(){
    return(
        <VotingOptions onAllowedVotersChange={(newAllowedVoters) => {newAllowedVoters}} onPublicVotingChange={(newPublicVoting) => {newPublicVoting}}/>
    );
}