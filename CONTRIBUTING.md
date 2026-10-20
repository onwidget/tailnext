# Contributing

## Getting started

```bash
npm ci
npm run dev
```

Node 24 is the target; `.nvmrc` selects it. Supported versions are Node
20.19+, Node 22.13+, and Node 24 or newer. Node 21 and 23 are excluded by
the locked test toolchain. CI checks the Node 20 and 22 minimums and the
current Node 22 and 24 releases.

The locked Chokidar/Vite packages require Node 20.19+, and
`eslint-visitor-keys` requires Node 22.13+ on the Node 22 line.

## Before opening a pull request

CI runs these, so run them locally first:

```bash
npm run lint
npm run typecheck
npm run prettier:check
npm test
npm run build
```

`npm test` runs every Storybook story as a browser test, including automated
accessibility checks. A story that fails an axe rule fails the build.

Commits follow [Conventional Commits](https://www.conventionalcommits.org);
`commitlint` enforces it through a git hook, and `lint-staged` formats staged
files on commit.

## Adding content

Blog posts live in `src/content/blog` as `.mdx`. Frontmatter is validated by a
Zod schema in `content-collections.ts`, so a malformed post fails the build with
a specific error rather than rendering wrong.

## Adding a component

Add a story alongside it in `src/stories`. Stories are the test suite, so a
component without one is untested.
