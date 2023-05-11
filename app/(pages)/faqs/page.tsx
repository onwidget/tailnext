import type { Metadata } from 'next';

import CallToAction from '~/components/widgets/CallToAction';
import FAQs4 from '~/components/widgets/FAQs4';
import { callToActionData2, faqs4Data } from '~/shared/data';

export const metadata: Metadata = {
  title: 'FAQs',
};

const Page = () => {
  return (
    <>
      <FAQs4 {...faqs4Data} />
      <CallToAction data={callToActionData2} />
    </>
  );
};

export default Page;
