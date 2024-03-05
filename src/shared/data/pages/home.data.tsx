import { HeroProps } from '../../types';

import { IconCode, IconPalette } from '@tabler/icons-react';

// Hero data on Home page *******************
export const heroHome: HeroProps = {
  title: <>Hello! My name is Tonia Gonzalez.</>,
  subtitle: <>I am a Fullstack Senior Software Engineer &amp; Printmaker based in Kalamazoo Michigan.</>,
  backgroundKey: 'home',
  callToAction: {
    text: 'Code stuff',
    href: '/code',
    icon: IconCode,
  },
  callToAction2: {
    text: 'Art stuff',
    href: '/art',
    icon: IconPalette,
  },
};
