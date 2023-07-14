import { Logo } from "@/components/common/icons";
import { Link } from "@/components/common/link";
import { Navigation } from "@/components/layout/navigation";
import { ThemeToggle } from "@/components/layout/theme-toggle";

export function AppBar() {
  return (
    <header className="sticky top-0 w-full border-b z-40 supports-backdrop-blur:bg-background/60 bg-background/90 backdrop-blur">
      <div className="px-4 h-14 flex items-center sm:px-8">
        <div className="flex-1 flex">
          <Link
            variant="unstyled"
            href="/"
            className="inline-flex items-center space-x-2"
          >
            <Logo className="h-6 w-6" />
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
