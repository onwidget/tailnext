import { ContentProps, HeroProps } from '~/shared/types';
import hikingPic from '~/assets/images/hiking.jpg';

// Hero data on about page *******************
export const heroAbout: HeroProps = {
  title: 'A little more about me',
  subtitle: `Every day I'm trying to be more brave, less anxious, more open and more curious.`,
  backgroundKey: 'about',
};

// Hero2 data on About page *******************
export const hero2About: HeroProps = {
  subtitle: `During the pandemic my husband and I moved across the country from Portland, Oregon to Kalamazoo, Michigan. I am slowly putting down roots in my new community. I've joined the Southwest Michigan Printmakers. We have collective shows throughout SW Michigan. I also have the honor of serving on the board of the Kalamazoo Book Arts Center. `,
  subtitle1: `When I am not coding or printing I’ll most likely be baking, hiking, bird watching, planting vegetables in my garden, sketching, reading in the sun, doing the work in therapy, playing board games with my husband, meditating, traveling to see friends and family, or just simply looking up at the stars.`,
  subtitle2: `Curiosity has always been the fuel for my analytical and creative interests. I have a bachelor's degrees in Studio Art and in Arabic. I've also earned certification in TEFL and a techdegree focused on Front End & Full Stack JavaScript. There is so much more to explore and I look forward to seeing where my curiosity will continue to lead me!`,
  tagline: 'Tonia Gonzalez',
  image: {
    src: hikingPic,
    alt: 'Hero TailNext',
  },
};
