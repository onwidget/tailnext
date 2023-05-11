import { IconCheck, IconMinus } from '@tabler/icons-react';
import { CallToAction, ComparisonProps } from '~/shared/types';
import CTA from '../common/CTA';
import HeaderWidget from '../common/HeaderWidget';

const Comparison = ({ header, columns }: ComparisonProps) => (
  <section id="comparison">
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      {header && <HeaderWidget header={header} titleClassname="text-2xl sm:text-3xl" />}
      <div className="relative ml-[-1em] flex overflow-x-auto md:pb-12">
        {columns.map(({ title, items, callToAction }, index) => (
          <div
            key={`column-content-${index}`}
            className="relative mx-auto w-full min-w-fit max-w-3xl select-none border-r border-solid border-gray-300 px-4 py-4 first-of-type:sticky first-of-type:left-0 first-of-type:z-10 first-of-type:w-auto first-of-type:bg-white first-of-type:pl-6 last-of-type:border-none dark:border-slate-500 first-of-type:dark:bg-slate-900 md:px-5 md:first-of-type:w-full md:first-of-type:pl-5"
          >
            <h3
              className={`mb-4 border-b border-solid border-gray-300 pb-4 text-lg font-medium uppercase leading-6 text-gray-900 dark:border-slate-500 dark:text-white ${
                index === 0 ? 'text-left' : 'text-center'
              }`}
            >
              {title}
            </h3>
            {items &&
              items.map(({ title: title2 }, index2) => (
                <div
                  key={`column-content-${index2}`}
                  className={`leading-7 text-gray-600 dark:text-slate-400 ${index === 0 ? 'text-left' : 'text-center'}`}
                >
                  {(title2 as boolean) === true ? (
                    <IconCheck className="mt-2 w-full" />
                  ) : (title2 as boolean) === false ? (
                    <IconMinus className="mt-2 w-full" />
                  ) : index !== 0 ? (
                    <p className="mt-2">{title2}</p>
                  ) : (
                    <h4 className="mt-2 text-lg">{title2}</h4>
                  )}
                </div>
              ))}
            {index !== 0 && callToAction && <CTA data={callToAction as CallToAction} class="mt-8" />}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Comparison;
