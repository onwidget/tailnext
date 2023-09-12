import { Metadata } from 'next';
import CallToAction from '~/components/widgets/CallToAction';
import Content from '~/components/widgets/Content';
import Features4 from '~/components/widgets/Features4';
import Hero from '~/components/widgets/Hero';
import Testimonials from '~/components/widgets/Testimonials';
import {
  callToActionServices,
  contentServicesOne,
  contentServicesTwo,
  features4Services,
  heroServices,
  testimonialsServices,
} from '~/shared/data/pages/services.data';

export const metadata: Metadata = {
  title: 'Services',
};

const Page = () => {
  return (
    <>
      <Hero {...heroServices} />
      <Features4 {...features4Services} />
      <Content {...contentServicesOne} />
      <Content {...contentServicesTwo} />
      <Testimonials {...testimonialsServices} />
      <CallToAction {...callToActionServices} />
    </>
  );
};

export default Page;
