import { featuresData } from '~/shared/data';
import HeaderWidget from '../common/HeaderWidget';

const Features2 = () => {
  const { header, items } = featuresData;

  return (
    <section className="relative py-16 lg:py-20" id="features2">
      <div className="pointer-events-none absolute inset-0 mb-36 bg-primary-50 dark:bg-slate-800"></div>
      <div className="relative mx-auto -mb-12 max-w-6xl px-4 sm:px-6">
        {header && <HeaderWidget header={header} titleClassname="text-4xl md:text-5xl" />}
        <div className={`my-12 grid items-stretch gap-6 dark:text-white sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3`}>
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
    </section>
  );
};

export default Features2;
