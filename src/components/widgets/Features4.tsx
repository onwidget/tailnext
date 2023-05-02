import { FeaturesProps } from '~/shared/types';
import HeaderWidget from '../common/HeaderWidget';

const Features4 = ({ header, items }: FeaturesProps) => (
  <section id="features4">
    <div className="mx-auto max-w-6xl px-4 py-16 lg:px-8 lg:py-20">
      {header && <HeaderWidget header={header} titleClassname="text-4xl md:text-5xl" />}
      <div className="mb-0 grid gap-6 dark:text-white sm:grid-cols-2 md:my-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {items.map(({ title, description, icon: Icon, link }, index) => (
          <div
            key={`item-feature3-${index}`}
            className="relative flex flex-col items-center justify-between rounded border border-transparent bg-white p-6 text-center shadow-lg transition hover:shadow-md dark:border-slate-700 dark:bg-slate-800"
          >
            <div>
              <div className="mb-6 flex justify-center">
                {Icon && <Icon className="h-14 w-14 text-gray-700 dark:text-slate-200" />}
              </div>
              <h3 className="mb-3 text-xl font-bold">{title}</h3>
              <p className="text-gray-600 dark:text-slate-400">{description}</p>
            </div>
            {link && (
              <div className="pt-4">
                <a className="flex font-bold text-blue-600 hover:underline dark:text-gray-200" href={link.href}>
                  {link.label}
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Features4;
