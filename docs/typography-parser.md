# Typography parser maintenance

The `postcss-selector-parser` 7.1.7 override applies only under
`@tailwindcss/typography`. It avoids changing unrelated consumers.

Run `npm run test:typography` for selector compatibility. To compare complete
generated CSS with Typography 0.5.20 and its original parser, install that
package in a separate temporary directory and set `BASELINE_TYPOGRAPHY_PATH`
to its `src/index.js` entry point. CI runs this comparison explicitly; the
baseline package is not part of the application dependency tree.

After `npm run build`, install Playwright Chromium and run
`npm run test:prose`. This checks all current blog documents and both legal
pages at mobile and desktop widths for readable prose, heading hierarchy,
link underlines, list markers and horizontal overflow. It starts and stops
its own production server on port 3100.

Remove the override when Typography adopts a patched parser in its own
dependency range, regenerating the lockfile and rerunning these checks.
