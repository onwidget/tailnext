import { FeaturesProps } from '~/shared/types';
import Headline from '../common/Headline';
import WidgetWrapper from '../common/WidgetWrapper';

const Features = ({ header, items, id, isDark = false }: FeaturesProps) => (
  <WidgetWrapper id={id ? id : ''} isDark={isDark} containerClass="scroll-mt-16 max-w-6xl">
    {header && <Headline header={header} titleClass="text-4xl md:text-5xl" />}
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
  </WidgetWrapper>
);

export default Features;
