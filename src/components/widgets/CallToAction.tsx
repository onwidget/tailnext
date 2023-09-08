import { CallToActionProps, CallToAction } from '~/shared/types';
import CTA from '../common/CTA';
import WidgetWrapper from '../common/WidgetWrapper';

const CallToAction = ({ title, subtitle, callToAction, id, isDark = false }: CallToActionProps) => {
  const { text, href } = callToAction as CallToAction;

  return (
    <WidgetWrapper id={id ? id : ''} isDark={isDark} containerClass="">
      <div className="card mx-auto max-w-3xl p-6 text-center">
        {title && (
          <h2 className="leading-tighter font-heading mb-4 text-4xl font-bold tracking-tighter md:text-4xl">{title}</h2>
        )}
        {subtitle && <p className="text-xl text-gray-600 dark:text-slate-400">{subtitle}</p>}
        {text && href && (
          <div className="mt-6 sm:mx-auto sm:w-fit">
            <CTA callToAction={callToAction as CallToAction} linkClass="btn btn-primary" />
          </div>
        )}
      </div>
    </WidgetWrapper>
  );
};

export default CallToAction;
