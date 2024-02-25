import type { Metadata } from 'next';

import Hero2 from '~/components/widgets/Hero2';
import { hero2About } from '~/shared/data/pages/about.data';

export const metadata: Metadata = {
  title: `About`,
};

const Page = () => {
  return (
    <>
      <Hero2 {...hero2About} />
    </>
  );
};

export default Page;
