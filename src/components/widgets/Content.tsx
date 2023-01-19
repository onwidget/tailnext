import { FC, Fragment } from 'react';
import Image from 'next/image';
import { IconCheck } from '@tabler/icons';

import { ContentProps } from '~/shared/types';

const Content: FC<ContentProps> = ({
  title,
  subtitle,
  highlight,
  content,
  items,
  image,
  isReversed,
  isAfterContent,
}) => (
  <section className={`bg-primary-50 py-16 dark:bg-slate-800 md:py-20 ${isAfterContent ? 'pt-0 md:pt-0' : ''}`}>
    <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
      {(title || subtitle || highlight) && (
        <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
          {highlight && (
            <p className="text-base font-semibold uppercase tracking-wide text-primary-600 dark:text-primary-200">
              {highlight}
            </p>
          )}
          {title && (
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">{title}</h2>
          )}
          {subtitle && <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-slate-400">{subtitle}</p>}
        </div>
      )}
    </div>
    <div className="mx-auto max-w-6xl p-4 md:px-8">
      <div className={`md:flex ${isReversed ? 'md:flex-row-reverse' : ''} md:gap-16`}>
        <div className="self-center md:basis-1/2">
          {content && <div className="mb-12 text-lg text-gray-600 dark:text-slate-400">{content}</div>}
          {items && (
            <div className="space-y-8">
              {items.map(({ title, description }, index) => (
                <div key={`item-content-${index}`} className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary-900 text-gray-50">
                      <IconCheck className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="ml-4">
                    {title && <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">{title}</h3>}
                    {description && <p className="mt-2 text-gray-600 dark:text-slate-400">{description}</p>}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div aria-hidden="true" className="mt-10 md:mt-0 md:basis-1/2">
          {image && (
            <div className="relative m-auto max-w-4xl">
              <Image
                src={image.src}
                width={500}
                height={500}
                alt={image.alt}
                sizes="(max-width: 768px) 100vw, 432px"
                className="mx-auto w-full rounded-lg bg-gray-500 shadow-lg"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  </section>
);

export default Content;
