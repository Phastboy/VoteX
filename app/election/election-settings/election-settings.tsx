import React, { useState } from 'react';
import { Nav } from '../nav';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Selection } from './selection';
import { ElectionSetting } from './index';
import { DatePickerWithPresets } from "../../dashboard/date";

export function GeneralElectionSettings() {
    return (
        <div className="bg-white p-6 rounded shadow">
            <form className='space-y-4'>
                <div>
                    <Label>
                        Title
                    </Label>
                    <Input/>
                </div>
                <div>
                    <Label>
                        Description
                    </Label>
                    <Textarea/>
                </div>
                <div>
                    <Button type="submit" variant="continue">Save</Button>
                </div>
            </form>
        </div>
    );
}

export function ElectionDatesSettings() {
    return (
        <div className="bg-white p-6 rounded shadow">
            <form className='space-y-4'>
                <div className="space-x-4">
                    <Label htmlFor="start">
                        Starting
                    </Label>
                    <DatePickerWithPresets/>
                </div>
                <div className="space-x-4">
                    <Label htmlFor="stop">
                        Ending
                    </Label>
                    <DatePickerWithPresets/>
                </div>
                <div>
                    <Button type="submit" variant="continue">Save</Button>
                </div>
            </form>
        </div>
    );
}

export function ElectionVotersSettings() {
    return (
        <div className="bg-white p-6 rounded shadow">
            <form className='space-y-4'>
                <div>
                    <Label>
                        Minimum number of vote
                    </Label>
                    <Input/>
                </div>
                <div>
                    <Label>
                        Maximum number of vote
                    </Label>
                    <Input/>
                </div>
                <div>
                    <Button type="submit" variant="continue">Save</Button>
                </div>
            </form>
        </div>
    );
}

export function ElectionMessagesSettings() {
    return (
        <div className="bg-white p-6 rounded shadow">
            <form className='space-y-4'>
                <div>
                    <Label>
                        Login instruction
                    </Label>
                    <Textarea/>
                </div>
                <div>
                    <Label>
                        Confirmation message
                    </Label>
                    <Textarea/>
                </div>
                <div>
                    <Button type="submit" variant="continue">Save</Button>
                </div>
            </form>
        </div>
    );
}

export function ElectionEmailSettings() {
    return (
        <div className="bg-white p-6 rounded shadow">
            <form className='space-y-4'>
                <div>
                    <Label>Confirm they are part of the allowed voter</Label>
                    <Input type="checkbox" />
                </div>
                <div>
                    <Label>Free login</Label>
                    <Input type="checkbox" />
                </div>
                <div>
                    <Button type="submit" variant="continue">Save</Button>
                </div>
            </form>
        </div>
    );
}

export function ElectionResultSettings() {
    return (
        <div className="bg-white p-6 rounded shadow">
            <form className='space-y-4'>
                <div>
                    <Label>Hide result throughout the election</Label>
                    <Input type="checkbox" />
                </div>
                <div>
                    <Label>Realtime update</Label>
                    <Input type="checkbox" />
                </div>
                <div>
                    <Label>Download report</Label>
                    <Input type="checkbox" />
                </div>
                <div>
                    <Button type="submit" variant="continue">Save</Button>
                </div>
            </form>
        </div>
    );
}

export function ElectionDuplicationSettings() {
    return (
        <>
            <p>This will help you to use this election as template for another electiion</p>
            <Button>Duplicate</Button>
        </>
    );
}
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
        <div className='flex h-screen'>
            <div className='w-1/4'>
                <Nav />
            </div>
            <div className='w-3/4'>
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
            </div>
        </div>
        </>
    );
}
