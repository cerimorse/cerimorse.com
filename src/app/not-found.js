import { Logo } from "@/components/common/icons";
import { Button } from "@/components/common/button";
import { Link } from "@/components/common/link";
import { Typography } from "@/components/common/typography";

export default function NotFound() {
  return (
    <section className="max-w-screen-lg px-4 py-16 mx-auto sm:px-8">
      <div className="flex flex-col items-center space-y-12">
        <Logo className="h-56 w-56" />
        <div className="space-y-4">
          <Typography variant="h1" className="text-center">
            404
          </Typography>
          <Typography
            variant="body"
            className="text-muted-foreground text-center"
          >
            {"Oh no, I've looked everywhere but can't seem to find this page."}
          </Typography>
        </div>
        <Button asChild size="lg">
          <Link variant="unstyled" href="/">
            Home
          </Link>
        </Button>
      </div>
    </section>
  );
}
