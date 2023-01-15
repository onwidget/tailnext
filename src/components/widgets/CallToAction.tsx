import { callToActionData } from '~/shared/data';

const CallToAction = () => {
  const { title, subtitle, callToAction } = callToActionData;

  return (
    <section className="relative" id="callToActionOne">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="mx-auto max-w-3xl rounded-md p-6 text-center shadow-xl dark:border dark:border-slate-600 dark:shadow-none">
            {title && (
              <h2 className="leading-tighter font-heading mb-4 text-4xl font-bold tracking-tighter md:text-4xl">
                {title}
              </h2>
            )}
            {subtitle && <p className="text-xl text-gray-600 dark:text-slate-400">{subtitle}</p>}
            {typeof callToAction === 'string' ? (
              <>{callToAction}</>
            ) : (
              callToAction &&
              callToAction.text &&
              callToAction.href && (
                <div className="mx-auto mt-6 max-w-xs">
                  <a
                    className="btn btn-primary w-full sm:w-auto"
                    href={callToAction.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {callToAction.icon && <callToAction.icon className="mr-1 -ml-1.5 h-5 w-5" />} {callToAction.text}
                  </a>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
