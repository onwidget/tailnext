import type { Metadata } from 'next';

import { SITE } from '~/config.js';

import Pricing from '~/components/widgets/Pricing';
import Comparison from '~/components/widgets/Comparison';
import FAQs3 from '~/components/widgets/FAQs3';
import { comparisonData, faqs3Data, pricingData } from '~/shared/data';

export const metadata: Metadata = {
  title: `Pricing — ${SITE.name}`,
};

const Page = () => {
  return (
    <>
      <Pricing {...pricingData} />
      <Comparison {...comparisonData} />
      <FAQs3 {...faqs3Data} />
    </>
  );
};

export default Page;
