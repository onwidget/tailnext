import { ContentProps, HeroProps } from '~/shared/types';

import sheWeepsImg from '~/assets/images/SheWeeps.jpg';
import fortyThreeImg from '~/assets/images/fortyThree.jpg';
import itsAGirlImg from '~/assets/images/itsAGirl.jpg';
import familyTreeImg from '~/assets/images/familyTree.jpg';
import astoriaImg from '~/assets/images/astoria.jpg';
import pierImg from '~/assets/images/nearPier39.jpg';
import selfPortraitImg from '~/assets/images/selfPortrait.jpg';
import risingSunImg from '~/assets/images/risingSun.jpg';
import ourHeartsImg from '~/assets/images/ourHeartsToward.jpg';
import dnaImg from '~/assets/images/dna.jpg';
import treesImg from '~/assets/images/trees.jpeg';
import collageImg from '~/assets/images/collage.jpeg';

export type SlideImage = {
  src: string;
  alt: string;
  title: string;
  medium: string;
};

// Hero data on art page *******************
export const heroArt: HeroProps = {
  title: 'Printmaking',
  subtitle:
    'My art explores themes of identity, nature, and current events. While I primarly work with linocuts and plate lithograpghy, I enjoy combining printmaking with other mediums.',
  backgroundKey: 'art',
};

// Content data on Art page *******************
export const artImageContent: ContentProps = {
  id: 'contentOne-on-services-one',
  hasBackground: false,
  images: [
    {
      src: sheWeepsImg,
      alt: 'Print of black madonna weeping',
      title: 'She weeps',
      medium: 'Linocut - three plates',
    },
    {
      src: treesImg,
      alt: 'Print of wooded scene with water',
      title: 'Finding asylum',
      medium: 'Hand printed linocut on unryu',
    },
    {
      src: pierImg,
      alt: 'Print with view of sky with clouds and pier ',
      title: 'Near Pier 39',
      medium: 'Reduction linocut',
    },
  ],
};

export const artImageContent2: ContentProps = {
  id: 'contentOne-on-services-one',
  hasBackground: false,
  images: [
    {
      src: itsAGirlImg as unknown as string,
      alt: 'Three jars containing a gun, a girl, reading, and a pregancy test',
      title: `it's a girl! `,
      medium: 'Linocut w/chine collé',
    },
    {
      src: ourHeartsImg as unknown as string,
      alt: 'Two figures connected by anatomical hearts',
      title: 'our hearts toward',
      medium: 'Plate lithography - multi plate',
    },
    {
      src: collageImg as unknown as string,
      alt: 'Collage of prints and photos',
      title: 'memories live in the canopy',
      medium: ' Mixed media collage - linocuts, photos',
    },
  ],
};

export const artImageContent3: ContentProps = {
  id: 'contentOne-on-services-one',
  hasBackground: false,
  images: [
    {
      src: fortyThreeImg as unknown as string,
      alt: 'Print of large mole gurading buried skulls',
      title: 'the forty-three',
      medium: 'Linocut - multiple plates',
    },
    {
      src: astoriaImg as unknown as string,
      alt: 'Print of trees',
      title: 'astoria',
      medium: 'Plate lithography - multiple plates',
    },
    {
      src: dnaImg,
      alt: 'Black and white print, figure ans skeleton separated by dna strands',
      title: 'in our dna',
      medium: 'Linocut',
    },
  ],
};

export const artImageContent4: ContentProps = {
  id: 'contentOne-on-services-one',
  hasBackground: false,
  images: [
    {
      src: selfPortraitImg,
      alt: 'Color image of seated woman',
      title: 'self portrait',
      medium: 'Mixed media - etching, watercolor, photos',
    },
    {
      src: risingSunImg,
      alt: 'Print of woman with head of bird',
      title: 'rising sun',
      medium: 'Plate lithography - multiple plates',
    },
    {
      src: familyTreeImg,
      alt: 'Hanging quilt',
      title: 'family tree',
      medium: 'Hand stitched quilt with linocuts',
    },
  ],
};
