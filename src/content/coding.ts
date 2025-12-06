export const philosophies: { title: string; description: string }[] = [
  {
    title: "Accessibility isn't optional",
    description: "Everything I ship should work for everyone, full stop.",
  },
  {
    title: "Readable code wins",
    description:
      "Good names, clear structure, and small modules beat “clever” every day.",
  },
  {
    title: "DX should feel smooth",
    description: "Local dev, deployments, and CI/CD should be effortless.",
  },
  {
    title: "Performance comes from understanding",
    description:
      "Focus on solid architecture first, then optimise where it actually matters.",
  },
  {
    title: "Ship fast without breaking things",
    description:
      "Short feedback loops, feature flags, and reversible decisions keep velocity high.",
  },
  {
    title: "Testing should feel purposeful",
    description:
      "I focus on validating real behaviour and key flows, keeping tests meaningful and lightweight.",
  },
];

export const coreTech: { category: string; description: string[] }[] = [
  {
    category: "Framework (React and Next.js)",
    description: [
      "Next.js has been my go-to since 2020, paired with React, TypeScript, and pnpm to keep projects predictable, fast, and maintainable. It gives me a solid foundation for both server and client-rendered workflows.",
      "Data fetching happens mostly in server components, as close to where the data is needed as possible, with caching applied intelligently. For client-side updates, I rely on SWR or React Query, depending on the problem’s shape.",
      "Forms are built with react-hook-form and Zod, providing a lightweight, type-safe approach that keeps user input reliable and easy to manage.",
    ],
  },
  {
    category: "Styling (Tailwind CSS and shadcn/ui)",
    description: [
      "Fast, maintainable styling is key, and Tailwind CSS lets me achieve that without wrestling with traditional CSS pitfalls. Its utility-first approach keeps markup clean and predictable.",
      "On top of Tailwind, shadcn/ui provides reusable components and patterns, giving a solid foundation for consistent design while still allowing customisation where flexibility is needed.",
      "This setup makes building interfaces intuitive and iteration-friendly, letting me focus on features rather than fighting styles, and keeping the UI maintainable.",
    ],
  },
  {
    category: "Database & ORM (PostgreSQL and Drizzle ORM)",
    description: [
      "PostgreSQL handles production workloads reliably and flexibly, giving confidence in data integrity across projects. Its relational features make modeling complex domains straightforward.",
      "Drizzle ORM provides a type-safe, lightweight layer for database interactions. Queries remain readable and maintainable without unnecessary abstraction.",
      "Together, they let me iterate on features quickly, handle schema changes confidently, and maintain a predictable data layer that scales with the project.",
    ],
  },
  {
    category: "Deployments (Vercel and GitHub Actions)",
    description: [
      "Shipping reliably shouldn’t require thinking about deployment steps. Vercel and GitHub Actions automate builds and deployments, keeping the process smooth and predictable.",
      "Automation allows me to focus on coding rather than manual tasks, ensuring changes are delivered consistently and safely.",
      "This setup keeps the feedback loop tight, enables safe rollbacks, and maintains steady project momentum, letting me ship features with confidence.",
    ],
  },
];

export const otherTech: string[] = [
  "HTML",
  "CSS",
  "MUI",
  "Node.js",
  "Express.js",
  "NestJS",
  "Prisma",
  "TypeORM",
  "Strapi",
  "MongoDB",
  "Azure",
  "Azure Pipelines",
  "AWS",
];

export type Technology = (typeof otherTech)[number];
