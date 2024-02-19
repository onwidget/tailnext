import { Metadata } from 'next';
import Content from '~/components/widgets/Content';
import Features2 from '~/components/widgets/Features2';
import Hero from '~/components/widgets/Hero';
import {
  contentServicesOne,
  contentServicesTwo,
  features2Services,
  heroCode,
} from '~/shared/data/pages/code.data';

export const metadata: Metadata = {
  title: 'Code stuff',
};

const Page = () => {
  return (
    <>
      <Hero {...heroCode} />
      <Features2 {...features2Services} />
      <Content {...contentServicesOne} />
      <Content {...contentServicesTwo} />
    </>
  );
};

export default Page;
