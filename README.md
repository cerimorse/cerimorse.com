<h1 align="center">Ceri Morse</h1>

<p align="center">
  <img src="./src/app/favicon.ico" alt="fuse-logo" width="120px" height="120px"/>
  <br/>
  <i>Full stack application and API for my personal website
  <br/>built with Next.js and Tailwind CSS.</i>
  <br/>
</p>

<p align="center">
  <a href="https://www.cerimorse.com"><strong>cerimorse.com</strong></a>
  <br/>
</p>

<p align="center">
  <a href="https://github.com/cerimorse/cerimorse.com/issues">Submit an Issue</a>
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

<p align="center">
  <a href="https://commitizen.github.io/cz-cli/">
    <img src="https://img.shields.io/badge/commitizen-friendly-brightgreen.svg" alt="Commitizen friendly" />
  </a>
</p>

<hr/>


### Features

- ⚡ [Next.js](https://nextjs.org/) for Static Site Generation, Server-side Rendering and API Routes
- 💎 Integrate with [Tailwind](https://tailwindcss.com/), [Radix UI](https://www.radix-ui.com/) and [shadcn/ui](https://ui.shadcn.com/)
- ✉️ E-mail templates with [React Email](https://react.email/)
- 📏 Linter with [ESLint](https://eslint.org/) (default Next.js and Next.js Core Web Vitals)
- 💖 Code Formatter with [Prettier](https://prettier.io/)
- 🦊 Husky for Git Hooks
- 🚫 Lint-staged for running linters on Git staged files
- 🚓 Lint git commit with Commitlint
- 📓 Write standard compliant commit messages with Commitizen
- 💡 Absolute Imports using `@/` prefix
- 👷 Vercel - Automated deployments and preview deployments on pull request


### Requirements

- Node.js 16+
- npm 


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
npm install
```


### Environment variables

My personal website requires a number of environment variables in order to run correctly:

- **RESEND_API_KEY**: Authenticate communications with Resend
- **FLICKR_API_KEY**: Application key to make use of the Flickr API
- **SPOTIFY_CLIENT_ID**: Unique identifier of the application
- **SPOTIFY_CLIENT_SECRET**: Application key used to authorise calls to the web API
- **SPOTIFY_REFRESH_TOKEN**: Request a new access token

All environment variables should be stored in a `.env.local` file in the project's root directory. 


### Running

You can now run the site locally in development mode:

```shell
npm run dev
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
│   ├── emails                      # Email templates
│   ├── hooks                       # Custom hooks
│   ├── lib                         # External library configurations, setup and wrapper functions
│   ├── modules                     # Page content, fonts and utility functions
│   ├── providers                   # Custom providers
│   └── styles                      # Global styles for use with Tailwind CSS
├── jsconfig.json                   # JavaScript configuration
├── next.config.js                  # Next.js configuration
└── tailwind.config.js              # Tailwind CSS configuration
```