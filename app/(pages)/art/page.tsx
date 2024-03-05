import { Metadata } from 'next';
import ArtContent from '~/components/widgets/ArtContent';
import Hero from '~/components/widgets/Hero';
import {
  artImageContent,
  artImageContent2,
  artImageContent3,
  artImageContent4,
  heroArt,
} from '~/shared/data/pages/art.data';

export const metadata: Metadata = {
  title: 'Art stuff',
};

const Page = () => {
  return (
    <>
      <Hero {...heroArt} />
      <ArtContent {...artImageContent} />
      <ArtContent {...artImageContent2} />
      <ArtContent {...artImageContent3} />
      <ArtContent {...artImageContent4} />
    </>
  );
};

export default Page;
