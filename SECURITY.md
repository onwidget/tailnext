# Security Policy

## Supported versions

Only the latest release of this template receives fixes.

## Reporting a vulnerability

Report vulnerabilities privately through
[GitHub Security Advisories](https://github.com/arthelokyo/tailnext/security/advisories/new)
rather than opening a public issue.

## Known issues

Audit results change over time. Published `braces` 3.0.3 is affected by
[GHSA-vfj7-8cjw-p6xm](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm),
through `eslint-config-next` → `@next/eslint-plugin-next` → `fast-glob` →
`micromatch`. This is a lint-tool dependency; assess the patterns and inputs
used by your project when evaluating exposure. No braces source override is
installed. Track an upstream fix and rerun the full audit. A clean
production-only audit does not establish a clean full dependency tree.

Older frontmatter and Typography parsers may also be reported until their
dependency updates are installed. This document is not a live audit result.

`@content-collections/mdx` reaches `toml` and `uuid` through `mdx-bundler`, and
the ranges those packages declare cannot reach the patched releases. Both are
pinned forward with npm `overrides` in `package.json`. `toml` is only used for
TOML frontmatter, and this project's content is YAML, so that code path never
runs.

If a future `remark-mdx-frontmatter` widens its `toml` range, or `mdx-bundler`
updates `uuid`, the overrides can be dropped.

Run `npm audit` for the current state.

The content update uses `@11ty/gray-matter` in Content Collections and a
scoped `mdx-bundler` alias, avoiding a global YAML parser override. Remove
the alias when mdx-bundler adopts the maintained parser itself.
