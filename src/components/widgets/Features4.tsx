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
      panelClass="h-full relative flex flex-col rounded border border-transparent bg-white dark:bg-slate-900 p-6 text-center shadow-lg transition hover:shadow-md dark:border-slate-900"
      iconClass="mb-6 flex justify-center items-center mx-auto h-14 w-14 text-gray-700 dark:text-slate-200"
      titleClass="mb-3 text-xl font-bold"
      descriptionClass="text-gray-600 dark:text-slate-400"
      actionClass="flex font-bold text-blue-600 hover:underline dark:text-gray-200"
    />
  </WidgetWrapper>
);

export default Features4;
