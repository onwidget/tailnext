import Image from 'next/image';
import { heroData } from '~/shared/data';

const Hero2 = () => {
  const { title, subtitle, callToAction, callToAction2, image } = heroData;

  return (
    <section
      className="mt-[-72px] bg-gradient-to-b from-white via-purple-50 to-sky-100 dark:bg-none md:bg-gradient-to-r"
      id="heroTwo"
    >
      <div className="mx-auto max-w-6xl px-4 pt-[72px] sm:px-6 md:flex md:h-screen 2xl:h-auto">
        <div className="block py-12 text-center md:flex md:py-12 md:text-left lg:py-16">
          <div className="mx-auto flex max-w-5xl basis-[56%] items-center">
            <div className="pb-12 pr-8 md:py-0 md:pb-0 lg:pr-16">
              {title && (
                <h1 className="leading-tighter font-heading mb-4 px-4 text-5xl font-bold tracking-tighter md:px-0 md:text-[3.48rem]">
                  {title}
                </h1>
              )}
              <div className="mx-auto max-w-3xl">
                {subtitle && <p className="mb-8 text-xl font-normal text-gray-600 dark:text-slate-400">{subtitle}</p>}
                <div className="m-auto flex max-w-xs flex-col flex-nowrap justify-center gap-4 sm:max-w-md sm:flex-row md:m-0 md:justify-start">
                  {callToAction && callToAction.text && callToAction.href && (
                    <div className="flex w-full sm:w-auto">
                      <a
                        className="btn btn-primary w-full sm:mb-0"
                        href={callToAction.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {callToAction.icon && <callToAction.icon className="mr-1 -ml-1.5 h-5 w-5" />}{' '}
                        {callToAction.text}
                      </a>
                    </div>
                  )}
                  {callToAction2 && callToAction2.text && callToAction2.href && (
                    <div className="flex w-full sm:w-auto">
                      <a className="btn w-full" href={callToAction2.href}>
                        {callToAction2.icon && <callToAction2.icon className="mr-1 -ml-1.5 h-5 w-5" />}{' '}
                        {callToAction2.text}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="block flex-1 items-center md:flex">
            <div className="relative m-auto max-w-4xl">
              {image && (
                <div className="relative m-auto max-w-5xl">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    className="mx-auto h-full w-full rounded-md bg-gray-400 object-cover drop-shadow-2xl dark:bg-slate-700 md:h-[65vh]"
                    placeholder="blur"
                    loading="eager"
                    priority
                    sizes="(max-width: 64rem) 100w, 100v"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero2;
