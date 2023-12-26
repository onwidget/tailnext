import { StaticImageData } from 'next/image';
import { ReactElement } from 'react';

type Widget = {
  id?: string;
  /** Does it have a background? */
  hasBackground?: boolean;
};

type WrapperTagProps = Widget & {
  children: React.ReactNode;
  containerClass?: string;
};

type BackgroundProps = {
  children?: React.ReactNode;
  hasBackground?: boolean;
};

type Header = {
  title?: string | ReactElement;
  subtitle?: string | ReactElement;
  tagline?: string;
  position?: 'center' | 'right' | 'left';
};

type HeadlineProps = {
  header: Header;
  containerClass?: string;
  titleClass?: string;
  subtitleClass?: string;
};

type Icon = React.ComponentType<React.ComponentProps<'svg'>>;

type CallToActionType = {
  text?: string;
  href: string;
  icon?: Icon;
  targetBlank?: boolean;
};

type LinkOrButton = {
  callToAction?: CallToActionType;
  containerClass?: string;
  linkClass?: string;
  iconClass?: string;
};

type Button = {
  title: string;
  type: 'button' | 'submit' | 'reset';
};

type Input = {
  type: string;
  label?: string;
  value?: string;
  name?: string;
  autocomplete?: string;
  placeholder?: string;
};

type Textarea = {
  cols?: number;
  rows?: number;
  label?: string;
  name: string;
  placeholder?: string;
};

type Checkbox = {
  label: string;
  value: string;
};

type Radio = {
  label: string;
};

type RadioBtn = {
  label?: string;
  radios: Array<Radio>;
};

type SmallForm = {
  icon?: Icon;
  input: Input;
  btn: Button;
};

type FormProps = {
  title?: string;
  description?: string;
  inputs: Array<Input>;
  radioBtns?: RadioBtn;
  textarea?: Textarea;
  checkboxes?: Array<Checkbox>;
  btn: Button;
  btnPosition?: 'center' | 'right' | 'left';
  containerClass?: string;
};

type Image = {
  link?: string;
  src: string | StaticImageData;
  alt: string;
};

type Item = {
  title?: string | boolean | number;
  description?: string | Array<string>;
  href?: string;
  form?: SmallForm;
  icon?: Icon;
  callToAction?: CallToActionType;
};

type ItemGrid = {
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
};

type Timeline = {
  id?: string;
  items?: Array<Item>;
  defaultIcon?: Icon;
  containerClass?: string;
  panelClass?: string;
  iconClass?: string;
  titleClass?: string;
  descriptionClass?: string;
};

type Team = {
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
};

type Testimonial = {
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
};

type Link = {
  label?: string;
  href?: string;
  ariaLabel?: string;
  icon?: Icon;
};

type Price = {
  title?: string;
  subtitle?: string;
  description?: string;
  price?: number;
  period?: string;
  items?: Array<Item>;
  callToAction?: CallToActionType;
  hasRibbon?: boolean;
  ribbonTitle?: string;
};

type Column = {
  title: string;
  items: Array<Item>;
  callToAction?: CallToActionType;
};

type MenuLink = Link & {
  links?: Array<Link>;
};

type Links = {
  title?: string;
  links?: Array<Link>;
  texts?: Array<string>;
};

type Tab = {
  link?: Link;
  items: Array<Item>;
};

type Dropdown = {
  options: Tab[];
  activeTab: number;
  onActiveTabSelected: Function;
  iconUp?: ReactElement;
  iconDown?: ReactElement;
};

type ToggleMenuProps = {
  handleToggleMenuOnClick: MouseEventHandler<HTMLButtonElement>;
  isToggleMenuOpen: boolean;
};

type WindowSize = {
  width: number;
  height: number;
};

// WIDGETS
type HeroProps = {
  title?: string | ReactElement;
  subtitle?: string | ReactElement;
  tagline?: string;
  callToAction?: CallToActionType;
  callToAction2?: CallToActionType;
  image?: Image;
};

type FAQsProps = Widget & {
  header?: Header;
  items?: Array<Item>;
  columns?: number;
  tabs?: Array<Tab>;
  callToAction?: CallToActionType;
};

type CollapseProps = {
  items: Array<Item>;
  classCollapseItem?: string;
  iconUp?: ReactElement;
  iconDown?: ReactElement;
};

type CallToActionProps = Widget & {
  title: string;
  subtitle: string;
  callToAction?: CallToActionType;
  items?: Array<Item>;
};

type FeaturesProps = Widget & {
  header?: Header;
  items?: Array<Item>;
  /** How many columns should it have? */
  columns?: 1 | 2 | 3;
  /** Do you want the image to be displayed? */
  isImageDisplayed?: boolean;
  image?: Image;
  isBeforeContent?: boolean;
  isAfterContent?: boolean;
};

type ContentProps = Widget & {
  header?: Header;
  content?: string;
  items?: Array<Item>;
  image?: Image;
  isReversed?: boolean;
  isAfterContent?: boolean;
};

type StepsProps = Widget & {
  header?: Header;
  items: Array<Item>;
  /** Do you want the image to be displayed? */
  isImageDisplayed?: boolean;
  image?: Image;
  /** Do you want to reverse the widget? */
  isReversed?: boolean;
};

type TeamProps = Widget & {
  header?: Header;
  teams: Array<Team>;
};

type AnnouncementProps = {
  title: string;
  callToAction?: CallToActionType;
  callToAction2?: CallToActionType;
};

type TestimonialsProps = Widget & {
  header?: Header;
  testimonials: Array<Testimonial>;
  isTestimonialUp?: boolean;
  hasDividerLine?: boolean;
  startSlice?: number;
  endSlice?: number;
  callToAction?: CallToActionType;
};

type PricingProps = Widget & {
  header?: Header;
  prices: Array<Price>;
};

type ComparisonProps = Widget & {
  header?: Header;
  columns: Array<Column>;
};

type StatsProps = Widget & {
  items: Array<Item>;
};

type SocialProofProps = Widget & {
  images: Array<Image>;
};

type ContactProps = Widget & {
  header?: Header;
  content?: string;
  items?: Array<Item>;
  form: FormProps;
};

type FooterProps = {
  title?: string;
  links?: Array<Link>;
  columns: Array<Links>;
  socials: Array<Link>;
  footNote?: string | ReactElement;
  theme?: string;
};

type HeaderProps = {
  links?: Array<MenuLink>;
  actions?: Array<CallToActionType>;
  // actions?: Array<ActionLink>;
  isSticky?: boolean;
  showToggleTheme?: boolean;
  showRssFeed?: boolean;
  position?: 'center' | 'right' | 'left';
};
