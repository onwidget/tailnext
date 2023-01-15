import { featuresData } from '~/shared/data';

const Features2 = () => {
  const { title, subtitle, highlight, items } = featuresData;

  return (
    <section className="relative" id="features2">
      <div
        className="pointer-events-none absolute inset-0 mb-32 bg-primary-50 dark:bg-slate-800"
        aria-hidden="true"
      ></div>
      <div className="relative mx-auto -mb-12 max-w-6xl px-4 sm:px-6">
        <div className="py-4 pt-8 sm:py-6 lg:py-8 lg:pt-12">
          {(title || subtitle || highlight) && (
            <div className="mb-8 max-w-3xl text-center md:mx-auto">
              {highlight && (
                <p className="text-base font-semibold uppercase tracking-wide text-primary-800 dark:text-primary-200">
                  {highlight}
                </p>
              )}
              {title && (
                <h2 className="leading-tighter font-heading mb-4 text-4xl font-bold tracking-tighter md:text-5xl">
                  {title}
                </h2>
              )}
              {subtitle && (
                <p className="mx-auto max-w-3xl text-xl text-gray-600 dark:text-slate-400 sm:text-center">{subtitle}</p>
              )}
            </div>
          )}
          <div
            className={`my-12 grid items-stretch gap-6 dark:text-white sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3`}
          >
            {items.map(({ title, description, icon: Icon }, index) => (
              <div
                key={`item-feature2-${index}`}
                className="relative flex flex-col rounded border border-transparent bg-white p-6 shadow-lg transition hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
              >
                <div className="flex items-center">
                  {Icon && <Icon className="h-10 w-10" />}
                  <div className="ml-4 text-xl font-bold">{title}</div>
                </div>
                {description && <p className="text-md mt-4 text-gray-500 dark:text-gray-400">{description}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features2;
