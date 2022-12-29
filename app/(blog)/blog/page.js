import Image from 'next/image';
import Link from 'next/link';

import { findLatestPosts } from '~/utils/posts';

export default async function Home({}) {
  const posts = await findLatestPosts();
  return (
    <div className="grid grid-cols-1 p-4 md:grid-cols-3 md:p-0 lg:grid-cols-4">
      {posts.map(({ slug, frontmatter }) => (
        <div key={slug} className="m-2 flex flex-col overflow-hidden rounded-xl border border-gray-200 shadow-lg">
          <Link href={`/${slug}`}>
            <Image width={650} height={340} alt={frontmatter.title} src={`/${frontmatter.image}`} />
            <h1 className="p-4">{frontmatter.title}</h1>
          </Link>
        </div>
      ))}
    </div>
  );
}
