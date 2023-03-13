import CallToAction from '~/components/widgets/CallToAction';
import FAQs4 from '~/components/widgets/FAQs4';
import { callToActionData2, faqs4Data } from '~/shared/data';

const Page = () => {
  return (
    <>
      <FAQs4 {...faqs4Data} />
      <CallToAction cta={callToActionData2} />
    </>
  );
};

export default Page;
