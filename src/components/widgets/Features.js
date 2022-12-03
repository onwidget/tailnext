
const items = [
	[
		{
			title: 'Next.Js + Tailwind CSS Integration',
			description:
				'A seamless integration between two great frameworks that offer high productivity, performance and versatility.',
			icon: 'tabler:brand-tailwind',
		},
		{
			title: 'Ready-to-use Components',
			description:
				'Widgets made with Tailwind CSS ready to be used in Marketing Websites, SaaS, Blogs, Personal Profiles, Small Business...',
			icon: 'tabler:components',
		},
		{
			title: 'Best Practices',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mi risus tempus nulla.',
			icon: 'tabler:list-check',
		},
	],
	[
		{
			title: 'Excellent Page Speed',
			description:
				'Having a good page speed impacts organic search ranking, improves user experience (UI/UX) and increase conversion rates.',
			icon: 'tabler:rocket',
		},
		{
			title: 'Search Engine Optimization (SEO)',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mi risus tempus nulla.',
			icon: 'tabler:arrows-right-left',
		},
		{
			title: 'Open to new ideas and contributions',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mi risus tempus nulla.',
			icon: 'tabler:bulb',
		},
	],
];

const Icon = ({icon}) => <>{icon}</>

const Features = () => (
  <section className="scroll-mt-16" id="features">
	<div className="px-4 py-16 mx-auto max-w-6xl lg:px-8 lg:py-20">
		<div className="mb-10 md:mx-auto sm:text-center md:mb-12 max-w-3xl">
			<p className="text-base text-primary-600 dark:text-primary-200 font-semibold tracking-wide uppercase">Features</p>
			<h2 className="text-4xl md:text-5xl font-bold leading-tighter tracking-tighter mb-4 font-heading">
				What you get with <span className="whitespace-nowrap">TailNext</span>
			</h2>
			<p className="max-w-3xl mx-auto sm:text-center text-xl text-gray-600 dark:text-slate-400">
				Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque ipsa
				quae.
			</p>
		</div>
		<div className="grid mx-auto space-y-6 md:grid-cols-2 md:space-y-0">
			{
				items.map((subitems, index) => (
					<div key={index} className="space-y-8 sm:px-8">
						{subitems.map(({ title, description, icon }, index2) => (
							<div key={index2} className="flex flex-row max-w-md">
								<div className="mb-4 mr-4">
									<div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-500 dark:bg-primary-700">
										{icon && <Icon icon={icon} className="w-6 h-6 text-white icon-light" />}
									</div>
								</div>
								<div>
									<h3 className="mb-3 text-xl font-bold">{title}</h3>
									<p className="text-gray-600 dark:text-slate-400">{description}</p>
								</div>
							</div>
						))}
					</div>
				))
			}
		</div>
	</div>
</section>
);

export default Features;
