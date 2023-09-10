import { HeaderWidgetProps } from '~/shared/types';

const HeaderWidget = ({ header, titleClassname }: HeaderWidgetProps) => {
  const { title, subtitle, tagline, position } = header;

  return (
    <div className="mb-4">
      {(title || subtitle || tagline) && (
        <div
          className={`mb-6 max-w-3xl text-center ${
            position === 'left' ? 'sm:text-left' : position === 'right' ? 'sm:text-right' : 'sm:text-center'
          } md:mx-auto md:mb-12`}
        >
          {tagline && (
            <p className="text-base font-semibold uppercase tracking-wide text-primary-600 dark:text-primary-200">
              {tagline}
            </p>
          )}
          {title && (
            <h2
              className={`font-heading mb-4 font-bold tracking-tight text-gray-900 dark:text-white ${titleClassname}`}
            >
              {title}
            </h2>
          )}
          {subtitle && <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-slate-400">{subtitle}</p>}
        </div>
      )}
    </div>
  );
};

export default HeaderWidget;
