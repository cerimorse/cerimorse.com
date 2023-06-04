import { MainNavigation } from "@/components/main-navigation";
import { ThemeToggle } from "@/components/theme-toggle";

export function AppBar() {
  return (
    <header className="sticky top-0 z-40 w-full">
      <div className="container h-14 flex items-center">
        <div className="flex-1"></div>
        <div className="flex-1 flex justify-center">
          <MainNavigation />
        </div>
        <div className="flex-1 flex justify-end">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
