export const dynamicParams = false;

import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import md from 'markdown-it';

import Image from 'next/image';

import { notFound } from 'next/navigation';
import { findLatestPosts } from '~/utils/posts';

const postsDirectory = join(process.cwd(), 'data/blog');
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
    <section className="mx-auto py-8 sm:py-16 lg:py-20">
      <article>
        <header className={post.image ? 'text-center' : ''}>
          <p className="mx-auto max-w-3xl px-4 sm:px-6">
            <time dateTime={post.publishDate}>{getFormattedDate(post.publishDate)}</time> ~{' '}
            {/* {Math.ceil(post.readingTime)} min read */}
          </p>
          <h1 className="leading-tighter font-heading mx-auto mb-8 max-w-3xl px-4 text-4xl font-bold tracking-tighter sm:px-6 md:text-5xl">
            {post.title}
          </h1>
          {post.image ? (
            <Image
              src={post.image}
              className="mx-auto mt-4 mb-6 max-w-full bg-gray-400 dark:bg-slate-700 sm:rounded-md lg:max-w-6xl"
              sizes="(max-width: 900px) 400px, 900px"
              alt={post.description}
              loading="eager"
              width={900}
              height={480}
            />
          ) : (
            <div class="mx-auto max-w-3xl px-4 sm:px-6">
              <div class="border-t dark:border-slate-700" />
            </div>
          )}
        </header>
        <div
          className="prose-md prose-headings:font-heading prose-headings:leading-tighter container prose prose-lg mx-auto mt-8 max-w-3xl px-6 prose-headings:font-bold prose-headings:tracking-tighter prose-a:text-primary-600 prose-img:rounded-md prose-img:shadow-lg dark:prose-invert dark:prose-headings:text-slate-300 dark:prose-a:text-primary-400 sm:px-6 lg:prose-xl"
          dangerouslySetInnerHTML={{
            __html: md({
              html: true,
            }).render(post.content),
          }}
        />
      </article>
    </section>
  );
}
