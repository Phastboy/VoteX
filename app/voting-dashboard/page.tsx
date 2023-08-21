import React, { useState } from 'react';

interface Candidate {
  id: string;
  name: string;
  options: string[];
}

interface BallotOptionsProps {
  candidates: Candidate[];
}

function BallotOptions({ candidates }: BallotOptionsProps): JSX.Element {
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string[]>>({});
  

  const handleOptionChange = (candidateId: string, option: string) => {
    setSelectedOptions((prevSelectedOptions) => ({
      ...prevSelectedOptions,
      [candidateId]: prevSelectedOptions[candidateId]
        ? prevSelectedOptions[candidateId].includes(option)
          ? prevSelectedOptions[candidateId].filter((item) => item !== option)
          : [...prevSelectedOptions[candidateId], option]
        : [option],
    }));
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold mb-4">Select Options</h1>
      {candidates.map((candidate) => (
        <div key={candidate.id} className="mb-4">
          <h2 className="text-lg font-semibold mb-2">{candidate.name}</h2>
          <div className="flex flex-col space-y-2">
            {candidate.options.map((option) => (
              <label key={option} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={selectedOptions[candidate.id]?.includes(option)}
                  onChange={() => handleOptionChange(candidate.id, option)}
                  className="form-checkbox h-4 w-4 text-green-600"
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default BallotOptions;
