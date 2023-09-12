import { FeaturesProps } from '~/shared/types';
import Headline from '../common/Headline';
import WidgetWrapper from '../common/WidgetWrapper';
import ItemGrid from '../common/ItemGrid';

const Features4 = ({ header, items, columns, id, isDark = false }: FeaturesProps) => (
  <WidgetWrapper id={id ? id : ''} isDark={isDark} containerClass="max-w-6xl">
    {header && <Headline header={header} titleClass="text-4xl md:text-5xl" />}
    <ItemGrid
      id={id}
      items={items}
      columns={columns}
      panelClass="card h-full relative flex flex-col text-center"
      iconClass="mb-6 flex justify-center items-center mx-auto h-14 w-14 text-gray-700 dark:text-slate-200"
      titleClass="mb-3 text-xl font-bold"
      descriptionClass="text-gray-600 dark:text-slate-400"
      actionClass="flex font-bold text-blue-600 hover:underline dark:text-gray-200"
    />
  </WidgetWrapper>
);

export default Features4;
