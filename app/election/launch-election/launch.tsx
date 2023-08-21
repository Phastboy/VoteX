import { Button } from '@/components/ui/button';
import React, { useState, useEffect } from 'react';

interface ElectionInfoProps {
    onElectionLaunched: () => void;
}

interface ElectionData {
    electionTitle: string;
    startDate: string;
    endDate: string;
    isPublic: boolean;
}

export default function ElectionInfo({ onElectionLaunched }: ElectionInfoProps): JSX.Element {
    const [electionData, setElectionData] = useState<ElectionData | null>(null);

    useEffect(() => {
        async function fetchElectionData() {
            try {
                const response = await fetch('/api/get-election-data');
                if (response.ok) {
                    const data = await response.json();
                    setElectionData(data);
                } else {
                    console.error('Error fetching election data:', response.status);
                }
            } catch (error) {
                console.error('Error fetching election data:', error);
            }
        }

        fetchElectionData();
    }, []);


    return (
        <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-2">Election Information</h2>
            {electionData ? (
                <>
                    <p>Election Title: {electionData.electionTitle}</p>
                    <p>Start Date: {electionData.startDate}</p>
                    <p>End Date: {electionData.endDate}</p>
                    <p>Election Type: {electionData.isPublic ? 'Public' : 'Private'}</p>
                    <Button variant='continue'>Verify and Launch Election</Button>
                </>
            ) : (
                <p>Loading election data...</p>
            )}
        </div>
    );
}
