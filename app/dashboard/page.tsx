"use client"
import React, {useState} from 'react';
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
          <DialogTitle>Create Election</DialogTitle>
          <DialogDescription>
            Create your election the way you want.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="electionTitle" className="text-right">
              Title
            </Label>
            <Input id="electionTitle" placeholder="SUG election" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="electionStart" className="text-right">
              Starting
            </Label>
            <DatePickerWithPresets/>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="electionEnd" className="text-right">
              Ending
            </Label>
            <DatePickerWithPresets/>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="electionVisibility" className="text-right">
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

function Poll() {
  const [options, setOptions] = useState([{ id: 1, value: "" }]);

  const addOption = () => {
    setOptions([...options, { id: options.length + 1, value: "" }]);
  };

  const updateOption = (id, value) => {
    const updatedOptions = options.map((option) =>
      option.id === id ? { ...option, value } : option
    );
    setOptions(updatedOptions);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="continue">Create Poll</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create Poll</DialogTitle>
          <DialogDescription>
            Get approval or hear people's opinions.
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
            <Input id="avatar" 
              name="avatar" type="file" 
				      accept="image/png, image/jpg, image/svg, image/jpeg, image/gif"
              className="hidden col-span-3"
            />
            <Label 
              htmlFor="avatar" 
              className="text-right">
              Add image
            </Label>
		      </div>
		      {options.map((option) => (
          <div
            key={option.id}
            className="grid grid-cols-4 items-center gap-4"
          >
            <Label htmlFor={`option-${option.id}`} className="text-right">
              Option {option.id}
            </Label>
            <Input
              id={`option-${option.id}`}
              placeholder="Enter an option"
              className="col-span-3"
              value={option.value}
              onChange={(e) => updateOption(option.id, e.target.value)}
            />
          </div>
        ))}
        <div className="grid grid-cols-4 items-center gap-4">
          <button
            type="button"
            className="col-span-3"
            onClick={addOption}
          >
            Add Option
          </button>
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
        <p>Cast your vote, create elections, and share your opinions through polls.</p>
        <div className="flex flex-col md:flex-row p-10 justify-center items-center space-y-5 md:space-x-20 md:space-y-0">
          <Election />
          <Poll />
        </div>
      </div>
    </main>
  )
}
