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

import heroImg from '~/assets/images/hero.jpg';
import hikingImg from '~/assets/images/hiking.jpg';
import cameraFrontImg from '~/assets/images/camera-front.jpg';
import cameraBackImg from '~/assets/images/camera-back.jpg';

// Hero data on art page *******************
export const heroArt: HeroProps = {
  title: "Art & Prints",
  subtitle:
    'Themes of nature and the in between ',
  backgroundKey: 'art',
};


// Content data on Services page *******************
export const artImageContent: ContentProps = {
  id: 'contentOne-on-services-one',
  hasBackground: false,
  images: [
    {
    src: hikingImg,
    alt: 'Colorful Image',
    },
    {
    src: cameraBackImg,
    alt: 'Colorful Image',
    },
    {
    src: cameraFrontImg,
    alt: 'Colorful Image',
    },
    {
    src: hikingImg,
    alt: 'Colorful Image',
    },
  ],
};
