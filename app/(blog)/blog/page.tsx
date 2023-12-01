import type { Metadata } from 'next';

import Image from 'next/image';
import Link from 'next/link';

import LocalSearch from '~/components/search/LocalSearch';

import { getPosts } from '~/utils/posts';

export const metadata: Metadata = {
  title: 'Blog',
};

export default async function Home({ searchParams }: { searchParams: { [key: string]: string | undefined } }) {
  const result = await getPosts({ searchQuery: searchParams.q });

  return (
    <section className="mx-auto max-w-3xl px-6 py-12 sm:px-6 sm:py-16 lg:py-20">
      <header>
        <h1 className="leading-tighter font-heading mb-8 text-center text-4xl font-bold tracking-tighter md:mb-16 md:text-5xl">
          Blog
        </h1>
      </header>
      <LocalSearch route="/blog" placeholder="Search for blog post" />
      <div className="grid grid-cols-1 gap-6  p-4 md:p-0 lg:grid-cols-2">
        {result.posts.map(({ slug, title, image }: { slug: string; title: string; image: string }) => (
          <div key={slug} className="flex flex-col overflow-hidden rounded-xl border border-gray-200 shadow-lg">
            <Link href={`/${slug}`}>
              <Image width={650} height={340} alt={title} src={`${image}`} />
              <h2 className="p-4 font-bold">{title}</h2>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
