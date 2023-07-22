import { skills } from "@/modules/content";
import {
  Aws as AwsIcon,
  Azure as AzureIcon,
  Express as ExpressIcon,
  Github as GithubIcon,
  Javascript as JavascriptIcon,
  Mongodb as MongodbIcon,
  Nestjs as NestjsIcon,
  Nextjs as NextjsIcon,
  Nodejs as NodejsIcon,
  Postgresql as PostgresqlIcon,
  Prisma as PrismaIcon,
  React as ReactIcon,
  Strapi as StrapiIcon,
  Tailwind as TailwindIcon,
  Typescript as TypescriptIcon,
  Vercel as VercelIcon,
} from "@/components/common/icons";
import {
  ScrollArea,
  ScrollAreaViewport,
  ScrollAreaScrollbar,
} from "@/components/common/scroll-area";

const icons = {
  JavaScript: <JavascriptIcon className="h-12 w-12" />,
  TypeScript: <TypescriptIcon className="h-12 w-12" />,
  React: <ReactIcon className="h-12 w-12" />,
  "Next.js": <NextjsIcon className="h-12 w-12" />,
  Tailwind: <TailwindIcon className="h-12 w-12" />,
  "Node.js": <NodejsIcon className="h-12 w-12" />,
  "Express.js": <ExpressIcon className="h-12 w-12" />,
  NestJS: <NestjsIcon className="h-12 w-12" />,
  Prisma: <PrismaIcon className="h-12 w-12" />,
  PostgreSQL: <PostgresqlIcon className="h-12 w-12" />,
  MongoDB: <MongodbIcon className="h-12 w-12" />,
  Strapi: <StrapiIcon className="h-12 w-12" />,
  GitHub: <GithubIcon className="h-12 w-12" />,
  AWS: <AwsIcon className="h-12 w-12" />,
  Azure: <AzureIcon className="h-12 w-12" />,
  Vercel: <VercelIcon className="h-12 w-12" />,
};

export function SkillsMarquee() {
  return (
    <ScrollArea className="relative w-full">
      <ScrollAreaViewport className="[&>div>*]:hover:animation-state-pause !overflow-x-hidden motion-reduce:!overflow-x-unset">
        <div className="flex space-x-8 pl-8 animate-marquee-left motion-reduce:pr-8 motion-reduce:animate-none">
          {skills.map((skill) => (
            <div key={skill} className="flex flex-col items-center space-y-2">
              {icons[skill]}
              <span>{skill}</span>
            </div>
          ))}
        </div>
        <div
          aria-hidden="true"
          className="absolute top-0 flex space-x-8 pl-8 animate-marquee-right motion-reduce:hidden motion-reduce:animate-none"
        >
          {skills.map((skill) => (
            <div key={skill} className="flex flex-col items-center space-y-2">
              {icons[skill]}
              <span>{skill}</span>
            </div>
          ))}
        </div>
      </ScrollAreaViewport>
      <ScrollAreaScrollbar
        orientation="horizontal"
        className="hidden motion-reduce:flex"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background from-2% via-transparent to-background to-98% pointer-events-none motion-reduce:hidden" />
    </ScrollArea>
  );
}
