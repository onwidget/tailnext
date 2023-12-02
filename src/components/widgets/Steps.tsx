import Image from 'next/image';
import { IconCheck } from '@tabler/icons-react';
import { StepsProps } from '~/shared/types';
import WidgetWrapper from '../common/WidgetWrapper';
import Timeline from '../common/Timeline';
import Headline from '../common/Headline';

const Steps = ({ header, items, image, id, isReversed, isDark = false }: StepsProps) => (
  <WidgetWrapper id={id ? id : ''} isDark={isDark} containerClass="max-w-6xl ">
    <div
      className={`flex flex-col gap-8 md:gap-12 ${isReversed ? 'md:flex-row-reverse' : ''} ${
        image ? 'md:flex-row' : ''
      }`}
    >
      <div className={`md:py-4 md:pr-16 ${image ? 'md:basis-1/2' : 'max-w-4xl mx-auto md:self-center'}`}>
        {header && (
          <Headline
            header={header}
            containerClass={image ? 'text-left rtl:text-right' : ''}
            titleClass="text-3xl sm:text-4xl"
            subtitleClass={image ? 'text-left rtl:text-right' : ''}
          />
        )}
        <Timeline items={items} defaultIcon={IconCheck} iconClass="text-primary border-primary-900" />
      </div>
      <div className="relative md:basis-1/2">
        {image && (
          <Image
            src={image.src}
            width={400}
            height={768}
            alt={image.alt}
            placeholder="blur"
            className="inset-0 object-cover object-top w-full rounded-md shadow-lg md:absolute md:h-full bg-gray-400 dark:bg-slate-700"
            quality={50}
          />
        )}
      </div>
    </div>
  </WidgetWrapper>
);

export default Steps;
