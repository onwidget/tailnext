import { StaticImageData } from 'next/image';
import { ReactElement } from 'react';

interface Widget {
  id?: string;
  isDark?: boolean;
}

interface WrapperTagProps extends Widget {
  children: React.ReactNode;
  containerClass?: string;
}

interface BackgroundProps {
  children?: React.ReactNode;
  isDark?: boolean;
}

interface Header {
  title?: string | ReactElement;
  subtitle?: string | ReactElement;
  tagline?: string;
  position?: 'center' | 'right' | 'left';
}

interface HeadlineProps {
  header: Header;
  containerClass?: string;
  titleClass?: string;
  subtitleClass?: string;
}

type Icon = React.ComponentType<React.ComponentProps<'svg'>>;

interface CallToAction {
  text?: string;
  href: string;
  icon?: Icon;
  targetBlank?: boolean;
}

interface LinkOrButton {
  callToAction?: CallToAction;
  containerClass?: string;
  linkClass?: string;
  iconClass?: string;
}

interface Button {
  title: string;
  type: 'button' | 'submit' | 'reset';
}

interface Input {
  type: string;
  label?: string;
  value?: string;
  name?: string;
  autocomplete?: string;
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
  icon?: Icon;
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
  containerClass?: string;
}

interface Image {
  link?: string;
  src: string | StaticImageData;
  alt: string;
}

interface Item {
  title?: string | boolean | number;
  description?: string | Array<string>;
  href?: string;
  form?: SmallForm;
  icon?: Icon;
  callToAction?: CallToAction;
}

interface ItemGrid {
  id?: string;
  items?: Array<Item>;
  columns?: number;
  defaultColumns?: number;
  defaultIcon?: Icon;
  containerClass?: string;
  panelClass?: string;
  iconClass?: string;
  titleClass?: string;
  descriptionClass?: string;
  actionClass?: string;
}

interface Timeline {
  id?: string;
  items?: Array<Item>;
  defaultIcon?: Icon;
  containerClass?: string;
  panelClass?: string;
  iconClass?: string;
  titleClass?: string;
  descriptionClass?: string;
}

interface Team {
  name: string;
  occupation: string;
  image: Image;
  items?: Array<Item>;
  containerClass?: string;
  imageClass?: string;
  panelClass?: string;
  nameClass?: string;
  occupationClass?: string;
  itemsClass?: string;
}

interface Testimonial {
  testimonial?: string;
  startSlice?: number;
  endSlice?: number;
  isTestimonialUp?: boolean;
  hasDividerLine?: boolean;
  name?: string;
  job?: string;
  image?: Image;
  href?: string;
  containerClass?: string;
  panelClass?: string;
  imageClass?: string;
  dataClass?: string;
  nameJobClass?: string;
  nameClass?: string;
  jobClass?: string;
  testimonialClass?: string;
}

interface Link {
  label?: string;
  href?: string;
  ariaLabel?: string;
  icon?: Icon;
}

interface Price {
  title?: string;
  subtitle?: string;
  description?: string;
  price?: number;
  period?: string;
  items?: Array<Item>;
  callToAction?: CallToAction;
  hasRibbon?: boolean;
  ribbonTitle?: string;
}

interface Column {
  title: string;
  items: Array<Item>;
  callToAction?: CallToAction;
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

interface ToggleMenuProps {
  handleToggleMenuOnClick: MouseEventHandler<HTMLButtonElement>;
  isToggleMenuOpen: boolean;
}

interface WindowSize {
  width: number;
  height: number;
}

// WIDGETS
interface HeroProps {
  title?: string | ReactElement;
  subtitle?: string | ReactElement;
  tagline?: string;
  callToAction?: CallToAction;
  callToAction2?: CallToAction;
  image?: Image;
}

interface FAQsProps extends Widget {
  header?: Header;
  items?: Array<Item>;
  columns?: number;
  tabs?: Array<Tab>;
  callToAction?: CallToAction;
}

interface CollapseProps {
  items: Array<Item>;
  classCollapseItem?: string;
  iconUp?: ReactElement;
  iconDown?: ReactElement;
}

interface CallToActionProps extends Widget {
  title: string;
  subtitle: string;
  callToAction?: CallToAction;
  items?: Array<Item>;
}

interface FeaturesProps extends Widget {
  header?: Header;
  items?: Array<Item>;
  columns?: number;
  defaultColumns?: number;
  image?: Image;
  isBeforeContent?: boolean;
  isAfterContent?: boolean;
}

interface ContentProps extends Widget {
  header?: Header;
  content?: string;
  items?: Array<Item>;
  image?: Image;
  isReversed?: boolean;
  isAfterContent?: boolean;
}

interface StepsProps extends Widget {
  header?: Header;
  items: Array<Item>;
  image?: Image;
  isReversed?: boolean;
}

interface TeamProps extends Widget {
  header?: Header;
  teams: Array<Team>;
}

interface AnnouncementProps {
  title: string;
  callToAction?: CallToAction;
  callToAction2?: CallToAction;
}

interface TestimonialsProps extends Widget {
  header?: Header;
  testimonials: Array<Testimonial>;
  isTestimonialUp?: boolean;
  hasDividerLine?: boolean;
  startSlice?: number;
  endSlice?: number;
  callToAction?: CallToAction;
}

interface PricingProps extends Widget {
  header?: Header;
  prices: Array<Price>;
}

interface ComparisonProps extends Widget {
  header?: Header;
  columns: Array<Column>;
}

interface StatsProps extends Widget {
  items: Array<Item>;
}

interface SocialProofProps extends Widget {
  images: Array<Image>;
}

interface ContactProps extends Widget {
  header?: Header;
  content?: string;
  items?: Array<Item>;
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
  actions?: Array<CallToAction>;
  // actions?: Array<ActionLink>;
  isSticky?: boolean;
  showToggleTheme?: boolean;
  showRssFeed?: boolean;
  position?: 'center' | 'right' | 'left';
}
