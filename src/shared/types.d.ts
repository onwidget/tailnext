import { StaticImageData } from 'next/image';
import { ReactElement } from 'react';

interface Header {
  title?: string | ReactElement;
  subtitle?: string;
  highlight?: string;
}

interface CallToAction {
  text: string;
  href: string;
  icon?: Function;
}

interface Button {
  title: string;
  type: 'button' | 'submit' | 'reset' | undefined;
}

interface Input {
  type: string;
  name: string;
  placeholder?: string;
}

interface SmallForm {
  icon?: Function;
  input: Input;
  btn: Button;
}

interface Form {
  title?: string;
  description?: string;
  inputs: Array<Input>;
  btn: Button;
}

interface Image {
  src: string | StaticImageData;
  alt: string;
}

interface Item {
  title: string;
  description?: string | Array<string>;
  href?: string;
  form?: SmallForm;
  icon?: Function;
  callToAction?: CallToAction;
}

interface Team {
  name: string;
  occupation: string;
  image: Image;
  items?: Array<Item>;
}

interface Testimonial {
  name: string;
  occupation: string;
  comment: string;
  image?: Image;
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

interface Link {
  label: string;
  icon?: Function;
  href: string;
}

interface Links {
  title?: string;
  links: Array<Link>;
}

interface HeroProps {
  title?: string | ReactElement;
  subtitle?: string | ReactElement;
  callToAction?: CallToAction;
  callToAction2?: CallToAction;
  image?: Image;
}

interface FAQsProps {
  header?: Header;
  items: Array<Item>;
}

interface CallToActionProps {
  title: string;
  subtitle: string;
  callToAction?: CallToAction;
  items?: Array<Item>;
}

interface FeaturesProps {
  header?: Header;
  items: Array<Item>;
}

interface ContentProps {
  header?: Header;
  content?: string;
  items?: Array<Item>;
  image?: Image;
  isReversed?: boolean;
  isAfterContent?: boolean;
}

interface StepsProps {
  title?: string;
  items: Array<Item>;
  image?: Image;
}

interface TeamProps {
  header?: Header;
  teams: Array<Team>;
}

interface AnnouncementProps {
  title: string;
  callToAction?: CallToAction;
  callToAction2?: CallToAction;
}

interface TestimonialProps {
  header?: Header;
  testimonials: Array<Testimonial>;
}

interface PricingProps {
  header?: Header;
  prices: Array<Price>;
}

interface SocialProofProps {
  images: Array<Image>;
}

interface ContactProps {
  header?: Header;
  content?: string;
  items: Array<Item>;
  form: Form;
}

interface FooterProps {
  title: string;
  links: Array<Link>;
  columns: Array<Links>;
  socials: Array<Link>;
  footNote?: string | ReactElement;
  theme?: string;
}
