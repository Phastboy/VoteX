import React, { useState, useEffect } from 'react';
import { Nav } from '../nav';

interface CandidateResult {
    candidateId: string;
    name: string;
    voteCount: number;
}

interface BallotResultData {
    ballotId: string;
    results: CandidateResult[];
}

export function BallotResult({ ballotId }: { ballotId: string }): JSX.Element {
    const [resultData, setResultData] = useState<BallotResultData | null>(null);

    useEffect(() => {
        async function fetchBallotResult() {
            try {
                const response = await fetch(`/api/get-ballot-result/${ballotId}`);
                if (response.ok) {
                    const data = await response.json();
                    setResultData(data);
                } else {
                    alert('Error fetching ballot result')
                    console.error('Error fetching ballot result:', response.status);
                }
            } catch (error) {
                console.error('Error fetching ballot result:', error);
            }
        }

        fetchBallotResult();
    }, [ballotId]);

    if (!resultData) {
        return (
            <div>
                <Nav />
                <div>Loading result...</div>;
            </div>
        )
    }

    return (
        <div className="flex h-screen">
            <div className="w-1/4">
                <Nav />
            </div>
            <div className="w-3/4">
            <div className="bg-white p-8 rounded-lg shadow-md">
                <h1 className="text-2xl font-semibold mb-4">Ballot Result</h1>
                <ul>
                    {resultData.results.map((result) => (
                        <li key={result.candidateId}>
                            {result.name}: {result.voteCount} votes
                        </li>
                    ))}
                </ul>
            </div>
            </div>
        </div>
    );
}


