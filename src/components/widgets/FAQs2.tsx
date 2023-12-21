import Headline from '../common/Headline';
import Collapse from '../common/Collapse';
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';
import { FAQsProps, Item } from '~/shared/types';
import WidgetWrapper from '../common/WidgetWrapper';

const FAQs2 = ({ header, items, id, hasBackground = false }: FAQsProps) => (
  <WidgetWrapper id={id ? id : ''} hasBackground={hasBackground} containerClass="max-w-6xl">
    {header && <Headline header={header} titleClass="text-3xl sm:text-4xl" />}
    <Collapse
      items={items as Item[]}
      classCollapseItem="card md:px-6 py-4 px-5 md:py-5 mb-2"
      iconUp={<IconChevronUp className="h-6 w-6 text-primary-600 dark:text-slate-200" />}
      iconDown={<IconChevronDown className="h-6 w-6 text-primary-600 dark:text-slate-200" />}
    />
  </WidgetWrapper>
);

export default FAQs2;
