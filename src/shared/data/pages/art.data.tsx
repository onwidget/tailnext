import {
  IconArrowsRightLeft,
  IconBrandTailwind,
  IconBulb,
  IconChevronsRight,
  IconComponents,
  IconListCheck,
  IconRocket,
} from '@tabler/icons-react';

import {
  CallToActionProps,
  ContentProps,
  FAQsProps,
  FeaturesProps,
  HeroProps,
  TestimonialsProps,
} from '~/shared/types';

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

// Hero data on art page *******************
export const heroArt: HeroProps = {
  title: "Printmaking",
  subtitle:
    'I primarly work in lincouts and plate lithograpghy with themes ranging from identity, nature, and current events',
  backgroundKey: 'art',
};


// Content data on Art page *******************
export const artImageContent: ContentProps = {
  id: 'contentOne-on-services-one',
  hasBackground: false,
  images: [
    {
    src: sheWeepsImg,
    alt: 'Colorful Image',
    },
    {
    src: treesImg,
    alt: 'Colorful Image',
    },
    {
    src: selfPortraitImg,
    alt: 'Colorful Image',
    },
    {
    src: pierImg,
    alt: 'Colorful Image',
    },
  ],
};

export const artImageContent2: ContentProps = {
  id: 'contentOne-on-services-one',
  hasBackground: false,
  images: [
    {
    src: itsAGirlImg,
    alt: 'Colorful Image',
    },
    {
    src: ourHeartsImg,
    alt: 'Colorful Image',
    },
    {
    src: collageImg,
    alt: 'Colorful Image',
    },
    {
    src: fortyThreeImg,
    alt: 'Colorful Image',
    },
  ],
};

export const artImageContent3: ContentProps = {
  id: 'contentOne-on-services-one',
  hasBackground: false,
  images: [
    {
    src: risingSunImg,
    alt: 'Colorful Image',
    },
    {
    src: astoriaImg,
    alt: 'Colorful Image',
    },
    {
    src: dnaImg,
    alt: 'Colorful Image',
    },
    {
    src: familyTreeImg,
    alt: 'Colorful Image',
    },
  ],
};
