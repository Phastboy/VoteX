import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function Visibility() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a visibility" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Visibility</SelectLabel>
          <SelectItem value="private">Private</SelectItem>
          <SelectItem value="public">Public</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
