import { twMerge } from 'tailwind-merge';
import { Timeline as TimelineType } from '~/shared/types';

const Timeline = ({
  id,
  items,
  defaultIcon: DefaultIcon,
  containerClass,
  panelClass,
  iconClass,
  titleClass,
  descriptionClass,
}: TimelineType) => {
  return (
    <>
      {items && items.length && (
        <div className={twMerge('', containerClass)}>
          {items.map(({ title, description, icon: Icon }, index = 0) => (
            <div key={id ? `item-${id}-${index}` : `item-grid-${index}`} className={twMerge('flex', panelClass)}>
              <div className="flex flex-col items-center mr-4 rtl:mr-0 rtl:ml-4">
                <div
                  className={`flex items-center justify-center ${
                    index !== items.length - 1 ? '' : 'text-slate-200 rounded-full bg-primary-900'
                  }`}
                >
                  {Icon ? (
                    <Icon className={twMerge('w-10 h-10 p-2 rounded-full border-2', iconClass)} />
                  ) : DefaultIcon ? (
                    <DefaultIcon className={twMerge('w-10 h-10 p-2 rounded-full border-2', iconClass)} />
                  ) : null}
                </div>

                {index !== items.length - 1 && <div className="w-px h-full bg-black/10 dark:bg-slate-400/50" />}
              </div>
              <div className={`pt-1 ${index !== items.length - 1 ? 'pb-8' : ''}`}>
                {title && (
                  <h3 className={twMerge('text-xl font-bold text-gray-900 dark:text-slate-300 mb-2', titleClass)}>
                    {title}
                  </h3>
                )}
                {description && (
                  <p className={twMerge('text-gray-600 dark:text-slate-400', descriptionClass)}>{description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Timeline;
