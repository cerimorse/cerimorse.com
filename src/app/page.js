import { Button } from "@/components/common/button";
import { Link } from "@/components/common/link";
import { Typography } from "@/components/common/typography";
import { Characteristics } from "@/components/home/characteristics";
import { SkillsMarquee } from "@/components/home/skills-marquee";
import { BasicTimeline } from "@/components/home/basic-timeline";

export default function Home() {
  return (
    <>
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
          <Typography variant="h3">Something interesting here</Typography>
          <SkillsMarquee />
          <Button asChild size="lg">
            <Link variant="unstyled" href="/about">
              About me
            </Link>
          </Button>
        </div>
      </section>
      <section className="max-w-screen-lg px-4 py-16 mx-auto sm:px-8">
        <div className="grid grid-cols-2 gap-8">
          <div className="col-span-2 space-y-8 md:col-span-1">
            <Typography variant="h3">
              {"I'm currently working as a Senior Software Developer at Arup."}
            </Typography>
            <Typography variant="h3">
              {"I lead the development of the award winning "}
              <Link
                href="https://www.arup.com/services/tools/virtual-engage"
                target="_blank"
                rel="noopener"
              >
                Virtual Engage
              </Link>
              {" product and Arup's unified project data platform, "}
              <Link
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
      </section>
    </>
  );
}
