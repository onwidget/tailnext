import { CallToActionProps, CallToActionType } from '~/shared/types';
import CTA from '../common/CTA';
import WidgetWrapper from '../common/WidgetWrapper';

const CallToAction = ({ title, subtitle, callToAction, id, hasBackground = false }: CallToActionProps) => {
  const { text, href } = callToAction as CallToActionType;

  return (
    <WidgetWrapper id={id ? id : ''} hasBackground={hasBackground} containerClass="">
      <div className="card mx-auto max-w-3xl p-6 text-center">
        {title && (
          <h2 className="leading-tighter font-heading mb-4 text-4xl font-bold tracking-tighter md:text-4xl">{title}</h2>
        )}
        {subtitle && <p className="text-xl text-gray-600 dark:text-slate-400">{subtitle}</p>}
        {text && href && (
          <CTA
            callToAction={callToAction as CallToActionType}
            containerClass="mt-6 sm:mx-auto sm:w-fit"
            linkClass="btn btn-primary"
          />
        )}
      </div>
    </WidgetWrapper>
  );
};

export default CallToAction;
