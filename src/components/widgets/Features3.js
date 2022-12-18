import {
  IconBrandTailwind,
  IconComponents,
  IconListCheck,
  IconRocket,
  IconArrowsRightLeft,
  IconBulb,
  IconArrowRight
} from "@tabler/icons";

const items = [
  {
    title: "Next.Js + Tailwind CSS Integration",
    description:
      "A seamless integration between two great frameworks that offer high productivity, performance and versatility.",
    icon: IconBrandTailwind,
    link: "Discover now",
    href: "#"
  },
  {
    title: "Ready-to-use Components",
    description:
      "Widgets made with Tailwind CSS ready to be used in Marketing Websites, SaaS, Blogs, Personal Profiles, Small Business...",
    icon: IconComponents,
    link: "Discover now",
    href: "#"
  },
  {
    title: "Best Practices",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mi risus tempus nulla.",
    icon: IconListCheck,
    link: "Discover now",
    href: "#"
  },
  {
    title: "Excellent Page Speed",
    description:
      "Having a good page speed impacts organic search ranking, improves user experience (UI/UX) and increase conversion rates.",
    icon: IconRocket,
    link: "Discover now",
    href: "#"
  },
  {
    title: "Search Engine Optimization (SEO)",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mi risus tempus nulla.",
    icon: IconArrowsRightLeft,
    link: "Discover now",
    href: "#"
  },
  {
    title: "Open to new ideas and contributions",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mi risus tempus nulla.",
    icon: IconBulb,
    link: "Discover now",
    href: "#"
  },
];
  
const Features3 = () => (
  <section className="scroll-mt-16" id="features3">
    <div className="px-4 py-16 mx-auto max-w-6xl lg:px-8 lg:py-20">
      <div className="text-center mb-10 md:mx-auto sm:text-center md:mb-12 max-w-3xl">
        <p className="text-base text-primary-600 dark:text-primary-200 font-semibold tracking-wide uppercase">
          Features
        </p>
        <h2 className="text-4xl md:text-5xl font-bold leading-tighter tracking-tighter mb-4 font-heading">
          Services provided by <span className="whitespace-nowrap">TailNext</span>
        </h2>
        <p className="max-w-3xl mx-auto sm:text-center text-xl text-gray-600 dark:text-slate-400">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque rem aperiam, eaque ipsa quae.
        </p>
      </div>
      <div className="dark:text-white grid gap-6 grid-cols-3 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 items-start my-12">
        {items.map(({ title, description, icon: Icon, href, link }, index) => (
          <div key={`item-feature3-${index}`} className="col-span-3 sm:col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1">
            <div className="flex flex-flow">
              <div className="mb-4 mr-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-md bg-primary-50 text-primary-600">
                  {Icon && <Icon className="w-8 h-8 text-primary-600 dark:text-slate-200" />}
                </div>
              </div>
              <div className="flex justify-between flex-col">
                <>
                  <h3 className="mb-3 text-xl font-bold">{title}</h3>
                  <p className="text-gray-600 dark:text-slate-400">
                    {description}
                  </p>
                </>
                <div className="pt-2">
                  <a className="flex text-blue-600 hover:underline dark:text-gray-200" href={href}>
                    {link}<IconArrowRight className="ml-4" />
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
  