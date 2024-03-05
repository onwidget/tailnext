import Image from 'next/image';
import { HeroProps } from '~/shared/types';
import WidgetWrapper from '../common/WidgetWrapper';

const Hero2 = ({ title, subtitle, subtitle1, subtitle2, image, backgroundKey }: HeroProps) => {
  const id = 'heroTwo';
  return (
    <WidgetWrapper id={id ? id : ''} hasBackground={false} backgroundKey={backgroundKey} containerClass={''}>
      <section className="mt-[-50px] bg-zinc-50 bg-opacity-90 dark:bg-slate-800 dark:bg-opacity-75" id="heroTwo">
        <div className="mx-auto max-w-7xl px-4  pt-[72px] sm:px-6 md:flex md:h-screen 2xl:h-auto">
          <div className="block py-12 text-center md:flex md:py-12 md:text-left lg:py-16">
            <div className="mx-auto flex max-w-5xl basis-[56%] items-center">
              <div className="max-w-3xl pb-12 pr-0 md:py-0 md:pr-8 md:pb-0 lg:pr-16">
                {title && (
                  <h1 className="leading-tighter font-heading mb-4 px-4 text-5xl font-bold tracking-tighter md:px-0 md:text-[3.48rem]">
                    {title}
                  </h1>
                )}
                <div className="mx-auto max-w-3xl">
                  {subtitle && <p className="mb-8 text-xl font-normal text-gray-600 dark:text-slate-400">{subtitle}</p>}
                  {subtitle1 && (
                    <p className="mb-8 text-xl font-normal text-gray-600 dark:text-slate-400">{subtitle1}</p>
                  )}
                  {subtitle2 && (
                    <p className="mb-8 text-xl font-normal text-gray-600 dark:text-slate-400">{subtitle2}</p>
                  )}
                </div>
              </div>
            </div>
            <div className="block flex-1 items-center md:flex">
              <div className="relative m-auto h-full max-w-4xl object-cover">
                {image && (
                  <Image
                    className="mx-auto h-full w-auto rounded-md bg-gray-400 object-cover drop-shadow-2xl dark:bg-slate-700"
                    src={image.src}
                    alt={image.alt}
                    width={540}
                    height={405}
                    sizes="(min-width: 1920px) 749px, (min-width: 1540px) 43.89vw, (min-width: 1360px) 542px, (min-width: 780px) calc(39.29vw + 16px), calc(96.52vw - 22px)"
                    loading="eager"
                    placeholder="blur"
                    priority
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </WidgetWrapper>
  );
};

export default Hero2;
