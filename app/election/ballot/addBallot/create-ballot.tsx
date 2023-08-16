import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function BallotCreator() {
    const [candidates, setCandidates] = useState([]);
    const [options, setOptions] = useState([]);

    const addCandidate = () => {
        const newCandidate = { name: '' };
        setCandidates([...candidates, newCandidate]);
    };

    const addOption = () => {
        const newOption = { name: '' };
        setOptions([...options, newOption]);
    };

    const handleCandidateChange = (index, event) => {
        const newCandidates = [...candidates];
        newCandidates[index].name = event.target.value;
        setCandidates(newCandidates);
    };

    const handleOptionChange = (index, event) => {
        const newOptions = [...options];
        newOptions[index].name = event.target.value;
        setOptions(newOptions);
    };

    return (
        <div className="bg-white p-8 rounded-lg shadow-md">
            <h1 className="text-2xl font-semibold mb-4">Create Ballot</h1>

            <div className="mb-4">
                <h2 className="text-lg font-semibold mb-2">Add ballot questions</h2>
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

            <Button variant="continue" className="mt-4 w-full">
                Create Ballot
            </Button>
        </div>
    );
}
