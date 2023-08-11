import Image from 'next/image';
import { DatePickerWithPresets } from './date';
import { Visibility } from './visibility';

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

function Election() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="continue">Create Election</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create election</DialogTitle>
          <DialogDescription>
            Create your election the way you want.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="title" className="text-right">
              Title
            </Label>
            <Input id="title" placeholder="SUG election" className="col-span-3" />
          </div>
		  <div className="grid grid-cols-4 items-center gap-4">
		    <Label htmlFor="start" className="text-right">
              Starting
            </Label>
			<DatePickerWithPresets/>
		  </div>
		  <div className="grid grid-cols-4 items-center gap-4">
		    <Label htmlFor="stop" className="text-right">
              Ending
            </Label>
			<DatePickerWithPresets/>
		  </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="visibility" className="text-right">
              Visibility
            </Label>
            <Visibility/>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" variant="continue">Continue</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}


export default function Welcome() {
  return (
	<main>
		<div className="text-center py-10">
			<h1>Welcome to VoteX!</h1>
			<p>Cast yor vote, create elections, and share your opinions through polls.</p>
			<div className="flex flex-col md:flex-row p-10 justify-center items-center space-y-5 md:space-x-20 md:space-y-0">
				<Election/>
				<button className="btn btn-green">Create poll</button>
			</div>
		</div>
	</main>
  )
}
