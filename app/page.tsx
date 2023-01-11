import Hero from '~/components/widgets/Hero';
import Features3 from '~/components/widgets/Features3';
import Steps from '~/components/widgets/Steps';
import Features2 from '~/components/widgets/Features2';
import SocialProof from '../src/components/widgets/SocialProof';
import Testimonial from '~/components/widgets/Testimonial';
import FAQs2 from '~/components/widgets/FAQs2';
import Pricing from '~/components/widgets/Pricing';
import Team from '~/components/widgets/Team';
import CallToAction2 from '~/components/widgets/CallToAction2';

export default function Page() {
  return (
    <>
      <Hero />
      <SocialProof />
      <Features3 />
      <Features2 />
      <Steps />
      <Testimonial />
      <FAQs2 />
      <Pricing />
      <Team />
      <CallToAction2 />
    </>
  );
}
