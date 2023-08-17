import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { Button } from '@/components/ui/button';

interface BallotOption {
    id: string;
    name: string;
}

interface BallotData {
    id: string;
    candidates: BallotOption[];
    options: BallotOption[];
}

export default function BallotDisplay({ ballotId }: { ballotId: string }): JSX.Element {
    const [ballotData, setBallotData] = useState<BallotData | null>(null);
    const [selectedChoices, setSelectedChoices] = useState<string[]>([]);

    useEffect(() => {
        async function fetchBallotData() {
            try {
                const response = await fetch(`/api/get-ballot/${ballotId}`);
                if (response.ok) {
                    const data = await response.json();
                    setBallotData(data);
                } else {
                    console.error('Error fetching ballot:', response.status);
                }
            } catch (error) {
                console.error('Error fetching ballot:', error);
            }
        }

        fetchBallotData();
    }, [ballotId]);

    const handleChoiceChange = (optionId: string, event: ChangeEvent<HTMLInputElement>) => {
        const updatedChoices = selectedChoices.map((choice, index) =>
            index === parseInt(optionId) ? event.target.value : choice
        );
        setSelectedChoices(updatedChoices);
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            const response = await fetch('/api/submit-vote', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ballotId,
                    choices: selectedChoices,
                }),
            });

            if (response.ok) {
                const data = await response.json();
                alert('Vote submitted');
                console.log('Vote submitted:', data);
            } else {
                alert('Error submitting vote');
                console.error('Error submitting vote:', response.status);
            }
        } catch (error) {
            console.error('Error submitting vote:', error);
        }
    };

    if (!ballotData) {
        return <div>Loading ballot...</div>;
    }

    return (
        <div className="bg-white p-8 rounded-lg shadow-md">
            <h1 className="text-2xl font-semibold mb-4">Vote on Ballot</h1>
            <form onSubmit={handleSubmit}>
                {ballotData.candidates.map((candidate) => (
                    <div key={candidate.id} className="mb-2">
                        <label>
                            <input
                                type="radio"
                                name="candidate"
                                value={candidate.id}
                                checked={selectedChoices.includes(candidate.id)}
                                onChange={(event) => handleChoiceChange(candidate.id, event)}
                            />
                            {candidate.name}
                        </label>
                    </div>
                ))}
                <Button variant="continue" className="mt-4 w-full" type="submit">
                    Submit Vote
                </Button>
            </form>
        </div>
    );
}
