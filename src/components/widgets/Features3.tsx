import {
  IconBrandTailwind,
  IconComponents,
  IconListCheck,
  IconRocket,
  IconBrandGoogle,
  IconBulb,
  IconArrowRight,
} from '@tabler/icons';

const items = [
  {
    title: 'Next.Js + Tailwind CSS',
    description:
      'A seamless integration between two great frameworks that offer high productivity, performance and versatility.',
    icon: IconBrandTailwind,
    link: 'Discover now',
    href: '#',
  },
  {
    title: 'Ready-to-use Components',
    description:
      'Widgets made with Tailwind CSS ready to be used in Marketing Websites, SaaS, Blogs, Personal Profiles, Small Business...',
    icon: IconComponents,
    link: 'Discover now',
    href: '#',
  },
  {
    title: 'Best Practices',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mi risus tempus nulla.',
    icon: IconListCheck,
    link: 'Discover now',
    href: '#',
  },
  {
    title: 'Excellent Page Speed',
    description:
      'Having a good page speed impacts organic search ranking, improves user experience (UI/UX) and increase conversion rates.',
    icon: IconRocket,
    link: 'Discover now',
    href: '#',
  },
  {
    title: 'Search Engine Optimization',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mi risus tempus nulla.',
    icon: IconBrandGoogle,
    link: 'Discover now',
    href: '#',
  },
  {
    title: 'Open to new ideas',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mi risus tempus nulla.',
    icon: IconBulb,
    link: 'Discover now',
    href: '#',
  },
];

const Features3 = () => (
  <section className="scroll-mt-16" id="features3">
    <div className="mx-auto max-w-6xl px-4 py-16 lg:px-8 lg:py-20">
      <div className="mb-10 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
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
      <div className="my-12 grid grid-cols-3 items-start gap-6 dark:text-white sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {items.map(({ title, description, icon: Icon, href, link }, index) => (
          <div
            key={`item-feature3-${index}`}
            className="col-span-3 pb-6 sm:col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1"
          >
            <div className="flex-flow flex">
              <div className="mb-4 mr-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary-900">
                  {Icon && <Icon className="h-6 w-6 text-white dark:text-slate-200" />}
                </div>
              </div>
              <div className="flex flex-col justify-between">
                <>
                  <h3 className="mb-3 text-xl font-bold">{title}</h3>
                  <p className="text-gray-600 dark:text-slate-400">{description}</p>
                </>
                <div className="pt-2">
                  <a className="flex font-bold text-blue-600 hover:underline dark:text-gray-200" href={href}>
                    {link}
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Features3;
