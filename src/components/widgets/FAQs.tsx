import { IconArrowDownRight } from '@tabler/icons-react';
import { FAQsProps, Item } from '~/shared/types';
import Headline from '../common/Headline';
import WidgetWrapper from '../common/WidgetWrapper';

const FAQs = ({ header, items, id, isDark = false }: FAQsProps) => (
  <WidgetWrapper id={id ? id : ''} isDark={isDark} containerClass="max-w-6xl">
    {header && <Headline header={header} titleClass="text-3xl sm:text-4xl" />}
    <div className="max-w-screen-xl sm:mx-auto">
      <div className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-2 lg:gap-x-16">
        {(items as Item[]).map(({ title, description }, index) => (
          <div className="space-y-8" key={`faqs-item-${index}`}>
            <div>
              <h3 className="mb-4 text-xl font-bold">
                <IconArrowDownRight name="tabler:arrow-down-right" className="inline-block h-7 w-7 text-primary-800" />
                {title}
              </h3>
              <div className="text-gray-700 dark:text-gray-400">{description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </WidgetWrapper>
);

export default FAQs;
