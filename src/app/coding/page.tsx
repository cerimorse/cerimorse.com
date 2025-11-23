import { philosophies, coreTech, otherTech } from "@/content/coding";
import {
  Aws as AwsIcon,
  Azure as AzureIcon,
  AzurePipelines as AzurePipelinesIcon,
  Css as CssIcon,
  Express as ExpressIcon,
  Html as HtmlIcon,
  Mongodb as MongodbIcon,
  Mui as MuiIcon,
  Nestjs as NestjsIcon,
  Nodejs as NodejsIcon,
  Prisma as PrismaIcon,
  Strapi as StrapiIcon,
  Typeorm as TypeormIcon,
} from "@/components/common/icons";
import { Typography } from "@/components/common/typography";

import type { Technology } from "@/content/coding";

const icons: Record<Technology, React.JSX.Element> = {
  HTML: <HtmlIcon />,
  CSS: <CssIcon />,
  MUI: <MuiIcon />,
  "Node.js": <NodejsIcon />,
  "Express.js": <ExpressIcon />,
  NestJS: <NestjsIcon />,
  Prisma: <PrismaIcon />,
  TypeORM: <TypeormIcon />,
  Strapi: <StrapiIcon />,
  MongoDB: <MongodbIcon />,
  Azure: <AzureIcon />,
  "Azure Pipelines": <AzurePipelinesIcon />,
  AWS: <AwsIcon />,
};

export default function CodingPage() {
  return (
    <>
      <Typography variant="h1" className="mb-14">
        Coding
      </Typography>
      <Typography variant="body" className="mb-14">
        I build software that works well, is maintainable, and lets me move
        quickly without sacrificing quality. The tools, patterns, and principles
        I rely on keep my work clear, reliable, and focused on outcomes.
      </Typography>
      <section className="flex flex-col gap-8 mb-12">
        <Typography variant="h2">Philosophy</Typography>
        <Typography variant="body">
          These principles guide how I approach building software. They help me
          maintain clarity, momentum, and usability, keeping projects manageable
          without adding friction.
        </Typography>
        <ul className="flex flex-col gap-4 list-disc ml-8">
          {philosophies.map(({ title, description }) => (
            <li key={title}>
              <span className="font-semibold">{title}</span> - {description}
            </li>
          ))}
        </ul>
      </section>
      <section className="flex flex-col gap-8 mb-12">
        <Typography variant="h2">Core Technologies</Typography>
        <Typography variant="body">
          Here&apos;s what I use to build web applications every day:
        </Typography>
        <ul className="flex flex-col gap-8">
          {coreTech.map(({ category, description }) => (
            <li key={category} className="flex flex-col gap-4">
              <Typography variant="h3">{category}</Typography>
              {description.map((item) => (
                <Typography key={item} variant="body">
                  {item}
                </Typography>
              ))}
            </li>
          ))}
        </ul>
      </section>
      <section className="flex flex-col gap-8 mb-12">
        <Typography variant="h2">
          Other Technologies I&apos;ve Worked With
        </Typography>
        <Typography variant="body">
          I&apos;m comfortable using these tools when the project calls for
          them:
        </Typography>
        <ul className="flex flex-col gap-2">
          {otherTech.map((tech) => (
            <li key={tech} className="inline-flex items-center gap-4">
              <span className="w-6 h-6">{icons[tech]}</span>
              <span>{tech}</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
