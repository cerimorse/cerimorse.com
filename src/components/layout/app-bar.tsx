import { Logo } from "@/components/common/icons";
import { Link } from "@/components/common/link";
import { Navigation } from "@/components/layout/navigation";
import { ThemeToggle } from "@/components/layout/theme-toggle";

export function AppBar() {
  return (
    <header className="sticky top-0 w-full z-40 bg-background">
      <div className="max-w-4xl h-14 mx-auto px-8 flex items-center">
        <div className="flex flex-1">
          <Link
            variant="unstyled"
            href="/"
            className="inline-flex items-center space-x-2"
          >
            <Logo className="h-6 w-6" />
            <span className="sr-only font-bold sm:not-sr-only sm:inline-block">
              Ceri Morse
            </span>
          </Link>
        </div>
        <div className="flex flex-1 gap-1 justify-end">
          <Navigation />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
