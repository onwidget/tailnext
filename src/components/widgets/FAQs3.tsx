'use client';

import { useState } from 'react';
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';
import { faqs3Data } from '~/shared/data';
import HeaderWidget from '../common/HeaderWidget';

const FAQs3 = () => {
  const { header, items, link } = faqs3Data;

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
    <section className="bg-primary-50 dark:bg-slate-800" id="faqsThree">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="flex items-stretch justify-center">
          <div className="grid w-full md:grid-cols-3 md:items-center md:gap-4">
            <div className="block h-full sm:flex sm:items-center sm:justify-between md:mt-8 md:block">
              {header && <HeaderWidget header={header} titleClassname="text-3xl sm:text-4xl" />}
              <div className="flex h-fit w-full justify-center uppercase sm:w-auto sm:justify-start">
                {link && (
                  <a href={link.href} className="btn btn-primary mb-8 sm:mb-0 ">
                    {link.label}
                  </a>
                )}
              </div>
            </div>
            <div className="mt-4 h-fit md:col-span-2 md:m-4 md:px-4">
              {items.map(({ title, description }, index) => (
                <div
                  key={`accordion-${index}`}
                  onClick={() => handleSetIndex(index)}
                  className="mx-auto max-w-3xl select-none bg-transparent px-1 pb-4 text-base text-gray-700 md:px-5"
                >
                  <div className="border-b border-solid border-slate-300 pt-1 pb-5 dark:border-slate-500">
                    <div
                      className="align-center flex justify-between"
                      id={`accordion__heading-${index}`}
                      aria-disabled="false"
                      aria-expanded="false"
                      aria-controls={`accordion__panel-${index}`}
                      role="button"
                    >
                      <h2 className="w-full pr-2 text-lg font-medium leading-6 text-gray-900 dark:text-slate-300">
                        {title}
                      </h2>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs3;
