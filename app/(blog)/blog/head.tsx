import { NextSeo } from 'next-seo';
import { SITE } from '~/config.js';

export default function Head() {
  return <NextSeo title={`Blog — ${SITE.name}`} description={SITE.description} useAppDir={true} />;
}
