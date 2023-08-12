'use client'
import React, { useState } from "react";
import { Selection } from "./header";
import { GeneralElectionSettings, 
    ElectionDatesSettings, 
    ElectionEmailSettings, 
    ElectionMessagesSettings, 
    ElectionVotersSettings, 
    ElectionResultSettings, 
    ElectionDuplicationSettings } from "./election-settings";
import { Nav } from "../overview/nav";

export default function ElectionSettings() {
    const [selectedSetting, setSelectedSetting] = useState("General");

    const renderSelectedSetting = () => {
        switch (selectedSetting) {
            case "Dates":
                return <ElectionDatesSettings />;
            case "Voters":
                return <ElectionVotersSettings />;
            case "Messages":
                return <ElectionMessagesSettings />;
            case "Email":
                return <ElectionEmailSettings />;
            case "Result":
                return <ElectionResultSettings />;
            case "Duplicate":
                return <ElectionDuplicationSettings />;
            default:
                return <GeneralElectionSettings />;
        }
    };

    return (
        <>
            <Nav />
            <div className="p-4 space-y-6">
                <div className="flex justify-center items-center">
                    <Selection setSelectedSetting={setSelectedSetting} />
                </div>
                <div className="text-center">
                    <h1 className="text-2xl font-semibold">{`The ${selectedSetting} Setting`}</h1>
                </div>
                <div>{renderSelectedSetting()}</div>
            </div>
        </>
    );
}
