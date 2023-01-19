import Image from 'next/image';
import { heroData } from '~/shared/data';

const Hero = () => {
  const { title, subtitle, callToAction, callToAction2, image } = heroData;

  return (
    <section id="heroOne">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="mx-auto max-w-4xl pb-10 text-center md:pb-16">
            {title && (
              <h1 className="leading-tighter font-heading mb-6 text-5xl font-bold tracking-tighter md:text-6xl">
                {title}
              </h1>
            )}
            <div className="mx-auto max-w-3xl">
              {subtitle && <p className="mb-6 text-xl font-normal text-gray-600 dark:text-slate-400">{subtitle}</p>}
              <div className="flex max-w-none flex-col flex-nowrap gap-4 px-4 sm:flex-row sm:justify-center">
                {callToAction && callToAction.text && callToAction.href && (
                  <div className="flex w-full sm:w-auto">
                    <a
                      className="btn btn-primary w-full sm:mb-0"
                      href={callToAction.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {callToAction.icon && <callToAction.icon className="mr-1 -ml-1.5 h-5 w-5" />} {callToAction.text}
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
          {image && (
            <div className="relative m-auto max-w-5xl">
              <Image
                src={image.src}
                alt={image.alt}
                className="mx-auto h-auto w-full rounded-md bg-gray-400 dark:bg-slate-700"
                placeholder="blur"
                loading="eager"
                priority
                sizes="(max-width: 64rem) 100w, 100v"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
