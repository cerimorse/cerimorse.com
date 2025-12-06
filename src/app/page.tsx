import Image from "next/image";
import { Link } from "@/components/common/link";
import { Typography } from "@/components/common/typography";

export default function Home() {
  return (
    <>
      <Image
        src="/profile-picture.png"
        alt="A headshot of Ceri Morse"
        width={400}
        height={400}
        className="size-32 rounded-full mb-8"
      />
      <Typography variant="h1" className="mb-8">
        Ceri Morse
      </Typography>
      <section className="flex flex-col gap-6">
        <Typography>
          I&apos;m a full-stack tech lead and product-focused engineer. I build
          web platforms end-to-end, lead teams, and help turn rough ideas into
          real, award-winning software. I&apos;ve been coding for over a decade
          and leading delivery for most of it.
        </Typography>
        <Typography>
          I focus on building clear, maintainable, and high-impact software,
          leading teams to deliver solutions that work in the real world. My
          goal is to create technology that drives value, is easy to understand,
          and supports teams and users effectively.
        </Typography>
        <Typography>
          I&apos;m currently based in Cardiff and work at{" "}
          <Link
            variant="underline"
            href="https://www.hl.co.uk/"
            target="_blank"
            rel="noopener"
          >
            Hargreaves Lansdown
          </Link>{" "}
          where I help build scalable, personalised digital experiences across
          their web platform. Previously, I worked at{" "}
          <Link
            variant="underline"
            href="https://www.arup.com/"
            target="_blank"
            rel="noopener"
          >
            Arup
          </Link>
          , leading development of widely-used internal and public-facing
          platforms, shaping design systems, and mentoring development teams.
        </Typography>
        <div className="flex flex-col gap-3">
          <Typography>
            I enjoy sharing how I work and the journey that&apos;s brought me
            here:
          </Typography>
          <ul className="flex flex-col list-disc ml-8">
            <li>
              <Link variant="underline" href="/coding">
                See how I build software
              </Link>
            </li>
            <li>
              <Link variant="underline" href="/timeline">
                Explore my career timeline
              </Link>
            </li>
          </ul>
        </div>
        <Typography>
          Outside of work, I practice karate, play chess, game, and go on
          adventures with my partner, keeping life interesting and fun.
        </Typography>
        <Typography>
          Read my{" "}
          <Link
            variant="underline"
            href="https://github.com/cerimorse"
            target="_blank"
            rel="noopener"
          >
            code
          </Link>
          , connect with me on{" "}
          <Link
            variant="underline"
            href="https://www.linkedin.com/in/cerimorse/"
            target="_blank"
            rel="noopener"
          >
            LinkedIn
          </Link>
          , or{" "}
          <Link
            variant="underline"
            href="mailto:enterprise@mxrse.com"
            target="_blank"
            rel="noopener"
          >
            reach out
          </Link>{" "}
          if you want to collaborate.
        </Typography>
      </section>
    </>
  );
}
