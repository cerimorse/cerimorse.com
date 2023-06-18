import {
  Github as GithubIcon,
  Linkedin as LinkedinIcon,
  Mail as MailIcon,
  Spotify as SpotifyIcon,
} from "@/components/common/icons";
import { Button } from "@/components/common/button";
import { Link } from "@/components/common/link";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/common/accordion";
import { Separator } from "@/components/common/separator";
import { Typography } from "@/components/common/typography";

const pages = {
  info: [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
  ],
  misc: [
    { path: "/timeline", label: "Timeline" },
    { path: "/contact", label: "Contact" },
  ],
};

export function Footer() {
  return (
    <footer>
      <Separator />
      <div className="max-w-screen-xl px-4 mx-auto mt-4 mb-2 grid gap-4 grid-cols-12 sm:px-8 sm:mt-8 sm:mb-4 md:gap-8">
        <div className="col-span-12 md:col-span-6">
          <Typography variant="h5">Ceri Morse</Typography>
          <Typography variant="body" className="mt-2">
            Designing and developing full stack software solutions that are
            responsive and accessible.
          </Typography>
          <div className="space-x-1 mt-1 flex items-center">
            <Button
              asChild
              variant="ghost"
              size="sm"
              className="w-9 px-0 -ml-2"
            >
              <Link
                variant="unstyled"
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
                variant="unstyled"
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
                variant="unstyled"
                href="mailto:enterprise@mxrse.com"
                target="_blank"
                rel="noopener"
              >
                <MailIcon />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
          </div>
          <div className="mt-2 flex items-center">
            <SpotifyIcon className="h-6 w-6" />
            <span className="ml-3">Not Playing</span>
          </div>
        </div>
        <div className="col-span-12 md:col-span-4">
          <div className="hidden md:block">
            <Typography variant="h5">Sitemap</Typography>
            <div className="mt-2 grid grid-cols-10">
              <div className="col-span-5 flex flex-col leading-7">
                {pages.info.map(({ path, label }) => (
                  <Link key={label} href={path} className="w-fit">
                    {label}
                  </Link>
                ))}
              </div>
              <div className="col-span-5 flex flex-col leading-7">
                {pages.misc.map(({ path, label }) => (
                  <Link key={label} href={path} className="w-fit">
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <Accordion type="single" collapsible className="md:hidden">
            <AccordionItem value="sitemap" className="border-t">
              <Typography asChild variant="h5">
                <AccordionTrigger>Sitemap</AccordionTrigger>
              </Typography>
              <AccordionContent>
                <div className="flex flex-col leading-7">
                  {pages.info.map(({ path, label }) => (
                    <Link key={label} href={path} className="w-fit">
                      {label}
                    </Link>
                  ))}
                  {pages.misc.map(({ path, label }) => (
                    <Link key={label} href={path} className="w-fit">
                      {label}
                    </Link>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="col-span-12 md:col-span-2">
          <Typography variant="h5">Artwork</Typography>
          <div>Picture of art</div>
        </div>
        <div className="col-span-12">
          <p>{`© ${new Date().getFullYear()} Ceri Morse. All Rights Reserved.`}</p>
        </div>
      </div>
    </footer>
  );
}
