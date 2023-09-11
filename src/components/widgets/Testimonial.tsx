import Image from 'next/image';
import { TestimonialProps } from '~/shared/types';
import Headline from '../common/Headline';
import WidgetWrapper from '../common/WidgetWrapper';

const Testimonial = ({ header, testimonials, id, isDark = false }: TestimonialProps) => (
  <WidgetWrapper id={id ? id : ''} isDark={isDark} containerClass="">
    {header && <Headline header={header} titleClass="text-2xl sm:text-3xl" />}
    <div className="flex items-stretch justify-center">
      <div className="grid grid-cols-3 gap-3 dark:text-white sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {testimonials.map(({ name, occupation, comment, image, icon: Icon, href }, index) => (
          <div
            key={`item-testimonial-${index}`}
            className="col-span-3 flex sm:col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1"
          >
            <div className="flex-flow card flex border-b-[3px] border-transparent text-center hover:border-primary-600 hover:shadow-lg hover:transition hover:duration-100">
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                key={`item-testimonial-${index}`}
                className="card-body"
              >
                <div className="mb-4 flex">
                  {image && (
                    <Image
                      src={image.src}
                      width={48}
                      height={48}
                      alt={image.alt}
                      className="mr-4 h-12 w-12 rounded-full object-cover shadow-lg bg-gray-500 dark:bg-slate-700"
                    />
                  )}
                  <div className="text-left">
                    <h3 className="font-semibold">{name}</h3>
                    <span className="">{occupation}</span>
                  </div>
                </div>
                {comment && <p className="m-b-30 font-light dark:text-slate-400">{`"${comment.slice(0, 150)}..."`}</p>}
                {href && Icon && <Icon className="mx-auto mt-4 h-6 w-6 text-primary-600 dark:text-slate-200" />}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </WidgetWrapper>
);

export default Testimonial;
