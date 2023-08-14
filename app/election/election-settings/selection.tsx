import React from 'react';
import { ElectionSetting } from './index';

interface SelectionProps {
    selectedSetting: ElectionSetting;
    setSelectedSetting: (setting: ElectionSetting) => void;
}

export function Selection({ selectedSetting, setSelectedSetting }: SelectionProps) {
    const handleSelect = (setting: ElectionSetting) => {
        setSelectedSetting(setting);
    };

    return (
        <select
            value={selectedSetting}
            onChange={(e) => handleSelect(e.target.value as ElectionSetting)}
            className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
        >
            {Object.values(ElectionSetting).map((setting) => (
                <option key={setting} value={setting} className="py-1">
                    {setting}
                </option>
            ))}
        </select>
    );
}
