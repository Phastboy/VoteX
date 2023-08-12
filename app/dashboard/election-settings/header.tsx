import React, { useState } from 'react';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface SelectionProps {
    setSelectedSetting: React.Dispatch<React.SetStateAction<string>>;
}

export function Selection({ setSelectedSetting }: SelectionProps) {
    const [selectedItem, setSelectedItem] = useState('');

    const handleSelect = (value: string) => {
        setSelectedItem(value);
        setSelectedSetting(value);
    };

    return (
        <Select>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="General" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectItem value="Dates" onClick={() => handleSelect('Dates')}>
                        Dates
                    </SelectItem>
                    <SelectItem value="Voters" onClick={() => handleSelect('Voters')}>
                        Voters
                    </SelectItem>
                    <SelectItem value="Messages" onClick={() => handleSelect('Messages')}>
                        Messages
                    </SelectItem>
                    <SelectItem value="Email" onClick={() => handleSelect('Email')}>
                        Email
                    </SelectItem>
                    <SelectItem value="Result" onClick={() => handleSelect('Result')}>
                        Result
                    </SelectItem>
                    <SelectItem value="Duplicate" onClick={() => handleSelect('Duplicate')}>
                        Duplicate
                    </SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    );
}
