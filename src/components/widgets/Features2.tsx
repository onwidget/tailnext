import { FeaturesProps } from '~/shared/types';
import Headline from '../common/Headline';
import ItemGrid from '../common/ItemGrid';

const Features2 = ({ header, items, columns = 3, id }: FeaturesProps) => (
  <section className="relative mx-auto py-12 md:py-16 lg:py-20" id="features2">
    <div className="pointer-events-none absolute inset-0 mb-36 bg-primary-50 dark:bg-slate-800"></div>
    <div className="relative mx-auto -mb-12 max-w-6xl px-4 sm:px-6">
      {header && <Headline header={header} titleClass="text-4xl md:text-5xl" />}
      <ItemGrid
        id={id}
        items={items}
        columns={columns}
        defaultColumns={3}
        panelClass="card flex flex-start min-w-screen-sm items-stretch h-full"
        iconClass="h-8 w-8 mr-4 text-primary-800 dark:text-primary-600"
        titleClass="text-xl font-bold"
        descriptionClass="text-md text-gray-500 dark:text-gray-400"
        actionClass="justify-start"
      />
    </div>
  </section>
);

export default Features2;
