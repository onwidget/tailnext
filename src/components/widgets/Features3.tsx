import { featuresData } from '~/shared/data';

const Features3 = () => {
  const { title, subtitle, highlight, items } = featuresData;

  return (
    <section className="scroll-mt-16" id="features3">
      <div className="mx-auto max-w-6xl px-4 py-16 lg:px-8 lg:py-20">
        {(title || subtitle || highlight) && (
          <div className="mb-10 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
            {highlight && (
              <p className="text-base font-semibold uppercase tracking-wide text-primary-600 dark:text-primary-200">
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
        <div className="mb-0 grid grid-cols-3 items-start gap-6 dark:text-white sm:grid-cols-2 md:my-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {items.map(({ title, description, icon: Icon, href, btn }, index) => (
            <div
              key={`item-feature3-${index}`}
              className="col-span-3 pb-6 sm:col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1"
            >
              <div className="flex-flow flex">
                <div className="mb-4 mr-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary-900">
                    {Icon && <Icon className="h-6 w-6 text-white dark:text-slate-200" />}
                  </div>
                </div>
                <div className="flex flex-col justify-between">
                  <>
                    <h3 className="mb-3 text-xl font-bold">{title}</h3>
                    <p className="text-gray-600 dark:text-slate-400">{description}</p>
                  </>
                  <div className="pt-2">
                    <a className="flex font-bold text-blue-600 hover:underline dark:text-gray-200" href={href}>
                      {btn}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features3;
