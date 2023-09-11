import Image from 'next/image';
import { IconCheck } from '@tabler/icons-react';

import { ContentProps } from '~/shared/types';
import Headline from '../common/Headline';
import WidgetWrapper from '../common/WidgetWrapper';

const Content = ({ header, content, items, image, isReversed, isAfterContent, id, isDark = false }: ContentProps) => (
  <WidgetWrapper
    id={id ? id : ''}
    isDark={isDark}
    containerClass={`${isAfterContent ? 'py-0 md:py-0 lg:py-0 pb-12 md:pb-16 lg:pb-20' : ''}`}
  >
    {header && <Headline header={header} titleClass="text-3xl sm:text-5xl" />}
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
                className="mx-auto w-full rounded-lg shadow-lg bg-gray-400 dark:bg-slate-700"
                src={image.src}
                width={828}
                height={828}
                alt={image.alt}
                sizes="(max-width: 768px) 100vw, 432px"
                placeholder="blur"
                quality={50}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  </WidgetWrapper>
);

export default Content;
