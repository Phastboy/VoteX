"use client"
import { Input } from "@/components/ui/input";
import React, { useRef } from "react";
import { Calendar } from "lucide-react";


export default function Overview() {
    const previewInputRef = useRef<HTMLInputElement>(null);
    const votingInputRef = useRef<HTMLInputElement>(null);

    const handleCopy = (inputRef: React.RefObject<HTMLInputElement>) => {
        if (inputRef.current) {
            inputRef.current.select();
            document.execCommand("copy");
        }
    };

    return (
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
                            onClick={() => handleCopy(votingInputRef)}
                            className="copyable-input"
                        />
                    </div>
                    <div className="flex-1">
                        <h5 className="text-base font-medium">Preview URL</h5>
                        <Input
                            value="preview"
                            readOnly
                            ref={previewInputRef}
                            onClick={() => handleCopy(previewInputRef)}
                            className="copyable-input"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
