import Image from 'next/image';
import { TestimonialsProps } from '~/shared/types';
import Headline from '../common/Headline';
import WidgetWrapper from '../common/WidgetWrapper';
import CTA from '../common/CTA';
import DividerLine from '../common/DividerLine';

const Testimonials = ({ header, testimonials, callToAction, id, isDark = false }: TestimonialsProps) => (
  <WidgetWrapper id={id ? id : ''} isDark={isDark} containerClass="">
    {header && <Headline header={header} titleClass="text-2xl sm:text-3xl" />}
    <div className="flex items-stretch justify-center">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {testimonials.map(({ name, job, testimonial, image, href }, index) => (
          <>
            {testimonial && (
              <div
                key={`item-testimonial-${index}`}
                className="rounded-lg backdrop-blur border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900 shadow max-w-sm"
              >
                <div className="card h-full p-6 border-b-[3px] border-transparent hover:border-primary-600 hover:shadow-lg hover:transition hover:duration-100">
                  <a href={href} target="_blank" rel="noopener noreferrer" className="w-full text-center">
                    {((image && name) || (name && job)) && (
                      <>
                        <div className="mb-4 flex items-center">
                          {image && (
                            <Image
                              src={image.src}
                              width={48}
                              height={48}
                              alt={image.alt}
                              className="mr-4 h-10 w-10 rounded-full object-cover shadow-lg bg-gray-500 dark:bg-slate-700"
                            />
                          )}

                          <div className="flex flex-col justify-center text-left ">
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
                  </a>
                </div>
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
