import { FAQsProps } from '~/shared/types';
import Headline from '../common/Headline';
import WidgetWrapper from '../common/WidgetWrapper';
import ItemGrid from '../common/ItemGrid';
import { IconArrowDownRight } from '@tabler/icons-react';

const FAQs = ({ header, items, columns, id, hasBackground = false }: FAQsProps) => (
  <WidgetWrapper id={id ? id : ''} hasBackground={hasBackground} containerClass="max-w-6xl">
    {header && <Headline header={header} titleClass="text-3xl sm:text-4xl" />}
    <ItemGrid
      items={items}
      columns={columns}
      defaultColumns={2}
      defaultIcon={IconArrowDownRight}
      containerClass="mt-12"
      panelClass="flex max-w-full"
      titleClass="text-lg font-semibold mb-2"
      descriptionClass="mt-0.5"
      iconClass="flex-shrink-0 mr-2 mt-1 w-6 h-6 text-primary-800 dark:text-primary-600"
    />
  </WidgetWrapper>
);

export default FAQs;
