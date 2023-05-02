import { StatsProps } from '~/shared/types';
import { toUiAmount } from '~/utils/utils';

const Stats = ({ items }: StatsProps) => {
  return (
    <section id="stats">
      <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6 md:px-24 md:py-16 lg:px-8 lg:py-20">
        <div className="row-gap-8 grid grid-cols-2 md:grid-cols-4">
          {items.map(({ title, description }, index) => (
            <div
              key={`item-stat-${index}`}
              className="mb-12 text-center md:mb-0 md:border-r md:last:border-none dark:md:border-slate-500"
            >
              <div className="font-heading text-primary text-[2.6rem] font-bold dark:text-white lg:text-5xl xl:text-6xl">
                {toUiAmount(title as number)}
              </div>
              <p className="text-sm font-medium uppercase tracking-widest text-gray-800 dark:text-slate-400 lg:text-base">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
