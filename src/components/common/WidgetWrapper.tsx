import { twMerge } from 'tailwind-merge';
import { WrapperTagProps } from '~/shared/types';
import Background from './Background';

const WidgetWrapper = ({ children, id, hasBackground, containerClass }: WrapperTagProps) => (
  <section className="relative not-prose scroll-mt-[72px]" id={id}>
    <Background hasBackground={hasBackground} />
    <div
      className={twMerge(
        'relative mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-16 lg:py-20 text-default',
        containerClass,
      )}
    >
      {children}
    </div>
  </section>
);

export default WidgetWrapper;
