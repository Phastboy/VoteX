import React from 'react';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
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
        <Select>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder={selectedSetting} />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    {Object.values(ElectionSetting).map((setting) => (
                        <SelectItem key={setting} value={setting} onClick={() => handleSelect(setting)}>
                            {setting}
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    );
}

