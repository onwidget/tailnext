import { CallToActionProps, CallToAction } from '~/shared/types';
import CTA from '../common/CTA';

const CallToAction = (props: { data: CallToActionProps }) => {
  const { title, subtitle, callToAction } = props.data;
  const { text, href } = callToAction as CallToAction;

  return (
    <section className="bg-primary-50 dark:bg-slate-800" id="callToActionOne">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="pt-4 pb-12 md:pb-20 md:pt-12">
          <div className="card mx-auto max-w-3xl p-6 text-center">
            {title && (
              <h2 className="leading-tighter font-heading mb-4 text-4xl font-bold tracking-tighter md:text-4xl">
                {title}
              </h2>
            )}
            {subtitle && <p className="text-xl text-gray-600 dark:text-slate-400">{subtitle}</p>}
            {text && href && (
              <div className="mt-6 sm:mx-auto sm:w-fit">
                <CTA data={callToAction as CallToAction} />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
