import Link from "next/link";
import {
  Github as GithubIcon,
  Linkedin as LinkedinIcon,
  Mail as MailIcon,
} from "@/components/common/icons";
import { Button } from "@/components/common/button";
import { Separator } from "@/components/common/separator";

const pages = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/timeline", label: "Timeline" },
  { path: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer>
      <Separator />
      <div className="max-w-screen-lg px-4 mx-auto mt-4 mb-2 grid gap-4 grid-cols-12 sm:px-8 sm:mt-8 sm:mb-4 md:gap-8">
        <div className="col-span-12 md:col-span-6">
          <h5>Ceri Morse</h5>
          <p>
            Designing and developing full stack software solutions that are
            responsive and accessible.
          </p>
          <div className="flex items-center space-x-1">
            <Button
              asChild
              variant="ghost"
              size="sm"
              className="w-9 px-0 -ml-2"
            >
              <Link
                href="https://github.com/cerimorse"
                target="_blank"
                rel="noopener"
              >
                <GithubIcon />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button asChild variant="ghost" size="sm" className="w-9 px-0">
              <Link
                href="https://linkedin.com/in/cerimorse"
                target="_blank"
                rel="noopener"
              >
                <LinkedinIcon />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button asChild variant="ghost" size="sm" className="w-9 px-0">
              <Link
                href="mailto:enterprise@mxrse.com"
                target="_blank"
                rel="noopener"
              >
                <MailIcon />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
          </div>
          <div>Spotify Not Playing</div>
        </div>
        <div className="col-span-12 md:col-span-4">
          <h4>Sitemap</h4>
          <div className="hidden md:inline-block">
            {pages.map(({ path, label }) => (
              <p key={label}>{label}</p>
            ))}
          </div>
          <div className="md:hidden">Accordion</div>
        </div>
        <div className="col-span-12 md:col-span-2">
          <h5>Art</h5>
          <div>Picture of art</div>
        </div>
        <div className="col-span-12">
          <p>{`© ${new Date().getFullYear()} Ceri Morse. All Rights Reserved.`}</p>
        </div>
      </div>
    </footer>
  );
}
