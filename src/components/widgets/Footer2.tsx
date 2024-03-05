import { footerData2 } from '~/shared/data/global.data';

const Footer2 = () => {
  const { links, columns, socials, footNote } = footerData2;

  return (
    <div className="flex flex-end mx-auto max-w-7xl px-4 sm:px-6">
      <div className="xs:gap-8 grid grid-cols-3 gap-4 gap-y-8 py-8 md:py-12">
        {columns.map(({ title, texts }, index) => (
          <div
            key={`item-column-${index}`}
            className="col-span-3 sm:col-span-2 md:col-span-2 lg:col-span-1 xl:col-span-1"
          >
            {texts &&
              texts.map((text, index2) => (
                <p key={`item-text-${index2}`} className="text-gray-600 dark:text-slate-400">
                  <span className="mb-2 font-medium text-gray-800 dark:text-gray-300">{title}</span> {text}
                </p>
              ))}
          </div>
        ))}
        <div className="col-span-3 sm:col-span-2 md:col-span-2 lg:col-span-1 xl:col-span-1">
          <ul className="mb-4 -ml-2 flex md:order-1 md:mb-0">
            <li className=" font-medium text-gray-800 dark:text-gray-300 px-2.5">Social:</li>
            {socials.map(({ label, icon: Icon, href }, index) => (
              <li key={`item-social-${index}`}>
                <a
                  className="text-muted inline-flex items-center rounded-lg px-2.5 text-sm hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                  aria-label={label}
                  href={href}
                  target="_blank"
                >
                  {Icon && <Icon className="h-5 w-5" />}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="font-medium">{footNote}</div>
      </div>
    </div>
  );
};

export default Footer2;
