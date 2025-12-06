<h1 align="center">Ceri Morse</h1>

<p align="center">
  <img src="./src/app/favicon.ico" alt="fuse-logo" width="120px" height="120px"/>
  <br/>
  <i>Full stack application for my personal website
  <br/>built with Next.js and Tailwind CSS.</i>
  <br/>
</p>

<p align="center">
  <a href="https://www.cerimorse.com"><strong>cerimorse.com</strong></a>
  <br/>
</p>

<p align="center">
  <a href="https://github.com/cerimorse/cerimorse.com/issues">Submit an Issue </a>
  <br/>
  <br/>
</p>

<p align="center">
  <a href="https://nextjs.org/">
    <img src="https://img.shields.io/static/v1?style=for-the-badge&message=Next.js&color=000000&logo=Next.js&logoColor=FFFFFF&label=" alt="Next.js" />
  </a>&nbsp;
  <a href="https://tailwindcss.com/">
    <img src="https://img.shields.io/static/v1?style=for-the-badge&message=Tailwind+CSS&color=222222&logo=Tailwind+CSS&logoColor=06B6D4&label=" alt="Tailwind CSS" />
  </a>&nbsp;
  <a href="https://vercel.com/">
    <img src="https://img.shields.io/static/v1?style=for-the-badge&message=Vercel&color=000000&logo=Vercel&logoColor=FFFFFF&label=" alt="Vercel" />
  </a>
</p>

<hr/>

### Features

- ⚡ [Next.js](https://nextjs.org/) for Static Site Generation and Server-side Rendering
- 💎 Integrate with [Tailwind](https://tailwindcss.com/), [Radix UI](https://www.radix-ui.com/) and [shadcn/ui](https://ui.shadcn.com/)
- 📏 Linter with [ESLint](https://eslint.org/) (default Next.js and Next.js Core Web Vitals)
- 💖 Code Formatter with [Prettier](https://prettier.io/)
- 🦊 Husky for Git Hooks
- 🚫 Lint-staged for running linters on Git staged files
- 💡 Absolute Imports using `@/` prefix
- 👷 Vercel - Automated deployments and preview deployments on pull request

### Requirements

- Node.js 20+
- pnpm

### Getting started

Clone the repository to your local environment using SSH:

```shell
git clone git@github.com:cerimorse/cerimorse.com.git
```

Make sure you are in the project directory:

```shell
cd cerimorse.com
```

Install the project dependencies:

```shell
pnpm install
```

### Running

You can now run the site locally in development mode:

```shell
pnpm run dev
```

### Project structure

My personal website uses a fairly common folder structure for Next.js app router projects. You can find the main files and their hierarchy laid out below. Any files not included can be assumed to be configuration files that should not need to be changed:

```shell
.
├── README.md                       # README file
├── .github                         # GitHub folder
├── .husky                          # Husky configuration
├── public                          # Public assets folder
├── src
│   ├── app                         # Next.js app router files, including metadata, robots and sitemap
│   ├── components                  # Common and page specific components
│   ├── content                     # Page content
│   ├── lib                         # External library configurations, setup and utility functions
│   ├── providers                   # Custom providers
│   └── styles                      # Global styles for use with Tailwind CSS
├── tsconfig.json                   # TypeScript configuration
├── next.config.ts                  # Next.js configuration
```
