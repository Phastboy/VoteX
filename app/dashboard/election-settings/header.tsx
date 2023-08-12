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

export function Selection() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="General" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="Dates">Dates</SelectItem>
          <SelectItem value="Voters">Voters</SelectItem>
          <SelectItem value="Messages">Meessages</SelectItem>
          <SelectItem value="Email">Email</SelectItem>
          <SelectItem value="Result">Result</SelectItem>
          <SelectItem value="Duplicate">Duplicate</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
