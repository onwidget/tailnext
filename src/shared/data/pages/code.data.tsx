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
  ContentProps,
  FeaturesProps,
  HeroProps,
} from '~/shared/types';

import cameraFrontImg from '~/assets/images/camera-front.jpg';
import cameraBackImg from '~/assets/images/camera-back.jpg';

// Hero data on code page *******************
export const heroCode: HeroProps = {
  title: 'Fullstack Software Engineer',
  subtitle:
    "I am a Software Engineer based in Kalamazoo, Michigan. I'm passionate about architecting and building innovative user-informed features. I have an insatiable curiosity that drives me to learn how things work.",
};

// Feature2 data on code page *******************
export const features2Services: FeaturesProps = {
  id: 'featuresTwo-on-services',
  header: {
    title: 'Experience / Certification',
  },
  items: [
    {
      title: 'Senior Software Engineer - Bounti.ai',
      description: 'Nullam non sodales massa. Ut justo neque, elementum et vehicula vel, pellentesque non orci.',
      icon: IconBrandTailwind,
    },
    {
      title: 'Software Engineer - New Relic',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      icon: IconComponents,
    },
    {
      title: 'Ux / UI Consultant (Freelance)',
      description: 'Morbi sit amet arcu vitae metus molestie auctor sit amet in risus. Sed vel lacinia purus.',
      icon: IconListCheck,
    },
    {
      title: 'Web Developer (Freelance)',
      description: 'Phasellus id cursus urna. Nullam feugiat tellus sed euismod venenatis.',
      icon: IconRocket,
    },
    {
      title: 'Search Engine Optimization (SEO)',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mi risus tempus nulla.',
      icon: IconArrowsRightLeft,
    },
    {
      title: 'AWS: Cloud Practioner',
      description: 'Maecenas urna augue, commodo vitae lectus euismod, tempor aliquam arcu.',
      icon: IconBulb,
    },
  ],
};

// Content data on Services page *******************
export const contentServicesOne: ContentProps = {
  id: 'contentOne-on-services-one',
  hasBackground: false,
  header: {
    title: 'Latest Projects & Technologies',
  },
  items: [
    {
      title: 'Web platform w/Next.js',
      description:
        '(current) Build web platform with Next.js, Prisma, and Vercel',
    },
    {
      title: 'React/Typescript Micro Service',
      description:
        'Collaborated with product and design to create an observability maturity application performance management feature using React/Typescript',
    },
    {
      title: 'Java GraphQL Endpoint',
      description:
        'Helped design and build a Java graphql endpoint with a postgresql.',
    },
    {
      title: 'Migration to Cloud',
      description:
        'Planned initiative to migrate team’s services and databases from on premise to AWS using Terraform and Argo workflows',
    },
    {
      title: 'New Relic Alerting via Terraform',
      description:
        'Configured alerting for backend and front end services via Terraform using New Relic’s workflows api',
    },
  ],
  image: {
    src: cameraFrontImg,
    alt: 'Colorful Image',
  },
  isReversed: true,
  isAfterContent: false,
};

// Content data on Services page *******************
export const contentServicesTwo: ContentProps = {
  id: 'contentOne-on-services-two',
  hasBackground: false,
  items: [
    {
      title: 'React / Next.js',
    },
    {
      title: 'HTML / CSS',
    },
    {
      title: 'Terraform',
    },
    {
      title: 'Java',
    },
    {
      title: 'SQL / Postgresql/ MongoDB',
    },
    {
      title: 'Javascript / Node / Typescript',
    },
    {
      title: 'GraphQL',
    },
    {
      title: 'Git version control',
    },
  ],
  image: {
    src: cameraBackImg,
    alt: 'Colorful Image',
  },
  isReversed: false,
  isAfterContent: true,
};


