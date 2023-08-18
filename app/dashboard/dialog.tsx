import React, { useState, ChangeEvent, FormEvent } from 'react';
import { DatePickerWithPresets } from './date';
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

interface FormData {
  title: string;
  start_date: string;
  end_date: string;
  timezone: string;
  visibility: string;
}

function Election() {
  const [formData, setFormData] = useState<FormData>({
    title: '',
    start_date: '',
    end_date: '',
    timezone: '',
    visibility: 'Private',
  });

  const handleCreateElection = async (event: FormEvent) => {
    event.preventDefault();

    try {
      const headers={
        'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
        'Content-type': 'application/json'
      };

      const response = await fetch('https://votex-backend.eastasia.cloudapp.azure.com/elections/', {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Election created successfully');
      } else {
        alert('Election creation failed');
      }
    } catch (error) {
      console.log(error);
    }
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

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
        <form className="grid gap-4 py-4" onSubmit={handleCreateElection}>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="electionTitle" className="text-right">
              Title
            </Label>
            <Input
              id="electionTitle"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="SUG election"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="electionStart" className="text-right">
              Starting
            </Label>
            <Input
              id="electionStart"
              name="start_date"
              value={formData.start_date}
              placeholder='2021-01-01 00:00:00'
              onChange={handleChange}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="electionEnd" className="text-right">
              Ending
            </Label>
            <Input
              id="electionEnd"
              name="end_date"
              value={formData.end_date}
              placeholder='2021-12-31 23:59:59'
              onChange={handleChange}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="timeZone" className="text-right">
              Timezone
            </Label>
            <Input
              id="timeZone"
              name="timezone"
              value={formData.timezone}
              placeholder='UTC+1'
              onChange={handleChange}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="electionVisibility" className="text-right">
              Visibility
            </Label>
            <select
              id="electionVisibility"
              name="visibility"
              value={formData.visibility}
              placeholder='Private'
              onChange={handleChange}
              className="col-span-3"
            >
              <option value="Private">Private</option>
              <option value="Public">Public</option>
            </select>
          </div>
          <DialogFooter>
            <Button type="submit" variant="continue">Continue</Button>
          </DialogFooter>
        </form>
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
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" variant="continue">Continue</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export {Election, Poll}
