import type { Metadata } from 'next';
import Contact from '~/components/widgets/Contact';

import FAQs from '~/components/widgets/FAQs';
import Features4 from '~/components/widgets/Features4';
import Hero2 from '~/components/widgets/Hero2';
import Stats from '~/components/widgets/Stats';
import { contactAbout, faqsAbout, features4About, hero2About, statsAbout } from '~/shared/data/pages/about.data';

export const metadata: Metadata = {
  title: `About us`,
};

const Page = () => {
  return (
    <>
      <Hero2 {...hero2About} />
      <Stats {...statsAbout} />
      <Features4 {...features4About} />
      <FAQs {...faqsAbout} />
      <Contact {...contactAbout} />
    </>
  );
};

export default Page;
