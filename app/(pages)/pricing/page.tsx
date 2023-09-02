import type { Metadata } from 'next';

import Pricing from '~/components/widgets/Pricing';
import Comparison from '~/components/widgets/Comparison';
import FAQs3 from '~/components/widgets/FAQs3';
import { comparisonPricing, faqs3Pricing, pricingPricing } from '~/shared/data/pages/pricing.data';

export const metadata: Metadata = {
  title: 'Pricing',
};

const Page = () => {
  return (
    <>
      <Pricing {...pricingPricing} />
      <Comparison {...comparisonPricing} />
      <FAQs3 {...faqs3Pricing} />
    </>
  );
};

export default Page;
