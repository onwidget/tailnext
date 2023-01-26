import Image from 'next/image';

import { IconArrowDown, IconCheck } from '@tabler/icons-react';
import { stepsData } from '~/shared/data';

const Steps = () => {
  const { title, items, image } = stepsData;

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="row-gap-10 grid gap-6 md:grid-cols-2">
        <div className="mb-4 md:mb-0 md:py-4 md:pr-16">
          {title && <h2 className="font-heading mb-8 text-3xl font-bold lg:text-4xl">{title}</h2>}
          {items &&
            items.length &&
            items.map(({ title, description, icon: Icon }, index) => (
              <div key={`item-steps-${index}`} className="flex">
                <div className="mr-4 flex flex-col items-center">
                  <div>
                    {index !== items.length - 1 ? (
                      <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary-900">
                        {Icon ? (
                          <Icon className="h-6 w-6 text-primary-800 dark:text-slate-200" />
                        ) : (
                          <IconArrowDown className="h-6 w-6 text-primary-800 dark:text-slate-200" />
                        )}
                      </div>
                    ) : (
                      <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary-900 bg-primary-900">
                        {Icon ? (
                          <Icon className="h-6 w-6 text-white dark:text-slate-200" />
                        ) : (
                          <IconCheck className="h-6 w-6 text-white dark:text-slate-200" />
                        )}
                      </div>
                    )}
                  </div>
                  {index !== items.length - 1 && <div className="h-full w-px bg-gray-300 dark:bg-slate-500"></div>}
                </div>
                <div className={`pt-1 ${index !== items.length - 1 ? 'pb-8' : ''}`}>
                  {title && <p className="mb-2 text-xl font-bold text-gray-900 dark:text-slate-300">{title}</p>}
                  {description && <p className="text-gray-600 dark:text-slate-400">{description}</p>}
                </div>
              </div>
            ))}
        </div>
        <div className="relative">
          {image && (
            <Image
              src={image.src}
              width={400}
              height={768}
              alt={image.alt}
              className="inset-0 w-full rounded-md bg-gray-500 object-cover object-top shadow-lg dark:bg-slate-700 md:absolute md:h-full"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Steps;
