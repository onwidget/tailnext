import { FeaturesProps } from '~/shared/types';
import Headline from '../common/Headline';
import WidgetWrapper from '../common/WidgetWrapper';
import ItemGrid from '../common/ItemGrid';

const Features3 = ({
  header,
  items,
  columns = 3,
  isBeforeContent,
  isAfterContent,
  id,
  hasBackground = false,
}: FeaturesProps) => (
  <WidgetWrapper
    id={id ? id : ''}
    hasBackground={hasBackground}
    containerClass={`max-w-6xl ${isBeforeContent ? 'md:pb-8 lg:pb-12' : ''} ${
      isAfterContent ? 'pt-0 md:pt-0 lg:pt-0' : ''
    }`}
  >
    {header && <Headline header={header} titleClass="text-4xl md:text-5xl" />}
    <ItemGrid
      id={id}
      items={items}
      columns={columns}
      defaultColumns={3}
      panelClass="card h-full relative flex flex-col text-center p-8"
      iconClass="h-12 w-12 flex justify-center items-center rounded-md text-white bg-primary-900 mb-6 p-2 md:p-3 mx-auto"
      titleClass="mb-3 text-xl font-bold"
      descriptionClass="text-gray-600 dark:text-slate-400"
    />
  </WidgetWrapper>
);

export default Features3;
