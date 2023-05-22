import { IconChevronRight } from '@tabler/icons-react';
import { CallToActionProps, Item } from '~/shared/types';

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
            {form.icon && (
              <span className="rounded-bl rounded-tl border-r-[1px] border-gray-400 px-2 py-2 dark:bg-[#3b3b3b]">
                <form.icon className="h-6 w-6 text-primary-600 dark:text-gray-400" />
              </span>
            )}
            <input
              type={form.input.type}
              name={form.input.name}
              autoComplete={form.input.autocomplete}
              placeholder={form.input.placeholder}
              className="w-full py-2 pl-2 pr-4 dark:text-gray-300"
            />
            <button
              type={form.btn.type}
              className="rounded-br rounded-tr border-l-[1px] border-gray-400 bg-primary-600 px-4 py-2 text-white"
            >
              {form.btn.title}
            </button>
          </div>
        </form>
      </div>
    )}
  </div>
);

const CallToAction2 = ({ title, subtitle, items }: CallToActionProps) => (
  <section className="bg-primary-900 text-gray-200" id="callToActionTwo">
    <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:pt-20">
      <div className="row-gap-10 grid gap-6 md:grid-cols-2">
        <div className="mx-auto md:my-auto md:ml-0 md:pb-6 md:pr-24">
          <h2 className="mb-3 flex justify-center text-6xl font-bold md:justify-start">{title}</h2>
          <p className="text-center text-xl text-gray-200 dark:text-slate-300 md:text-left">{subtitle}</p>
        </div>
        <div className="relative -mb-6">
          {items &&
            items.map(({ title, description, href, form }, index) => (
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
            ))}
        </div>
      </div>
    </div>
  </section>
);

export default CallToAction2;
