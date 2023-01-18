import { ReactElement } from 'react';

interface CallToAction {
  text: string;
  href: string;
  icon?: Function;
}

interface SmallForm {
  placeholder: string;
  icon?: Function;
  callToAction: CallToAction;
}

interface Item {
  title: string;
  description?: string;
  href?: string;
  form?: SmallForm;
  icon?: Function;
  btn?: string;
}

interface Team {
  name: string;
  occupation: string;
  image: string | any; // TODO: find HTMLElementProps
  items?: Array<Item>;
}

interface Testimonial {
  name: string;
  occupation: string;
  comment: string;
  image?: string | any; // TODO: find HTMLElementProps
  icon?: Function;
  href?: string;
}

interface Price {
  title: string;
  value: number;
  period?: string;
  texts?: Array<string>;
  btnText?: string;
  hasRibbon?: boolean;
  ribbonText?: string;
}

interface HeroProps {
  title?: string | ReactElement;
  subtitle?: string | ReactElement;
  callToAction?: CallToAction;
  callToAction2?: CallToAction;
  image?: string | any; // TODO: find HTMLElementProps
}

interface FAQsProps {
  title?: string;
  subtitle?: string;
  highlight?: string;
  items: Array<Item>;
}

interface CallToActionProps {
  title: string;
  subtitle: string;
  callToAction?: string | CallToAction;
  items?: Array<Item>;
}

interface FeaturesProps {
  title?: string | ReactElement;
  subtitle?: string;
  highlight?: string;
  items: Array<Item>;
}

interface ContentProps {
  title?: string;
  subtitle?: string;
  highlight?: string;
  content?: string;
  items?: Array<Item>;
  image?: string | any; // TODO: find HTMLElementProps
  isReversed?: boolean;
  isAfterContent?: boolean;
}

interface StepsProps {
  title?: string;
  items: Array<Item>;
  image?: string | any; // TODO: find HTMLElementProps
}

interface TeamProps {
  title: string;
  subtitle: string;
  highlight: string;
  teams: Array<Team>;
}

interface AnnouncementProps {
  title: string;
  callToAction?: CallToAction;
  callToAction2?: CallToAction;
}

interface TestimonialProps {
  title: string;
  subtitle: string;
  highlight: string;
  testimonials: Array<Testimonial>;
}

interface PricingProps {
  title?: string;
  subtitle?: string;
  highlight?: string;
  prices: Array<Price>;
}
