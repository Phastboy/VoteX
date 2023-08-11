"use client"
import { Input } from "@/components/ui/input";
import React, { useRef, useState } from "react";
import { Calendar } from "lucide-react";
import Nav from "./nav";


export default function Overview() {
    const previewInputRef = useRef<HTMLInputElement>(null);
    const votingInputRef = useRef<HTMLInputElement>(null);
    const [votingCopied, setVotingCopied] = useState(false);
    const [previewCopied, setPreviewCopied] = useState(false);

    const handleCopy = (inputRef: React.RefObject<HTMLInputElement>, setCopiedState: React.Dispatch<React.SetStateAction<boolean>>) => {
        if (inputRef.current) {
            inputRef.current.select();
            document.execCommand("copy");
            setCopiedState(true);
            setTimeout(() => setCopiedState(false), 2000);
        }
    };

    return (
        <><Nav/>
        <div className="flex flex-col items-center py-8 p-2">
            <div className="mb-4 space-y-4">
                <h1 className="text-2xl font-bold">Overview</h1>
                <div className="space-y-2">
                    <div className="flex items-center">
                        <Calendar className="w-6 h-6 mr-2" />
                        <h4 className="text-base font-medium">Start date</h4>
                    </div>
                    <div>
                        <p className="text-base">August 11 2023</p>
                    </div>
                </div>
                <div className="py-4 space-y-2">
                    <div className="flex items-center">
                        <Calendar className="w-6 h-6 mr-2" />
                        <h4 className="text-base font-medium">End date</h4>
                    </div>
                    <div>
                        <p className="text-base">August 15 2024</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col space-y-4">
                <h4 className="text-lg font-medium">Election URL</h4>
                <div className="flex space-x-4">
                        <div className="flex-1">
                            <h5 className="text-base font-medium">Voting URL</h5>
                            <Input
                                value="voting"
                                readOnly
                                ref={votingInputRef}
                                onClick={() => handleCopy(votingInputRef, setVotingCopied)}
                                className="copyable-input"
                            />
                            {votingCopied && <p className="text-sm text-green-500">Copied!</p>}
                        </div>
                        <div className="flex-1">
                            <h5 className="text-base font-medium">Preview URL</h5>
                            <Input
                                value="preview"
                                readOnly
                                ref={previewInputRef}
                                onClick={() => handleCopy(previewInputRef, setPreviewCopied)}
                                className="copyable-input"
                            />
                            {previewCopied && <p className="text-sm text-green-500">Copied!</p>}
                        </div>
                    </div>
            </div>
        </div>
        </>
    );
}
