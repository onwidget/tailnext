import { IconArrowDownRight } from '@tabler/icons';
import { faqsData } from '~/shared/data';

const FAQs = () => {
  const { title, subtitle, highlight, items } = faqsData;

  return (
    <section id="faqsOne">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mb-10 text-center">
          {highlight && (
            <p className="text-base font-semibold uppercase tracking-wide text-primary-600 dark:text-primary-200">
              {highlight}
            </p>
          )}
          {title && (
            <h2 className="font-heading mb-4 text-3xl font-bold leading-none tracking-tight sm:text-4xl md:mx-auto">
              {title}
            </h2>
          )}
          {subtitle && <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-slate-400">{subtitle}</p>}
        </div>
        <div className="max-w-screen-xl sm:mx-auto">
          <div className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-2 lg:gap-x-16">
            {items.map(({ title, description }, index) => (
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
};

export default FAQs;
