import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { DatePickerWithPresets } from "../date";

export function GeneralElectionSettings() {
    return (
        <div className="bg-white p-6 rounded shadow">
        <form>
            <div className="mb-4">
                <Label>
                    Title
                </Label>
                <Input/>
            </div>
            <div className="mb-4">
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
        <form>
            <div className="mb-4">
                <Label htmlFor="start">
                    Starting
                </Label>
			    <DatePickerWithPresets/>
            </div>
            <div className="mb-4">
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
        <form>
            <div className="mb-4">
                <Label>
                    Minimum number of vote
                </Label>
                <Input/>
            </div>
            <div className="mb-4">
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
        <form>
            <div className="mb-4">
                <Label>
                    Login instruction
                </Label>
                <Textarea/>
            </div>
            <div className="mb-4">
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
            <form>
                <div className="mb-4">
                    <Label>Confirm they are part of the allowed voter</Label>
                    <Input type="checkbox" />
                </div>
                <div className="mb-4">
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
            <form>
                <div className="mb-4">
                    <Label>Hide result throughout the election</Label>
                    <Input type="checkbox" />
                </div>
                <div className="mb-4">
                    <Label>Realtime update</Label>
                    <Input type="checkbox" />
                </div>
                <div className="mb-4">
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
