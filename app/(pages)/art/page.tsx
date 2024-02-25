import { Metadata } from 'next';
import ArtContent from '~/components/widgets/ArtContent';
import Hero from '~/components/widgets/Hero';
import {
  artImageContent,
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
      <ArtContent {...artImageContent} />
      <ArtContent {...artImageContent} />
      <ArtContent {...artImageContent} />
    </>
  );
};

export default Page;
