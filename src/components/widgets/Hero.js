import { IconDownload } from '@tabler/icons';
import Image from 'next/image';

import heroImg from '~/assets/images/hero.jpg';

const Hero = (props) => (
  <section>
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="py-12 md:py-20">
        <div className="mx-auto max-w-4xl pb-10 text-center md:pb-16">
          <h1 className="leading-tighter font-heading mb-6 text-5xl font-bold tracking-tighter md:text-6xl">
            Free template for <span className="hidden md:inline">starts a website using</span> <span>Next.js</span> +{' '}
            <span className="sm:whitespace-nowrap">Tailwind CSS</span>
          </h1>
          <div className="mx-auto max-w-3xl">
            <p className="mb-6 text-xl font-normal text-gray-600 dark:text-slate-400">
              <span className="hidden md:inline">
                <span className="font-semibold underline decoration-primary-600 decoration-wavy decoration-1 underline-offset-2">
                  TailNext
                </span>{' '}
                is a production ready template to start your new website using <em>Next.js</em> + <em>Tailwind CSS</em>.
              </span>{' '}
              It has been designed following Best Practices, SEO, Accessibility, Dark Mode, great Page Speed, image
              optimization.
            </p>
            <div className="flex max-w-none flex-col flex-nowrap gap-4 px-4 sm:flex-row sm:justify-center">
              <div className="flex w-full sm:w-auto">
                <a
                  className="btn btn-primary w-full sm:mb-0"
                  href="https://github.com/onwidget/astrowind"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconDownload className="mr-1 -ml-1.5 h-5 w-5" /> Get template
                </a>
              </div>
              <div className="flex w-full sm:w-auto">
                <a className="btn w-full" href="#features">
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="relative m-auto max-w-5xl">
            <Image
              src={heroImg}
              alt="Hero TailNext"
              className="mx-auto h-auto w-full rounded-md bg-gray-400 dark:bg-slate-700"
              placeholder="blur"
              loading="eager"
              priority
              sizes="(max-width: 64rem) 100w, 100v"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
