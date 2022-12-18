import {
  IconCheck
} from "@tabler/icons";

const items = [
  {
    title: "basic",
    value: 29,
    period: "per month",
    texts: [
      "Etiam in libero",
      "Aenean ac nunc",
      "Cras scelerisque accumsan libero, et volutpat dolor tristique at",
      "In hac habitasse"
    ],
    btnText: "free 7-day trial",
    hasRibbon: false
  },
  {
    title: "standard",
    value: 69,
    period: "per month",
    texts: [
      "Proin vel laoreet",
      "Ut efficitur egestas",
      "Pellentesque ut nibh",
      "Donec fringilla sem"
    ],
    btnText: "free 15-day trial",
    hasRibbon: true
  },
  {
    title: "pro",
    value: 199,
    period: "per month",
    texts: [
      "Curabitur suscipit risus",
      "Aliquam blandit malesuada",
      "Suspendisse sit amet",
      "Suspendisse auctor dui"
    ],
    btnText: "free 30-day trial",
    hasRibbon: false
  },
];

const Pricing = () => (
  <section className="bg-primary-50 dark:bg-slate-800" id="pricing">
    <div className="px-4 py-16 mx-auto max-w-6xl lg:px-8 lg:pt-20">
      <div className="text-center mb-4">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-gray-900">Pricing for every business</h2>
        <p className="max-w-3xl mx-auto mt-4 text-xl text-gray-600">Proin eget vestibulum sem, vel ultrices ligula. Vestibulum in eleifend lectus, non mollis odio. Donec nibh ipsum, suscipit non pulvinar quis, lobortis ac lorem.</p>
      </div>
      <div className="flex justify-center items-stretch">
        <div className="dark:text-white grid gap-3 grid-cols-3 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mt-8">
          {items.map(({ title, value, period, texts, btnText, hasRibbon }, index) => (
            <div className="col-span-3 w-full mx-auto sm:col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1 flex" key={`item-pricing-${index}`}>
              <div className="relative flex flex-col w-full max-w-sm justify-between card">
                {hasRibbon && (
                  <div className="absolute right-[-5px] top-[-5px] z-[1] overflow-hidden w-[100px] h-[100px] text-right">
                    <span className="ribbon">Popular</span>
                  </div>
                )}
                <ul className="px-2 py-0">
                  <li className="text-xl text-center text-gray-800 dark:text-slate-400 leading-6 font-medium tracking-wider uppercase">{title}</li>
                  <li className="flex items-center justify-center text-center mt-5 mb-2.5 font-semibold">
                    <span className="text-5xl">$</span>
                    <span className="text-6xl">{value}</span>
                  </li>
                  <li className="text-center text-base leading-6 font-medium mb-7 text-gray-600 dark:text-slate-400 capitalize">{period}</li>
                  {texts.map((item, index) => (
                    <li key={`text-pricing-${index}`} className="flex items-start text-left text-base leading-7 mb-1.5">
                      <div className="flex items-center justify-center w-4 h-4 rounded-full border-primary-600 border-2 bg-primary-600 mt-1.5 mr-1.5">
                        <IconCheck className="text-white dark:text-slate-200"/>
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex w-full sm:w-auto mt-8 uppercase">
                  <a href="#" className={`btn ${hasRibbon && "btn-primary sm:mb-0"} w-full`}>{btnText}</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Pricing