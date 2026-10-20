import assert from 'node:assert/strict';
import { mkdtemp, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import { createRequire } from 'node:module';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import test from 'node:test';
import { renderToStaticMarkup } from 'react-dom/server';

const require = createRequire(import.meta.url);
const mdxRequire = createRequire(require.resolve('@content-collections/mdx'));
const { bundleMDX } = mdxRequire('mdx-bundler');
const { getMDXComponent } = mdxRequire('mdx-bundler/client');
const matter = createRequire(mdxRequire.resolve('mdx-bundler'))('gray-matter');
const coreMatter = createRequire(import.meta.resolve('@content-collections/core'))('@11ty/gray-matter');
const legacy = process.env.LEGACY_MATTER_PATH ? require(process.env.LEGACY_MATTER_PATH) : null;
const source = [
  '---',
  "title: 'Fixture: café & design'",
  "publishDate: 'Nov 02 2022'",
  'tags: [design, testing]',
  'draft: false',
  'summary: >-',
  '  A folded',
  '  description.',
  '---',
  '# Fixture heading',
  '',
  'A **formatted** paragraph and [link](https://example.com/).',
  '',
].join('\n');
const expected = {
  title: 'Fixture: café & design',
  publishDate: 'Nov 02 2022',
  tags: ['design', 'testing'],
  draft: false,
  summary: 'A folded description.',
};
const render = (code) => renderToStaticMarkup(getMDXComponent(code)({}));
const dates = "---\ndate: 2022-11-02\nquoted: '2022-11-02'\n---\nBody";
const malformed = '---\ntags: [unterminated\n---\nBody';

test('YAML scalars, folded text, Unicode, BOM and CRLF retain their meaning', () => {
  for (const input of [source, '\ufeff' + source.replaceAll('\n', '\r\n')]) {
    for (const parser of [coreMatter, matter]) {
      assert.deepEqual(parser(input).data, expected);
      assert.match(parser(input).content, /# Fixture heading/);
    }
  }
  assert.deepEqual(matter('# No metadata').data, {});
  assert.deepEqual(matter('---\n---\nBody').data, {});
});

test('unquoted timestamps remain dates and malformed YAML is rejected', () => {
  for (const parser of [coreMatter, matter]) {
    const result = parser(dates).data;
    assert.deepEqual(result.date, new Date('2022-11-02T00:00:00.000Z'));
    assert.equal(result.quoted, '2022-11-02');
    assert.throws(() => parser(malformed));
  }
});

test('MDX source and file compilation preserve metadata and markup', async () => {
  const dir = await mkdtemp(join(tmpdir(), 'tailnext-content-'));
  try {
    const file = join(dir, 'fixture.mdx');
    await writeFile(file, source);
    for (const input of [{ source }, { file }]) {
      const result = await bundleMDX(input);
      assert.deepEqual(result.frontmatter, expected);
      const html = render(result.code);
      assert.match(html, /<h1>Fixture heading<\/h1>/);
      assert.match(html, /<strong>formatted<\/strong>/);
      assert.match(html, /href="https:\/\/example.com\/"/);
      assert.ok(!html.includes('publishDate:'));
    }
    await assert.rejects(bundleMDX({ source: malformed }));
  } finally {
    await rm(dir, { recursive: true, force: true });
  }
});

async function documents() {
  const inputs = [];
  for (const collection of ['blog', 'legal']) {
    const dir = join('src/content', collection);
    const files = (await readdir(dir)).filter((file) => file.endsWith('.mdx'));
    assert.ok(files.length > 0, 'Missing fixtures in ' + collection);
    for (const file of files) inputs.push(await readFile(join(dir, file), 'utf8'));
  }
  return inputs;
}

test('every current blog and legal document compiles with matching metadata', async () => {
  for (const input of await documents()) {
    const result = await bundleMDX({ source: input });
    assert.deepEqual(result.frontmatter, coreMatter(input).data);
    assert.ok(render(result.code).length > 0);
  }
});

test('maintained parsers reject executable JavaScript frontmatter', () => {
  for (const parser of [coreMatter, matter]) {
    assert.throws(() => parser('---javascript\n({title: "unsupported"})\n---\nBody'), /no longer supported/);
  }
});

test('supported YAML agrees with the legacy parser', { skip: !legacy }, async () => {
  const inputs = [
    source,
    '\ufeff' + source.replaceAll('\n', '\r\n'),
    dates,
    '# No metadata',
    '---\n---\nBody',
    ...(await documents()),
  ];
  for (const input of inputs) {
    const baseline = legacy(input);
    for (const parser of [coreMatter, matter]) {
      const actual = parser(input);
      assert.deepEqual(actual.data, baseline.data);
      assert.equal(actual.content, baseline.content);
    }
  }
});
