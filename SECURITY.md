# Security Policy

## Supported versions

Only the latest release of this template receives fixes.

## Reporting a vulnerability

Report vulnerabilities privately through
[GitHub Security Advisories](https://github.com/arthelokyo/tailnext/security/advisories/new)
rather than opening a public issue.

## Known issues

None outstanding. `npm audit` reports no vulnerabilities.

`@content-collections/mdx` reaches `toml` and `uuid` through `mdx-bundler`, and
the ranges those packages declare cannot reach the patched releases. Both are
pinned forward with npm `overrides` in `package.json`. `toml` is only used for
TOML frontmatter, and this project's content is YAML, so that code path never
runs.

If a future `remark-mdx-frontmatter` widens its `toml` range, or `mdx-bundler`
updates `uuid`, the overrides can be dropped.

Run `npm audit` for the current state.
