import { data } from "@/modules/technology";
import {
  Aws as AwsIcon,
  Azure as AzureIcon,
  AzurePipelines as AzurePipelinesIcon,
  Css as CssIcon,
  Express as ExpressIcon,
  Github as GithubIcon,
  GithubActions as GithubActionsIcon,
  Html as HtmlIcon,
  Javascript as JavascriptIcon,
  Mongodb as MongodbIcon,
  Mui as MuiIcon,
  Nestjs as NestjsIcon,
  Nextjs as NextjsIcon,
  Nodejs as NodejsIcon,
  Postgresql as PostgresqlIcon,
  Prisma as PrismaIcon,
  React as ReactIcon,
  Strapi as StrapiIcon,
  Tailwind as TailwindIcon,
  Typescript as TypescriptIcon,
  Typeorm as TypeormIcon,
  Vercel as VercelIcon,
} from "@/components/common/icons";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/common/card";

const icons = {
  HTML: <HtmlIcon />,
  CSS: <CssIcon />,
  JavaScript: <JavascriptIcon />,
  TypeScript: <TypescriptIcon />,
  React: <ReactIcon />,
  MUI: <MuiIcon />,
  "Tailwind CSS": <TailwindIcon />,
  "Next.js": <NextjsIcon />,
  "Node.js": <NodejsIcon />,
  "Express.js": <ExpressIcon />,
  NestJS: <NestjsIcon />,
  Prisma: <PrismaIcon />,
  TypeORM: <TypeormIcon />,
  Strapi: <StrapiIcon />,
  PostgreSQL: <PostgresqlIcon />,
  MongoDB: <MongodbIcon />,
  GitHub: <GithubIcon />,
  "GitHub Actions": <GithubActionsIcon />,
  Azure: <AzureIcon />,
  "Azure Pipelines": <AzurePipelinesIcon />,
  AWS: <AwsIcon />,
  Vercel: <VercelIcon />,
};

export function Technology() {
  return (
    <div className="grid grid-cols-12 gap-4 md:gap-8">
      {data.map(({ name, description, items }) => (
        <Card key={name} className="col-span-12 md:col-span-4">
          <CardHeader className="md:min-h-[9rem]">
            <CardTitle>{name}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="flex flex-col space-y-4">
              {items.map((item) => (
                <li key={item} className="inline-flex items-center space-x-4">
                  <span className="w-6 h-6">{icons[item]}</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
