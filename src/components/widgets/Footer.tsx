import { footerData } from '~/shared/data/global.data';

const Footer = () => {
  const { title, links, columns, socials, footNote } = footerData;

  return (
    <footer className="relative border-t border-gray-200 dark:border-slate-800">
      <div className="dark:bg-dark pointer-events-none absolute inset-0"></div>
      <div className="relative mx-auto max-w-7xl px-4 dark:text-slate-300 sm:px-6">
        <div className="grid grid-cols-12 gap-4 gap-y-8 py-8 sm:gap-8 md:py-12">
          <div className="col-span-12 lg:col-span-4">
            <div className="mb-2">
              <a className="inline-block text-xl font-bold" href="/">
                {title}
              </a>
            </div>
            <div className="text-muted text-sm">
              <ul className="mb-4 -ml-2 flex pl-2 md:order-1 md:mb-0">
                {links &&
                  links.map(({ label, href }, index) => (
                    <li key={`item-link-${index}`}>
                      <a
                        className="duration-150 ease-in-out placeholder:transition hover:text-gray-700 hover:underline dark:text-gray-400"
                        aria-label={label}
                        href={href}
                      >
                        {label}
                      </a>
                      {links.length - 1 !== index && <span className="mr-1"> · </span>}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
          {columns.map(({ title, links }, index) => (
            <div key={`item-column-${index}`} className="col-span-6 md:col-span-3 lg:col-span-2">
              <div className="mb-2 font-medium dark:text-gray-300">{title}</div>
              <ul className="text-sm">
                {links &&
                  links.map(({ label, href }, index2) => (
                    <li key={`item-column-link-${index2}`} className="mb-2">
                      <a
                        className="text-muted transition duration-150 ease-in-out hover:text-gray-700 hover:underline dark:text-gray-400"
                        aria-label={label}
                        href={href}
                      >
                        {label}
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="py-6 md:flex md:items-center md:justify-between md:py-8">
          <ul className="mb-4 -ml-2 flex md:order-1 md:ml-4 md:mb-0">
            {socials.map(({ label, icon: Icon, href }, index) => (
              <li key={`item-social-${index}`}>
                <a
                  className="text-muted inline-flex items-center rounded-lg p-2.5 text-sm hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                  aria-label={label}
                  href={href}
                >
                  {Icon && <Icon className="h-5 w-5" />}
                </a>
              </li>
            ))}
          </ul>
          {footNote}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
