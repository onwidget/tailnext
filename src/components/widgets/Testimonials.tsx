import Link from 'next/link';
import Image from 'next/image';
import { Testimonial, TestimonialsProps } from '~/shared/types';
import Headline from '../common/Headline';
import WidgetWrapper from '../common/WidgetWrapper';
import CTA from '../common/CTA';
import DividerLine from '../common/DividerLine';
import { twMerge } from 'tailwind-merge';

const TestimonialItem = ({ name, job, testimonial, image, isTestimonialUp, containerClass }: Testimonial) => (
  <div
    className={twMerge(
      `flex justify-between items-stretch select-none ${isTestimonialUp ? 'flex-col-reverse' : 'flex-col'}`,
      containerClass,
    )}
  >
    {((image && name) || (name && job)) && (
      <>
        <div className="flex items-center">
          {image && (
            <Image
              src={image.src}
              width={48}
              height={48}
              alt={image.alt}
              className="mr-4 h-10 w-10 rounded-full object-cover shadow-lg bg-gray-500 dark:bg-slate-700"
            />
          )}

          <div className="flex flex-col justify-center text-left">
            {name && <h3 className="font-semibold">{name}</h3>}
            {job && <span className="text-sm dark:text-slate-400">{job}</span>}
          </div>
        </div>
        <DividerLine />
      </>
    )}

    {testimonial && (
      <blockquote className="flex-auto">
        <p className="m-b-30 font-light dark:text-slate-400">{`" ${testimonial.slice(0, 150)}... "`}</p>
      </blockquote>
    )}
  </div>
);

const Testimonials = ({
  header,
  testimonials,
  callToAction,
  isTestimonialUp,
  id,
  isDark = false,
}: TestimonialsProps) => (
  <WidgetWrapper id={id ? id : ''} isDark={isDark} containerClass="">
    {header && <Headline header={header} titleClass="text-2xl sm:text-3xl" />}
    <div className="flex items-stretch justify-center">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {testimonials.map(({ name, job, testimonial, image, href }, index) => (
          <>
            {testimonial && (
              <div
                key={`item-testimonial-${index}`}
                className={`card max-w-sm h-full ${
                  !callToAction && href
                    ? 'hover:border-primary-600 hover:shadow-lg hover:transition hover:duration-100'
                    : ''
                }`}
              >
                {!callToAction && href ? (
                  <Link href={href} target="_blank" rel="noopener noreferrer">
                    <TestimonialItem
                      name={name}
                      job={job}
                      testimonial={testimonial}
                      isTestimonialUp={isTestimonialUp}
                      image={image}
                      containerClass="flex w-full h-full"
                    />
                  </Link>
                ) : (
                  <TestimonialItem
                    name={name}
                    job={job}
                    testimonial={testimonial}
                    isTestimonialUp={isTestimonialUp}
                    image={image}
                    containerClass="flex w-full h-full"
                  />
                )}
              </div>
            )}
          </>
        ))}
      </div>
    </div>
    {callToAction && (
      <CTA
        callToAction={callToAction}
        containerClass="flex justify-center mx-auto w-fit mt-8 md:mt-12"
        linkClass="btn"
      />
    )}
  </WidgetWrapper>
);

export default Testimonials;
