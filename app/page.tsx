import Hero from '~/components/widgets/Hero';
import SocialProof from '../src/components/widgets/SocialProof';
import Features3 from '~/components/widgets/Features3';
import Content from '~/components/widgets/Content';
import Steps from '~/components/widgets/Steps';
import Testimonial from '~/components/widgets/Testimonial';
import FAQs2 from '~/components/widgets/FAQs2';
import Pricing from '~/components/widgets/Pricing';
import Team from '~/components/widgets/Team';
import CallToAction2 from '~/components/widgets/CallToAction2';
import { content2Data, contentData } from '~/shared/data';

export default function Page() {
  return (
    <>
      <Hero />
      <SocialProof />
      <Features3 />
      <Content {...contentData} />
      <Content {...content2Data} />
      <Steps />
      <Testimonial />
      <FAQs2 />
      <Pricing />
      <Team />
      <CallToAction2 />
    </>
  );
}
