import { featuresData } from '~/shared/data';

const Features = () => {
  const { title, subtitle, highlight, items } = featuresData;

  return (
    <section className="scroll-mt-16" id="features">
      <div className="mx-auto max-w-6xl px-4 py-16 lg:px-8 lg:py-20">
        {(title || subtitle || highlight) && (
          <div className="mb-10 max-w-3xl sm:text-center md:mx-auto md:mb-12">
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
        <div className="mx-auto grid space-y-6 md:grid-cols-2 md:space-y-0">
          {items.map(({ title, description, icon: Icon }, index) => (
            <div key={`item-feature-${index}`} className="space-y-8 sm:px-8">
              <div className="flex md:max-w-md">
                <div className="mb-4 mr-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-500 dark:bg-primary-700">
                    {Icon && <Icon className="icon-light h-6 w-6 text-white" />}
                  </div>
                </div>
                <div className="mb-0 md:mb-8">
                  <h3 className="mb-3 text-xl font-bold">{title}</h3>
                  <p className="text-gray-600 dark:text-slate-400">{description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
