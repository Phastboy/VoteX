'use client'
import { Label } from "@/components/ui/label";
import { Selection } from "./header";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {Nav} from '../overview/nav';
import { GeneralElectionSettings, 
		ElectionResultSettings 
		} from "./election-settings";


export default function ElectionSettings() {
    return (
        <>
			<Nav/>
            <div className="p-4 space-y-6">
                <div>
                    <Selection/>
                </div>
                <div>
                    <h1>the specific setting</h1>
                </div>
                <div>
                    <GeneralElectionSettings/>
                </div>
                <div>
                    <ElectionResultSettings/>
                </div>
            </div>
        </>
    );
}
