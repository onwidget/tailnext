import { StaticImageData } from 'next/image';
import { ReactElement } from 'react';

interface Header {
  title?: string | ReactElement;
  subtitle?: string;
  highlight?: string;
  position?: 'center' | 'right' | 'left';
}

interface HeaderWidgetProps {
  header: Header;
  titleClassname?: string;
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
  label?: string;
  value?: string;
  name: string;
  placeholder?: string;
}

interface Textarea {
  cols?: number;
  rows?: number;
  label?: string;
  name: string;
  placeholder?: string;
}

interface Checkbox {
  label: string;
  value: string;
}

interface Radio {
  label: string;
}

interface RadioBtn {
  label?: string;
  radios: Array<Radio>;
}

interface SmallForm {
  icon?: Function;
  input: Input;
  btn: Button;
}

interface FormProps {
  title?: string;
  description?: string;
  inputs: Array<Input>;
  radioBtns?: RadioBtn;
  textarea?: Textarea;
  checkboxes?: Array<Checkbox>;
  btn: Button;
  btnPosition?: 'center' | 'right' | 'left';
}

interface Image {
  src: string | StaticImageData;
  alt: string;
}

interface Item {
  title: string | boolean;
  description?: string | Array<string>;
  href?: string;
  form?: SmallForm;
  icon?: Function;
  callToAction?: CallToAction;
  link?: Link;
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

interface Link {
  label?: string;
  href?: string;
  ariaLabel?: string;
  icon?: Function;
}

interface Price {
  title: string;
  value: number;
  period?: string;
  texts?: Array<string>;
  link?: Link;
  hasRibbon?: boolean;
  ribbonTitle?: string;
}

interface Column {
  title: string;
  items: Array<Item>;
  link?: Link;
}

interface ActionLink extends Link {
  type?: string;
}

interface MenuLink extends Link {
  links?: Array<Link>;
}

interface Links {
  title?: string;
  links?: Array<Link>;
  texts?: Array<string>;
}

interface Tab {
  link?: Link;
  items: Array<Item>;
}

interface Dropdown {
  options: Tab[];
  activeTab: number;
  onActiveTabSelected: Function;
  iconUp?: ReactElement;
  iconDown?: ReactElement;
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
  items?: Array<Item>;
  tabs?: Array<Tab>;
  link?: Link;
}

interface CollapseProps {
  items: Array<Item>;
  classCollapseItem?: string;
  iconUp?: ReactElement;
  iconDown?: ReactElement;
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

interface ComparisonProps {
  header?: Header;
  columns: Array<Column>;
}

interface SocialProofProps {
  images: Array<Image>;
}

interface ContactProps {
  header?: Header;
  content?: string;
  items: Array<Item>;
  form: FormProps;
}

interface FooterProps {
  title?: string;
  links?: Array<Link>;
  columns: Array<Links>;
  socials: Array<Link>;
  footNote?: string | ReactElement;
  theme?: string;
}

interface HeaderProps {
  links?: Array<MenuLink>;
  actions?: Array<ActionLink>;
  isSticky?: boolean;
  showToggleTheme?: boolean;
  showRssFeed?: boolean;
  position?: 'center' | 'right' | 'left';
}

interface ToggleMenuProps {
  handleToggleMenuOnClick: MouseEventHandler<HTMLButtonElement>;
  isToggleMenuOpen: boolean;
}

interface WindowSize {
  width: number;
  height: number;
}
