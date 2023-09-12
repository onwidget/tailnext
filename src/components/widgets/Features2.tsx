import { Fragment } from 'react';
import { FeaturesProps } from '~/shared/types';
import Headline from '../common/Headline';
import Link from 'next/link';

const Features2 = ({ header, items }: FeaturesProps) => (
  <section className="relative py-16 lg:py-20" id="features2">
    <div className="pointer-events-none absolute inset-0 mb-36 bg-primary-50 dark:bg-slate-800"></div>
    <div className="relative mx-auto -mb-12 max-w-6xl px-4 sm:px-6">
      {header && <Headline header={header} titleClass="text-4xl md:text-5xl" />}
      <div
        className={`my-12 ${
          items.length > 2 ? 'grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'flex justify-center'
        } items-stretch gap-6`}
      >
        {items.map(({ title, description, icon: Icon, callToAction }, index) => (
          <Fragment key={`item-feature2-${index}`}>
            {callToAction ? (
              <Link href={callToAction.href} className="card relative flex flex-col min-w-[22em]">
                <div className="flex items-center">
                  {Icon && <Icon className="h-10 w-10" />}
                  <div className="ml-4 text-xl font-bold">{title}</div>
                </div>
                {description && <p className="text-md mt-4 text-gray-500 dark:text-gray-400">{description}</p>}
              </Link>
            ) : (
              <div className="card relative flex flex-col min-w-[22em]">
                <div className="flex items-center">
                  {Icon && <Icon className="h-10 w-10" />}
                  <div className="ml-4 text-xl font-bold">{title}</div>
                </div>
                {description && <p className="text-md mt-4 text-gray-500 dark:text-gray-400">{description}</p>}
              </div>
            )}
          </Fragment>
        ))}
      </div>
    </div>
  </section>
);

export default Features2;
