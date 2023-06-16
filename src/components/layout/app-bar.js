import Link from "next/link";
import { Circle as CircleIcon } from "@/components/common/icons";
import { Navigation } from "@/components/layout/navigation";
import { ThemeToggle } from "@/components/layout/theme-toggle";

export function AppBar() {
  return (
    <header className="sticky top-0 w-full z-40 bg-background">
      <div className="px-4 h-14 flex items-center sm:px-8">
        <div className="flex-1 flex">
          <Link href="/" className="inline-flex items-center space-x-2">
            <CircleIcon className="h-6 w-6" />
            <span className="hidden font-bold sm:inline-block">Ceri Morse</span>
          </Link>
        </div>
        <div className="flex-1 flex justify-center">
          <Navigation />
        </div>
        <div className="flex-1 flex justify-end">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
