import * as React from "react"
import { useState } from 'react';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function Selection() {
	const [ selectedItem, setSelectedItem ]=useState('');
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="General" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="Dates" onClick={()=>setSelectedItem('Dates')}>Dates</SelectItem>
          <SelectItem value="Voters" onClick={()=>setSelectedItem('Voters')}>Voters</SelectItem>
          <SelectItem value="Messages" onClick={()=>setSelectedItem('Messages')}>Meessages</SelectItem>
          <SelectItem value="Email" onClick={()=>setSelectedItem('Email')}>Email</SelectItem>
          <SelectItem value="Result" onClick={()=>setSelectedItem('Result')}>Result</SelectItem>
          <SelectItem value="Duplicate" onClick={()=>setSelectedItem('Duplicate')}>Duplicate</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
