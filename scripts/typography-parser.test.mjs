import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import { resolve } from 'node:path';
import test from 'node:test';
import postcss from 'postcss';
import tailwind from '@tailwindcss/postcss';

const require = createRequire(import.meta.url);
const { commonTrailingPseudos } = require('@tailwindcss/typography/src/utils.js');

test('Typography retains selector groups, attributes and trailing pseudo-elements', () => {
  for (const [selector, expected] of [
    ['ol > li::marker, ul > li::marker', ['::marker', 'ol > li, ul > li']],
    ['p::before, blockquote::before', ['::before', 'p, blockquote']],
    ['a::before, a::after', [null, 'a::before, a::after']],
    ['a:not([href]), :where(code):not(pre code)', [null, 'a:not([href]), :where(code):not(pre code)']],
    ['[class~="not-prose"] *', [null, '[class~="not-prose"] *']],
  ]) {
    const result = commonTrailingPseudos(selector);
    assert.deepEqual([result[0] || null, result[1]], expected, selector);
  }
});

test(
  'generated Typography CSS agrees with the original parser',
  {
    skip: !process.env.BASELINE_TYPOGRAPHY_PATH,
  },
  async () => {
    async function compile(plugin) {
      const input =
        '@import "tailwindcss";\n@plugin ' +
        JSON.stringify(plugin) +
        ';\n@source inline("prose prose-sm prose-lg prose-xl prose-2xl prose-invert");';
      const result = await postcss([tailwind({ optimize: false })]).process(input, {
        from: resolve('typography-regression.css'),
      });
      return result.css;
    }
    const current = await compile(require.resolve('@tailwindcss/typography'));
    const previous = await compile(process.env.BASELINE_TYPOGRAPHY_PATH);
    assert.match(current, /\.prose/);
    assert.equal(current, previous);
  },
);
