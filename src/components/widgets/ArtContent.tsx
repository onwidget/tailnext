import Image from 'next/image';
import { IconCheck } from '@tabler/icons-react';

import { ContentProps } from '~/shared/types';
import Headline from '../common/Headline';
import WidgetWrapper from '../common/WidgetWrapper';

const ArtContent = ({
  header,
  images,
  id,
  hasBackground = false,
}: ContentProps) => (
  <WidgetWrapper
    id={id ? id : ''}
    hasBackground={hasBackground}
    containerClass={""}
  >
    {header && <Headline header={header} titleClass="text-4xl md:text-5xl" />}
    <div className="mx-auto max-w-7xl">
      <div className={`md:flex md:gap-16`}>
      {images && images.map((image, index) => {
            return (
        <div key={index} aria-hidden="true" className="mt-10 md:mt-0 md:basis-1/2">
        <div className="relative m-auto max-w-4xl">      
              <Image
                className="mx-auto w-full rounded-lg shadow-lg bg-gray-400 dark:bg-slate-700"
                src={image.src}
                width={828}
                height={828}
                alt={image.alt}
                sizes="(max-width: 350px) 75vw, 432px"
                placeholder="blur"
                quality={50}
              />
            </div>
            </div>
            )
            })}
        </div>
      </div>
  </WidgetWrapper>
);

export default ArtContent;
