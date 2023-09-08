import { FeaturesProps } from '~/shared/types';
import HeaderWidget from '../common/HeaderWidget';
import WidgetWrapper from '../common/WidgetWrapper';
import ItemGrid from '../common/ItemGrid';

const Features3 = ({ header, items, columns, id, isDark = false }: FeaturesProps) => (
  <WidgetWrapper id={id ? id : ''} isDark={isDark} containerClass="scroll-mt-16 max-w-6xl">
    {header && <HeaderWidget header={header} titleClassname="text-4xl md:text-5xl" />}
    <ItemGrid
      items={items}
      columns={columns}
      containerClass="pb-6"
      panelClass="flex justify-between"
      iconClass="flex h-12 w-12 items-center justify-center rounded-md bg-primary-900 md:p-3 mb-4 mr-4 rtl:ml-4 rtl:mr-0"
      titleClass="mb-3 text-xl font-bold"
      descriptionClass="text-gray-600 dark:text-slate-400"
      actionClass="justify-start font-bold text-blue-600 hover:underline dark:text-gray-200"
    />
  </WidgetWrapper>
);

export default Features3;
