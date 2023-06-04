"use client";

import { useTheme } from "next-themes";
import {
  Laptop as LaptopIcon,
  Moon as MoonIcon,
  Sun as SunIcon,
} from "@/components/common/icons";
import { Button } from "@/components/common/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/common/dropdown-menu";

export function ThemeToggle() {
  const { setTheme } = useTheme();

  const handleMenuItemClick = (theme) => {
    setTheme(theme);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="w-9 px-0">
          <SunIcon className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => handleMenuItemClick("light")}>
          <SunIcon className="w-4 h-4 mr-2" />
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleMenuItemClick("dark")}>
          <MoonIcon className="w-4 h-4 mr-2" />
          <span>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleMenuItemClick("system")}>
          <LaptopIcon className="w-4 h-4 mr-2" />
          <span>System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
