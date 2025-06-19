import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

function StatusDropdownMenu({ selected, setSelected }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="mb-10 p-2 w-full align-center justify-between"
        >
          {selected}
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className={"w-100"}>
        <DropdownMenuLabel>Status:</DropdownMenuLabel>
        <DropdownMenuRadioGroup value={selected} onValueChange={setSelected}>
          <DropdownMenuRadioItem value="to-do">To do</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="in-progress">
            In progress
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="done">Done</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default StatusDropdownMenu;
