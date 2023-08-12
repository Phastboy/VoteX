import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { DatePickerWithPresets } from "../date";

export function GeneralElectionSettings() {
    return (
        <form>
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
    );
}

export function ElectionDatesSettings() {
    return (
        <form>
            <div>
                <Label htmlFor="start">
                    Starting
                </Label>
			    <DatePickerWithPresets/>
            </div>
            <div>
                <Label htmlFor="stop">
                    Ending
                </Label>
			    <DatePickerWithPresets/>
            </div>
            <div>
                <Button type="submit" variant="continue">Save</Button>
            </div>
        </form>
    );
}

export function ElectionVotersSettings() {
    return (
        <form>
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
    );
}

export function ElectionMessagesSettings() {
    return (
        <form>
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
    );
}

export function ElectionEmailSettings() {
    return (
        <>
            <form>
                <div>
                    <Label>
                        Confirm they are part of the allowed voter 
                    </Label>
                    <Input
                        type="checkbox"
                    />
                </div>
                <div>
                    <Label>
                        Free login
                    </Label>
                    <Input
                        type="checkbox"
                    />
                </div>
                <div>
                    <Button type="submit" variant="continue">Save</Button>
                </div>
            </form>
        </>
    );
}

export function ElectionResultSettings() {
    return (
        <>
            <form>
                <div>
                    <Label>
                        Hide result throughout the election
                    </Label>
                    <Input
                        type="checkbox"
                    />
                </div>
                <div>
                    <Label>
                        Realtime update
                    </Label>
                    <Input
                        type="checkbox"
                    />
                </div>
                <div>
                    <Label>
                        Download report
                    </Label>
                    <Input
                        type="checkbox"
                    />
                </div>
                <div>
                    <Button type="submit" variant="continue">Save</Button>
                </div>
            </form>
        </>
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
