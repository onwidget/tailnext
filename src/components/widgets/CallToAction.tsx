import { IconChevronRight, IconMail } from '@tabler/icons';
import { ReactElement } from 'react';

interface CallToAction {
  text: string;
  href: string;
  icon?: string | ReactElement;
}

interface SmallForm {
  placeholder: string;
  icon?: string | ReactElement;
  callToAction: CallToAction;
}

interface Item {
  title: string;
  description: string;
  href?: string;
  form?: SmallForm;
}

export interface CallToActionProps {
  title: string;
  subtitle: string;
  items: Array<Item>;
}

const callToActionOne: CallToActionProps = {
  title: "Join us",
  subtitle: "Fusce porttitor, arcu nec rhoncus pulvinar, massa lorem volutpat ante, id scelerisque dui nibh at urna.",
  items: [
    {
      title: 'Get template',
      description: 'Aliquam sodales est lectus, quis.',
      href: 'https://github.com/onwidget/tailnext',
    },
    {
      title: 'Learn more',
      description: 'Class aptent taciti sociosqu ad litora torquent per conubia.',
      href: '/',
    },
    {
      title: 'Subscribe',
      description: 'Morbi orci nunc, euismod ac dui id, convallis.',
      form: {
        placeholder: "Enter your email address",
        icon: <IconMail className="h-6 w-6 text-primary-600 dark:text-gray-400" />,
        callToAction: {
          text: "Subscribe",
          href: "https://github.com/onwidget/tailnext"
        },
      }
    },
  ]
};

const Card = ({ title, description, href, form }: Item) => (
  <div className="mb-6 rounded-md border-gray-400 bg-primary-50 px-5 py-4 text-base font-medium text-gray-700 shadow-md dark:bg-slate-900">
    <div className="flex items-center justify-between">
      <div className="w-full">
        <h3 className="mb-3 text-xl font-bold dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-slate-400">{description}</p>
      </div>
      {href && (
        <div className="flex h-10 w-10 items-center justify-center">
          <IconChevronRight className="h-6 w-6 text-primary-600 dark:text-slate-200" />
        </div>
      )}
    </div>
    {form && (
      <div className="mt-2">
      <form className="rounded-md border border-gray-400 bg-white shadow-md">
        <div className="flex items-center">
          <span className="px-2 py-2 dark:bg-[#3b3b3b] rounded-tl rounded-bl border-r-[1px] border-gray-400">
            <IconMail className="h-6 w-6 text-primary-600 dark:text-gray-400" />
          </span>
          <input
            type="email"
            name="EMAIL"
            placeholder="Enter your email address"
            className="w-full py-2 pl-2 pr-4 dark:text-gray-300"
          />
          <button
            name="subscribe"
            type="submit"
            className="border-l-[1px] border-gray-400 px-4 py-2 bg-primary-600 text-white rounded-tr rounded-br"
          >
            {form.callToAction.text}
          </button>
        </div>
      </form>
    </div>
    )}
  </div>
);

const CallToAction = () => {
  const { title, subtitle, items } = callToActionOne;

  return (
    <section className="bg-primary-900 text-gray-200">
      <div className="mx-auto max-w-6xl px-4 py-16 lg:px-8 lg:pt-20">

        <div className="row-gap-10 grid gap-6 md:grid-cols-2">
          <div className="mx-auto md:my-auto md:ml-0 md:pb-6 md:pr-24">
            <h2 className="mb-3 flex justify-center text-6xl font-bold md:justify-start">
              {title}
            </h2>
            <p className="text-center text-xl text-gray-200 dark:text-slate-300 md:text-left">
              {subtitle}
            </p>
          </div>
          <div className="relative -mb-6">
            {items.map((({ title, description, href, form }, index) => (
              <div key={`call-to-action-item-${index}`}>
                {href ? (
                  <a
                    href={href}
                    className="w-full sm:mb-0"
                    target="_blank"
                    rel="noopener noreferrer"
                    key={`item-cta-${index}`}
                  >
                    <Card title={title} description={description} href={href} form={form} />
                  </a>
                ) : (
                  <Card title={title} description={description} href={href} form={form} />
                )}
              </div>
            )))}
          </div>
        </div>
      </div>
    </section>
  )
};

export default CallToAction;
