import { ChevronUp } from "lucide-react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useTheme } from "./ThemeProvider";
import { useState } from "react";

function DarkmodeMenu() {
  const { setTheme } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(
    localStorage.getItem("vite-ui-theme") || "system"
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"ghost"} className={"justify-between w-full"}>
          Toggle Theme
          <ChevronUp />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className={"w-48"}>
        <DropdownMenuLabel>Themes:</DropdownMenuLabel>
        <DropdownMenuRadioGroup
          value={selectedTheme}
          onValueChange={setSelectedTheme}
        >
          <DropdownMenuRadioItem
            value={"system"}
            onValueChange={setSelectedTheme}
            onClick={() => setTheme("system")}
          >
            System
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            value={"dark"}
            onValueChange={setSelectedTheme}
            onClick={() => setTheme("dark")}
          >
            Dark
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            value={"light"}
            onValueChange={setSelectedTheme}
            onClick={() => setTheme("light")}
          >
            Light
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default DarkmodeMenu;
