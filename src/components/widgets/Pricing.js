import { IconCheck } from '@tabler/icons';

const items = [
  {
    title: 'basic',
    value: 29,
    period: 'per month',
    texts: [
      'Etiam in libero',
      'Aenean ac nunc',
      'Cras scelerisque accumsan libero, et volutpat dolor tristique at',
      'In hac habitasse',
    ],
    btnText: 'free 7-day trial',
    hasRibbon: false,
  },
  {
    title: 'standard',
    value: 69,
    period: 'per month',
    texts: ['Proin vel laoreet', 'Ut efficitur egestas', 'Pellentesque ut nibh', 'Donec fringilla sem'],
    btnText: 'free 15-day trial',
    hasRibbon: true,
  },
  {
    title: 'pro',
    value: 199,
    period: 'per month',
    texts: ['Curabitur suscipit risus', 'Aliquam blandit malesuada', 'Suspendisse sit amet', 'Suspendisse auctor dui'],
    btnText: 'free 30-day trial',
    hasRibbon: false,
  },
];

const Pricing = () => (
  <section className="bg-primary-50 dark:bg-slate-800" id="pricing">
    <div className="mx-auto max-w-6xl px-4 py-16 lg:px-8 lg:pt-20">
      <div className="mb-4 text-center">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl">
          Pricing for every business
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-slate-400">
          Proin eget vestibulum sem, vel ultrices ligula. Vestibulum in eleifend lectus, non mollis odio. Donec nibh
          ipsum, suscipit non pulvinar quis, lobortis ac lorem.
        </p>
      </div>
      <div className="flex items-stretch justify-center">
        <div className="mt-8 grid grid-cols-3 gap-3 dark:text-white sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {items.map(({ title, value, period, texts, btnText, hasRibbon }, index) => (
            <div
              className="col-span-3 mx-auto flex w-full sm:col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1"
              key={`item-pricing-${index}`}
            >
              <div className="card relative flex w-full max-w-sm flex-col justify-between">
                {hasRibbon && (
                  <div className="absolute right-[-5px] top-[-5px] z-[1] h-[100px] w-[100px] overflow-hidden text-right">
                    <span className="ribbon">Popular</span>
                  </div>
                )}
                <ul className="px-2 py-0">
                  <li className="text-center text-xl font-medium uppercase leading-6 tracking-wider text-gray-800 dark:text-slate-400">
                    {title}
                  </li>
                  <li className="mt-5 mb-2.5 flex items-center justify-center text-center font-semibold">
                    <span className="text-5xl">$</span>
                    <span className="text-6xl">{value}</span>
                  </li>
                  <li className="mb-7 text-center text-base font-medium capitalize leading-6 text-gray-600 dark:text-slate-400">
                    {period}
                  </li>
                  {texts.map((item, index) => (
                    <li key={`text-pricing-${index}`} className="mb-1.5 flex items-start text-left text-base leading-7">
                      <div className="mt-1.5 mr-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-primary-600 bg-primary-600">
                        <IconCheck className="text-white dark:text-slate-200" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex w-full uppercase sm:w-auto">
                  <a href="#" className={`btn ${hasRibbon && 'btn-primary sm:mb-0'} w-full`}>
                    {btnText}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Pricing;
