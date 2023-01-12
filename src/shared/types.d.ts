import { ReactElement } from 'react';

interface CallToAction {
  text: string;
  href: string;
  icon?: string | ReactElement;
}

interface SmallForm {
  placeholder: string;
  icon?: string | ReactElement;
  callToAction: CallToAction;
}

interface Item {
  title: string;
  description: string;
  href?: string;
  form?: SmallForm;
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
