import type { Metadata } from 'next';
import Contact from '~/components/widgets/Contact';

import FAQs from '~/components/widgets/FAQs';
import Features3 from '~/components/widgets/Features3';
import Hero2 from '~/components/widgets/Hero2';
import Stats from '~/components/widgets/Stats';
import Testimonials2 from '~/components/widgets/Testimonials2';
import {
  contactAbout,
  faqsAbout,
  features3About,
  hero2About,
  statsAbout,
  testimonials2About,
} from '~/shared/data/pages/about.data';

export const metadata: Metadata = {
  title: `About us`,
};

const Page = () => {
  return (
    <>
      <Hero2 {...hero2About} />
      <Stats {...statsAbout} />
      <Features3 {...features3About} />
      <Testimonials2 {...testimonials2About} />
      <FAQs {...faqsAbout} />
      <Contact {...contactAbout} />
    </>
  );
};

export default Page;
