import type { Metadata } from 'next';

import CallToAction from '~/components/widgets/CallToAction';
import FAQs4 from '~/components/widgets/FAQs4';
import { callToAction2Faqs, faqs4Faqs } from '~/shared/data/pages/faqs.data';

export const metadata: Metadata = {
  title: 'FAQs',
};

const Page = () => {
  return (
    <>
      <FAQs4 {...faqs4Faqs} />
      <CallToAction {...callToAction2Faqs} />
    </>
  );
};

export default Page;
