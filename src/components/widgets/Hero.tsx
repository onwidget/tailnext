import { ReactElement } from 'react';
import { IconDownload } from '@tabler/icons';
import Image from 'next/image';

import heroImg from '~/assets/images/hero.jpg';

interface CallToAction {
  text: string;
  href: string;
  icon?: string | ReactElement;
}

export interface HeroProps {
  title?: string | ReactElement;
  subtitle?: string | ReactElement;
  callToAction?: CallToAction;
  callToAction2?: CallToAction;
  image?: string | any; // TODO: find HTMLElementProps
}

const heroOne: HeroProps = {
  title: <>
          Free template for <span className="hidden md:inline">starts a website using</span> <span>Next.js</span> +{' '}
          <span className="sm:whitespace-nowrap">Tailwind CSS</span>
        </>,
  subtitle: <>
              <span className="hidden md:inline">
                <span className="font-semibold underline decoration-primary-600 decoration-wavy decoration-1 underline-offset-2">
                  TailNext
                </span>{' '}
                is a production ready template to start your new website using <em>Next.js</em> + <em>Tailwind CSS</em>.
              </span>{' '}
              It has been designed following Best Practices, SEO, Accessibility, Dark Mode, great Page Speed, image
              optimization.
            </>,
  callToAction: {
    text: "Get template",
    href: "https://github.com/onwidget/tailnext",
    icon: <IconDownload className="mr-1 -ml-1.5 h-5 w-5" />
  },
  callToAction2: {
    text: "Learn more",
    href: "/",
  },
  image: heroImg
}

const Hero = () => {
  const { title, subtitle, callToAction, callToAction2, image } = heroOne;

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="mx-auto max-w-4xl pb-10 text-center md:pb-16">
            {title && (
              <h1 className="leading-tighter font-heading mb-6 text-5xl font-bold tracking-tighter md:text-6xl">
                {title}
              </h1>
            )}
            <div className="mx-auto max-w-3xl">
              {subtitle && (
                <p className="mb-6 text-xl font-normal text-gray-600 dark:text-slate-400">
                  {subtitle}
                </p>
              )}
              <div className="flex max-w-none flex-col flex-nowrap gap-4 px-4 sm:flex-row sm:justify-center">
                {callToAction && callToAction.text && callToAction.href && (
                  <div className="flex w-full sm:w-auto">
                    <a
                      className="btn btn-primary w-full sm:mb-0"
                      href={callToAction.href}
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      {callToAction.icon && callToAction.icon} {callToAction.text}
                    </a>
                  </div>
                )}
                {(callToAction2 && callToAction2.text && callToAction2.href) && (
                  <div className="flex w-full sm:w-auto">
                    <a 
                      className="btn w-full"
                      href={callToAction2.href}
                    >
                      {callToAction2.icon && callToAction2.icon} {callToAction2.text}
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
          {image && (
            <div className="relative m-auto max-w-5xl">
              <Image
                src={image}
                alt="Hero TailNext"
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
