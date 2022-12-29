export const dynamicParams = false;

import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

import md from 'markdown-it';
import { notFound } from 'next/navigation';
import { findLatestPosts } from '../../../src/utils/posts';

const postsDirectory = join(process.cwd(), 'src/blog');
const getFormattedDate = (date) => date;

export async function generateStaticParams() {
  const posts = await findLatestPosts();
  return posts.map(({ slug }) => ({ slug }));
}

async function fetchData(params) {
  const slug = params?.slug;
  try {
    const readFile = fs.readFileSync(join(postsDirectory, `${slug}.md`), 'utf-8');
    const { data: frontmatter, content } = matter(readFile);
    return {
      slug,
      ...frontmatter,
      content,
    };
  } catch (e) {}

  return null;
}

export default async function Page({ params }) {
  const post = await fetchData(params);

  if (!post) {
    return notFound();
  }
  return (
    <section class="mx-auto py-8 sm:py-16 lg:py-20">
      <article>
        <header class={post.image ? 'text-center' : ''}>
          <p class="mx-auto max-w-3xl px-4 sm:px-6">
            <time dateTime={post.publishDate}>{getFormattedDate(post.publishDate)}</time> ~{' '}
            {/* {Math.ceil(post.readingTime)} min read */}
          </p>
          <h1 className="leading-tighter font-heading mx-auto mb-8 max-w-3xl px-4 text-4xl font-bold tracking-tighter sm:px-6 md:text-5xl">
            {post.title}
          </h1>
        </header>
        <div
          className="prose-md prose-headings:font-heading prose-headings:leading-tighter container prose prose-lg mx-auto mt-8 max-w-3xl px-6 prose-headings:font-bold prose-headings:tracking-tighter prose-a:text-primary-600 prose-img:rounded-md prose-img:shadow-lg dark:prose-invert dark:prose-headings:text-slate-300 dark:prose-a:text-primary-400 sm:px-6 lg:prose-xl"
          dangerouslySetInnerHTML={{ __html: md().render(post.content) }}
        />
      </article>
    </section>
  );
}
