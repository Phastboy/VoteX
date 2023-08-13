"use client";
import React, { useState } from 'react';
import { Selection } from './selection';
import { ElectionSetting } from './index';
import {
    ElectionDatesSettings,
    ElectionEmailSettings,
    ElectionMessagesSettings,
    ElectionVotersSettings,
    ElectionResultSettings,
    ElectionDuplicationSettings,
    GeneralElectionSettings,
} from './election-settings';
import { Nav } from '../overview/nav';

export default function ElectionSettings() {
    const [selectedSetting, setSelectedSetting] = useState(ElectionSetting.General);

    const renderSelectedSetting = () => {
        switch (selectedSetting) {
            case ElectionSetting.Dates:
                return <ElectionDatesSettings />;
            case ElectionSetting.Voters:
                return <ElectionVotersSettings />;
            case ElectionSetting.Messages:
                return <ElectionMessagesSettings />;
            case ElectionSetting.Email:
                return <ElectionEmailSettings />;
            case ElectionSetting.Result:
                return <ElectionResultSettings />;
            case ElectionSetting.Duplicate:
                return <ElectionDuplicationSettings />;
            default:
                return <GeneralElectionSettings />;
        }
    };

    return (
        <>
            <Nav />
            <div className="p-4 md:py-8 md:px-10 lg:px-16 xl:px-20 space-y-6">
                <div className="flex justify-center items-center">
                    <Selection
                        selectedSetting={selectedSetting}
                        setSelectedSetting={setSelectedSetting}
                    />
                </div>
                <div className="text-center">
                    <h1 className="text-2xl font-semibold">{`The ${selectedSetting} Setting`}</h1>
                </div>
                <div>{renderSelectedSetting()}</div>
            </div>
        </>
    );
}

