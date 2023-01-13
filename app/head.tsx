import { NextSeo } from 'next-seo';
import { SITE } from '~/config.js';

export default function Head() {
  return <NextSeo title={SITE.title} description={SITE.description} useAppDir={true} />;
}
