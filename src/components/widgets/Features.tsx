import {
  IconBrandTailwind,
  IconComponents,
  IconListCheck,
  IconRocket,
  IconArrowsRightLeft,
  IconBulb,
} from '@tabler/icons';

const items = [
  [
    {
      title: 'Next.Js + Tailwind CSS Integration',
      description:
        'A seamless integration between two great frameworks that offer high productivity, performance and versatility.',
      icon: IconBrandTailwind,
    },
    {
      title: 'Ready-to-use Components',
      description:
        'Widgets made with Tailwind CSS ready to be used in Marketing Websites, SaaS, Blogs, Personal Profiles, Small Business...',
      icon: IconComponents,
    },
    {
      title: 'Best Practices',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mi risus tempus nulla.',
      icon: IconListCheck,
    },
  ],
  [
    {
      title: 'Excellent Page Speed',
      description:
        'Having a good page speed impacts organic search ranking, improves user experience (UI/UX) and increase conversion rates.',
      icon: IconRocket,
    },
    {
      title: 'Search Engine Optimization (SEO)',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mi risus tempus nulla.',
      icon: IconArrowsRightLeft,
    },
    {
      title: 'Open to new ideas and contributions',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mi risus tempus nulla.',
      icon: IconBulb,
    },
  ],
];

const Features = () => (
  <section className="scroll-mt-16" id="features">
    <div className="mx-auto max-w-6xl px-4 py-16 lg:px-8 lg:py-20">
      <div className="mb-10 max-w-3xl sm:text-center md:mx-auto md:mb-12">
        <p className="text-base font-semibold uppercase tracking-wide text-primary-600 dark:text-primary-200">
          Features
        </p>
        <h2 className="leading-tighter font-heading mb-4 text-4xl font-bold tracking-tighter md:text-5xl">
          What you get with <span className="whitespace-nowrap">TailNext</span>
        </h2>
        <p className="mx-auto max-w-3xl text-xl text-gray-600 dark:text-slate-400 sm:text-center">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque ipsa
          quae.
        </p>
      </div>
      <div className="mx-auto grid space-y-6 md:grid-cols-2 md:space-y-0">
        {items.map((subitems, index) => (
          <div key={index} className="space-y-8 sm:px-8">
            {subitems.map(({ title, description, icon: Icon }, index2) => (
              <div key={index2} className="flex max-w-md flex-row">
                <div className="mb-4 mr-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-500 dark:bg-primary-700">
                    {Icon && <Icon className="icon-light h-6 w-6 text-white" />}
                  </div>
                </div>
                <div>
                  <h3 className="mb-3 text-xl font-bold">{title}</h3>
                  <p className="text-gray-600 dark:text-slate-400">{description}</p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;
