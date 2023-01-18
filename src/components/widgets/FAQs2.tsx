'use client';

import { useState } from 'react';
import { IconChevronDown, IconChevronUp } from '@tabler/icons';
import { faqsData } from '~/shared/data';

const FAQs2 = () => {
  const { title, subtitle, highlight, items } = faqsData;

  const [toggle, setToggle] = useState<boolean>(true);
  const [activeIndex, setActiveIndex] = useState<undefined | number>(undefined);

  const handleSetIndex = (index: number) => {
    if (activeIndex !== index) {
      setActiveIndex(index);
      setToggle(!toggle);
    } else {
      setActiveIndex(undefined);
      setToggle(!toggle);
    }
  };

  return (
    <section id="faqsTwo">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mb-10 text-center">
          {highlight && (
            <p className="text-base font-semibold uppercase tracking-wide text-primary-600 dark:text-primary-200">
              {highlight}
            </p>
          )}
          {title && (
            <h2 className="font-heading mb-4 text-3xl font-bold leading-none tracking-tight sm:text-5xl md:mx-auto">
              {title}
            </h2>
          )}
          {subtitle && <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-slate-400">{subtitle}</p>}
        </div>
        <>
          {items.map(({ title, description }, index) => (
            <div
              key={`accordion-${index}`}
              onClick={() => handleSetIndex(index)}
              className="mx-auto mb-2 max-w-3xl select-none rounded-md border border-gray-300 bg-transparent px-5 py-4 text-base text-gray-700 shadow-md"
            >
              <div className="py-1 px-3">
                <div
                  className="align-center flex justify-between"
                  id={`accordion__heading-${index}`}
                  aria-disabled="false"
                  aria-expanded="false"
                  aria-controls={`accordion__panel-${index}`}
                  role="button"
                >
                  <h2 className="text-lg font-medium leading-6 text-gray-900 dark:text-slate-300">{title}</h2>
                  <>
                    {activeIndex === index ? (
                      <IconChevronUp className="h-6 w-6 text-primary-600 dark:text-slate-200" />
                    ) : (
                      <IconChevronDown className="h-6 w-6 text-primary-600 dark:text-slate-200" />
                    )}
                  </>
                </div>
                {activeIndex === index && (
                  <div
                    className="mt-3 select-none"
                    aria-labelledby={`accordion__heading-${index}`}
                    id={`accordion__panel-${index}`}
                  >
                    <p className="mt-2 text-gray-600 dark:text-slate-400">{description}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </>
      </div>
    </section>
  );
};

export default FAQs2;
