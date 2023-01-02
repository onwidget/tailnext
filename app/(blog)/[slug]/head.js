import { NextSeo } from 'next-seo';

import { findPostBySlug } from '~/utils/posts';
import { SITE } from '~/config.js';

export default async function Head({ params }) {
  const post = await findPostBySlug(params.slug);
  return <NextSeo title={`${post.title} — ${SITE.name}`} description={post.description} useAppDir={true} />;
}
