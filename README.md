# Tailnext

**Tailnext** is a free and open-source template to make your website using **[NextJS](https://nextjs.org/) + [Tailwind CSS](https://tailwindcss.com/)**. Ready to start a new project and designed taking into account best practices.

❗ This is a work in progress. We are using **Next.js 13** (**React 18**) with the new [**app directory**](https://beta.nextjs.org/docs/app-directory-roadmap) still in experimental mode.

## Features

- ✅ Integration with **Tailwind CSS** supporting **Dark mode**.
- ✅ **Production-ready** scores in [Lighthouse](https://web.dev/measure/) and [PageSpeed Insights](https://pagespeed.web.dev/) reports.
- ✅ **Image optimization** and **Font optimization**.
- ✅ Fast and **SEO friendly blog**.
- ✅ **Image optimization** and **Font optimization**.
- ✅ Generation of **project sitemap** and **robots.txt** based on your routes.

<br>

<img src="./screenshot.jpg" alt="Tailnext Theme Screenshot">

[![onWidget](https://custom-icon-badges.demolab.com/badge/made%20by%20-onWidget-556bf2?style=flat-square&logo=onwidget&logoColor=white&labelColor=101827)](https://onwidget.com)
[![License](https://img.shields.io/github/license/onwidget/tailnext?style=flat-square&color=dddddd&labelColor=000000)](https://github.com/onwidget/tailnext/blob/main/LICENSE.md)
[![Maintained](https://img.shields.io/badge/maintained%3F-yes-brightgreen.svg?style=flat-square)](https://github.com/onwidget)
[![Contributions Welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat-square)](https://github.com/onwidget/tailnext#contributing)
[![Known Vulnerabilities](https://snyk.io/test/github/onwidget/tailnext/badge.svg?style=flat-square)](https://snyk.io/test/github/onwidget/tailnext)

<br>

<details open>
<summary>Table of Contents</summary>

- [Demo](#demo)
- [Getting started](#getting-started)
  - [Project structure](#project-structure)
  - [Commands](#commands)
  - [Configuration](#configuration)
  - [Deploy](#deploy)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [Acknowledgements](#acknowledgements)
- [License](#license)

</details>

<br>

## Demo

📌 [https://tailnext.vercel.app/](https://tailnext.vercel.app/)

<br>

## Getting started

- Clone: `git clone https://github.com/onwidget/tailnext.git`
- Enter in the directory: `cd tailnext`
- Install dependencies: `npm install`
- Start the development server: `npm run dev`
- View project in local environment: `localhost:3000`

### Project structure

Inside **Tailnext** template, you'll see the following folders and files:

```
/
├── app/
│   ├── (blog)
│   │   ├── [slug]
|   |   |   └── page.js
|   |   └── blog
|   |       └── page.js
│   ├── head.js
│   ├── layout.js
│   └── page.js
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   ├── images/
|   |   └── styles/
|   |       └── base.css
│   ├── components/
│   │   ├── atoms/
|   |   └── widgets/
|   |       ├── Header.astro
|   |       ├── Footer.astro
|   |       └── ...
│   │── content/
│   |   └── blog/
│   |       ├── demo-post-1.md
│   |       └── ...
│   ├── utils/
│   └── config.mjs
├── package.json
└── ...
```

[![Edit Tailnext on CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://githubbox.com/onwidget/tailnext/tree/main)

> **Seasoned next.js expert?** Delete this file. Update `config.mjs` and contents. Have fun!

<br>

### Commands

All commands are run from the root of the project, from a terminal:

| Command               | Action                                       |
| :-------------------- | :------------------------------------------- |
| `npm install`         | Install dependencies                         |
| `npm run dev`         | Starts local dev server at `localhost:3000`  |
| `npm run build`       | Build your production site to `./dist/`      |
| `npm run preview`     | Preview your build locally, before deploying |
| `npm run format`      | Format codes with Prettier                   |
| `npm run lint:eslint` | Run Eslint                                   |

<br>

### Configuration

Coming soon ..

<br>

### Deploy

#### Deploy to production (manual)

You can create an optimized production build with:

```shell
npm run build
```

Now, your website is ready to be deployed. All generated files are located at
`dist` folder, which you can deploy the folder to any hosting service you
prefer.

#### Deploy to Netlify

Clone this repository on own GitHub account and deploy to Netlify:

[![Netlify Deploy button](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/onwidget/tailnext.git)

#### Deploy to Vercel

Clone this repository on own GitHub account and deploy to Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fonwidget%2Ftailnext)

<br>

## Roadmap

Coming soon ..

<br>

## Contributing

If you have any idea, suggestions or find any bugs, feel free to open a discussion, an issue or create a pull request.
That would be very useful for all of us and we would be happy to listen and take action.

## Acknowledgements

Initially created by [onWidget](https://onwidget.com) and maintained by a community of [contributors](https://github.com/onwidget/tailnext/graphs/contributors).

## License

**Tailnext** is licensed under the MIT license — see the [LICENSE](https://github.com/onwidget/tailnext/blob/main/LICENSE.md) file for details.
