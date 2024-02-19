import { Metadata } from 'next';
import ArtContent from '~/components/widgets/ArtContent';
import Hero from '~/components/widgets/Hero';
import {
  contentServicesOne,
  contentServicesTwo,
  heroArt,
} from '~/shared/data/pages/art.data';

export const metadata: Metadata = {
  title: 'Art stuff',
};

const Page = () => {
  return (
    <>
      <Hero {...heroArt} />
      <ArtContent {...contentServicesOne} />
      <ArtContent {...contentServicesTwo} />
      <ArtContent {...contentServicesOne} />
      <ArtContent {...contentServicesTwo} />
    </>
  );
};

export default Page;
