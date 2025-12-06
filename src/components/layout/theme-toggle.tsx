"use client";

import { useTheme } from "next-themes";
import { Moon as MoonIcon, Sun as SunIcon } from "@/components/common/icons";
import { Button } from "@/components/common/button";

export function ThemeToggle() {
  const { setTheme } = useTheme();

  const handleThemeToggle = () => {
    setTheme((currentTheme) => {
      if (currentTheme === "dark") {
        return "light";
      }
      return "dark";
    });
  };

  return (
    <Button variant="ghost" size="icon" onClick={handleThemeToggle}>
      <SunIcon className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <MoonIcon className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
