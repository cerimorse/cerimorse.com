import { CloudinaryImage } from "@/components/common/image";
import { Button } from "@/components/common/button";
import { Link } from "@/components/common/link";
import { Typography } from "@/components/common/typography";
import { Characteristics } from "@/components/home/characteristics";
import { SkillsMarquee } from "@/components/home/skills-marquee";
import { BasicTimeline } from "@/components/home/basic-timeline";
import { Testimonials } from "@/components/home/testimonials";
import { ContactItems } from "@/components/home/contact-items";

export default function Home() {
  return (
    <>
      <section className="max-w-screen-xl h-[calc(100vh-3.5rem)] min-h-[600px] max-h-[900px] px-4 mx-auto sm:px-8">
        <div className="flex flex-col-reverse gap-8 h-full md:flex-row md:gap-16">
          <div className="flex-1 flex flex-col items-center space-y-8 mb-16 md:items-start md:justify-center md:mb-0">
            <span className="text-muted-foreground opacity-0 transition-opacity animate-hero-fade-in motion-reduce:opacity-100 motion-reduce:transition-none motion-reduce:animate-none">
              Design. Develop. Deploy
            </span>
            <Typography
              variant="h1"
              className="opacity-0 transition animate-hero-fade-in-up motion-reduce:opacity-100 motion-reduce:transition-none motion-reduce:animate-none"
            >
              Ceri Morse
            </Typography>
            <Typography
              variant="h4"
              className="text-center opacity-0 transition animate-hero-fade-in-up animation-delay-150 md:text-left motion-reduce:opacity-100 motion-reduce:transition-none motion-reduce:animate-none"
            >
              Building immersive digital experiences with cutting-edge web
              technologies, merging creativity and coding.
            </Typography>
            <div className="flex space-x-4 opacity-0 transition animate-hero-fade-in-up animation-delay-300 motion-reduce:opacity-100 motion-reduce:transition-none motion-reduce:animate-none">
              <Button asChild size="lg">
                <Link variant="unstyled" href="/about">
                  About
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link variant="unstyled" href="/contact">
                  Contact
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center relative m-4">
            <CloudinaryImage
              src="pages/home/hero"
              alt="Alt tag"
              fill
              sizes="(min-width: 0px) 100vw, (min-width: 768px) 50vw"
              priority
              className="object-contain"
            />
          </div>
        </div>
      </section>
      <section className="max-w-screen-lg px-4 py-16 mx-auto sm:px-8">
        <div className="flex flex-col justify-center space-y-12">
          <div className="space-y-4">
            <Typography variant="h2" className="text-center">
              I am passionate about developing software solutions that are
              responsive and accessible.
            </Typography>
            <Typography variant="h2" className="text-center">
              I believe the web is for everyone and take that into consideration
              when building an application.
            </Typography>
          </div>
          <Characteristics />
        </div>
      </section>
      <section className="max-w-screen-xl px-4 py-16 mx-auto sm:px-8">
        <div className="flex flex-col items-center space-y-12">
          <Typography variant="h3" className="text-center">
            {"Here's some of the technologies I enjoy working with."}
          </Typography>
          <SkillsMarquee />
          <Button asChild size="lg">
            <Link variant="unstyled" href="/about">
              About me
            </Link>
          </Button>
        </div>
      </section>
      <section className="py-16 bg-muted">
        <div className="max-w-screen-lg px-4 mx-auto sm:px-8">
          <div className="grid grid-cols-2 gap-8">
            <div className="col-span-2 space-y-8 md:col-span-1">
              <Typography variant="h3">
                {
                  "I'm currently working as a Senior Software Developer at Arup."
                }
              </Typography>
              <Typography variant="h3">
                {"I lead the development of the award winning "}
                <Link
                  variant="underline"
                  href="https://www.arup.com/services/tools/virtual-engage"
                  target="_blank"
                  rel="noopener"
                >
                  Virtual Engage
                </Link>
                {" product and Arup's unified project data platform, "}
                <Link
                  variant="underline"
                  href="https://www.arup.com/services/tools/fuse"
                  target="_blank"
                  rel="noopener"
                >
                  Fuse
                </Link>
                {"."}
              </Typography>
              <Button asChild size="lg" className="hidden md:inline-flex">
                <Link variant="unstyled" href="/timeline">
                  Full timeline
                </Link>
              </Button>
            </div>
            <div className="col-span-2 space-y-8 md:col-span-1">
              <BasicTimeline />
              <Button asChild size="lg" className="md:hidden">
                <Link variant="unstyled" href="/timeline">
                  Full timeline
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-screen-lg px-4 py-16 mx-auto sm:px-8">
        <div className="flex flex-col items-center space-y-12">
          <div className="space-y-4">
            <Typography variant="h3" className="text-center">
              {"I've worked with some amazing people during my career."}
            </Typography>
            <Typography variant="h3" className="text-center">
              See what some of them have to say about our time working together.
            </Typography>
          </div>
          <Testimonials />
        </div>
      </section>
      <section className="py-16 bg-muted">
        <div className="max-w-screen-lg px-4 mx-auto sm:px-8">
          <div className="grid grid-cols-3 gap-4 md:gap-8">
            <div className="col-span-3 space-y-12 md:col-span-1">
              <div className="mt-2">
                <Typography variant="h2">{"Let's collaborate."}</Typography>
              </div>
              <Button asChild size="lg" className="hidden md:inline-flex">
                <Link variant="unstyled" href="/contact">
                  Get in contact
                </Link>
              </Button>
            </div>
            <div className="col-span-3 space-y-8 md:col-span-2">
              <ContactItems />
              <Button asChild size="lg" className="md:hidden">
                <Link variant="unstyled" href="/contact">
                  Contact me
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
