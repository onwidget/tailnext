import Image from 'next/image';
import { IconCheck } from '@tabler/icons-react';

import { ContentProps } from '~/shared/types';
import HeaderWidget from '../common/HeaderWidget';

const Content = ({ header, content, items, image, isReversed, isAfterContent }: ContentProps) => (
  <section className="bg-primary-50 dark:bg-slate-800">
    <div
      className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${isAfterContent ? 'pt-1 pb-16 md:pb-20' : 'py-16 md:py-20'}`}
    >
      {header && <HeaderWidget header={header} titleClassname="text-3xl sm:text-5xl" />}
      <div className="mx-auto max-w-7xl">
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
                      {title && (
                        <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">{title}</h3>
                      )}
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
    </div>
  </section>
);

export default Content;
