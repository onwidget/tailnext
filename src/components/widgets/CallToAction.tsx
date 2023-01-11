import { ReactElement } from 'react';
import { IconDownload } from '@tabler/icons';

interface CallToAction {
  text: string;
  href: string;
  icon?: string | ReactElement;
}

export interface CallToActionProps {
  title: string;
  subtitle: string;
  callToAction?: string | CallToAction;
}

const callToActionData: CallToActionProps = {
  title: "Next.js + Tailwind CSS",
  subtitle: "Aliquam sodales porttitor lacus ac tristique. Etiam posuere elit at leo feugiat sodales. Sed ac mauris quis sem tempor condimentum non at metus.",
  callToAction: {
    text: "Get template",
    href: "https://github.com/onwidget/tailnext",
    icon: <IconDownload className="mr-1 -ml-1.5 h-5 w-5" />
  },
};

const CallToAction = () => {
  const { title, subtitle, callToAction } = callToActionData;

  return (
    <section className="relative" id="callToActionOne">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="max-w-3xl mx-auto text-center p-6 rounded-md shadow-xl dark:shadow-none dark:border dark:border-slate-600">
            {title && (
              <h2 className="text-4xl md:text-4xl font-bold leading-tighter tracking-tighter mb-4 font-heading">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-xl text-gray-600 dark:text-slate-400">
                {subtitle}
              </p>
            )}
            {typeof callToAction === 'string' ? (
              <>{callToAction}</>
            ) : (
              callToAction &&
              callToAction.text &&
              callToAction.href && (
                <div className="mt-6 max-w-xs mx-auto">
                  <a 
                    className="btn btn-primary w-full sm:w-auto"
                    href={callToAction.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {callToAction.icon && callToAction.icon} {callToAction.text}
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