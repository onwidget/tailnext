import { HeroProps } from '~/shared/types';
import CTA from '../common/CTA';
import WidgetWrapper from '../common/WidgetWrapper';

const Hero = ({ title, subtitle, tagline, callToAction, callToAction2, image, backgroundKey }: HeroProps) => {
  const id = 'heroOne';
  return (
    <WidgetWrapper id={id ? id : ''} hasBackground={true} backgroundKey={backgroundKey} containerClass={''}>
      <section id="heroOne" className="bg-primary-50 bg-opacity-75 dark:bg-slate-800 dark:bg-opacity-75">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="py-12 md:py-20">
            <div className="mx-auto max-w-4xl pb-10 text-center md:pb-16">
              {tagline && (
                <p className="text-base font-semibold uppercase tracking-wide text-primary-800 dark:text-primary-600">
                  {tagline}
                </p>
              )}
              {title && (
                <h1 className="leading-tighter font-heading mb-6 text-4xl font-bold tracking-tighter md:text-5xl lg:text-6xl">
                  {title}
                </h1>
              )}
              <div className="mx-auto max-w-3xl">
                {subtitle && <p className="mb-6 text-xl font-normal text-gray-600 dark:text-slate-400">{subtitle}</p>}
                <div className="flex max-w-none flex-col flex-nowrap gap-4 px-4 sm:flex-row sm:justify-center">
                  {callToAction && <CTA callToAction={callToAction} linkClass="btn" />}
                  {callToAction2 && <CTA callToAction={callToAction2} linkClass="btn" />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </WidgetWrapper>
  );
};

export default Hero;
