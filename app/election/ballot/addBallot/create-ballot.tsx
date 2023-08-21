import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Button } from '@/components/ui/button';

interface Candidate {
    name: string;
}

export default function BallotCreator(): JSX.Element {
    const [candidates, setCandidates] = useState<Candidate[]>([{ name: '' }]);
    const [options, setOptions] = useState<Candidate[]>([{ name: '' }]);

    const addCandidate = () => {
        const newCandidate: Candidate = { name: '' };
        setCandidates([...candidates, newCandidate]);
    };

    const addOption = () => {
        const newOption: Candidate = { name: '' };
        setOptions([...options, newOption]);
    };

    const handleCandidateChange = (index: number, event: ChangeEvent<HTMLInputElement>) => {
        const newCandidates = [...candidates];
        newCandidates[index].name = event.target.value;
        setCandidates(newCandidates);
    };

    const handleOptionChange = (index: number, event: ChangeEvent<HTMLInputElement>) => {
        const newOptions = [...options];
        newOptions[index].name = event.target.value;
        setOptions(newOptions);
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const accessToken = localStorage.getItem('accessToken');
        const electionId = localStorage.getItem('electionId');
      
          try {
            const headers = {
              'Authorization': `Bearer ${accessToken}`,
              'Content-type': 'application/json'
            };
      
            const response = await fetch(`https://votex-backend.eastasia.cloudapp.azure.com/elections/${electionId}/questions`, {
              method: 'POST',
              headers: headers,
                body: JSON.stringify({
                    candidates,
                    options,
                }),
            });

            if (response.ok) {
                const data = await response.json();
                alert('Ballot created')
                console.log('Ballot created:', data);
            } else {
                console.error('Error creating ballot:', response.status);
            }
        } catch (error) {
            alert('Ballot creation failed')
            console.error('Error creating ballot:', error);
        }
    };

    return (
        <div className="bg-white p-8 rounded-lg shadow-md">
            <h1 className="text-2xl font-semibold mb-4">Create Ballot</h1>
            <form className="mb-4" onSubmit={handleSubmit}>
                <div className="mb-4">
                    <h2 className="text-lg font-semibold mb-2">Add candidate</h2>
                    {candidates.map((candidate, index) => (
                        <input
                            key={index}
                            type="text"
                            value={candidate.name}
                            onChange={(event) => handleCandidateChange(index, event)}
                            className="block w-full border rounded-md p-2 mb-2"
                            placeholder={`Candidate ${index + 1}`}
                        />
                    ))}
                    <Button variant="outline" onClick={addCandidate}>
                        Add Candidate
                    </Button>
                </div>

                <div>
                    <h2 className="text-lg font-semibold mb-2">Options</h2>
                    {options.map((option, index) => (
                        <input
                            key={index}
                            type="text"
                            value={option.name}
                            onChange={(event) => handleOptionChange(index, event)}
                            className="block w-full border rounded-md p-2 mb-2"
                            placeholder={`Option ${index + 1}`}
                        />
                    ))}
                    <Button variant="outline" onClick={addOption}>
                        Add Option
                    </Button>
                </div>

                <Button variant="continue" className="mt-4 w-full" type="submit">
                    Create Ballot
                </Button>
            </form>
        </div>
    );
}
