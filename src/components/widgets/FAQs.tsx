import { IconArrowDownRight } from '@tabler/icons-react';
import { FAQsProps, Item } from '~/shared/types';
import HeaderWidget from '../common/HeaderWidget';

const FAQs = ({ header, items }: FAQsProps) => (
  <section className="bg-primary-50 dark:bg-slate-800" id="faqsOne">
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      {header && <HeaderWidget header={header} titleClassname="text-3xl sm:text-4xl" />}
      <div className="max-w-screen-xl sm:mx-auto">
        <div className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-2 lg:gap-x-16">
          {(items as Item[]).map(({ title, description }, index) => (
            <div className="space-y-8" key={`faqs-item-${index}`}>
              <div>
                <h3 className="mb-4 text-xl font-bold">
                  <IconArrowDownRight
                    name="tabler:arrow-down-right"
                    className="inline-block h-7 w-7 text-primary-800"
                  />
                  {title}
                </h3>
                <div className="text-gray-700 dark:text-gray-400">{description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default FAQs;
