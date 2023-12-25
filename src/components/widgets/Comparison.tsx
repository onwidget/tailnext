import { IconCheck, IconMinus } from '@tabler/icons-react';
import { CallToActionType, ComparisonProps } from '~/shared/types';
import CTA from '../common/CTA';
import Headline from '../common/Headline';
import WidgetWrapper from '../common/WidgetWrapper';

const Comparison = ({ header, columns, id, hasBackground = false }: ComparisonProps) => (
  <WidgetWrapper id={id ? id : ''} hasBackground={hasBackground} containerClass="">
    {header && <Headline header={header} titleClass="text-2xl sm:text-3xl" />}
    <div className="relative ml-[-1em] flex overflow-x-auto md:pb-12">
      {columns.map(({ title, items, callToAction }, index) => (
        <div
          key={`column-content-${index}`}
          className={`relative mx-auto w-full min-w-fit max-w-3xl select-none border-r border-solid border-gray-300 px-4 py-4 first-of-type:sticky first-of-type:left-0 first-of-type:z-10 first-of-type:w-auto ${
            hasBackground
              ? 'first-of-type:bg-primary-50 first-of-type:dark:bg-slate-800'
              : 'first-of-type:bg-white first-of-type:dark:bg-slate-900'
          } first-of-type:pl-6 last-of-type:border-none dark:border-slate-500  md:px-5 md:first-of-type:w-full md:first-of-type:pl-5`}
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
          {index !== 0 && callToAction && (
            <CTA callToAction={callToAction as CallToActionType} linkClass="btn btn-primary mt-8" />
          )}
        </div>
      ))}
    </div>
  </WidgetWrapper>
);

export default Comparison;
