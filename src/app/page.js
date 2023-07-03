import { Button } from "@/components/common/button";
import { Link } from "@/components/common/link";
import { Typography } from "@/components/common/typography";
import { Characteristics } from "@/components/home/characteristics";
import { SkillsMarquee } from "@/components/home/skills-marquee";

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
      <section className="max-w-screen-lg px-4 py-16 mx-auto sm:px-8">
        <div className="flex flex-col items-center space-y-8">
          <Typography variant="h3">Something interesting here</Typography>
          <SkillsMarquee />
          <Button asChild size="lg">
            <Link variant="unstyled" href="/about">
              About me
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
