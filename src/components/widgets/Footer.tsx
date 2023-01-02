import { IconBrandTwitter, IconBrandInstagram, IconBrandFacebook, IconRss, IconBrandGithub } from '@tabler/icons';

const items = [
  {
    title: 'Address',
    text: ['51 Phasellus Avenue Maecenas', 'Aliquam, AQ 52098'],
  },
  {
    title: 'Phone',
    text: ['Reception: +105 123 4567', 'Office: +107 235 7890'],
  },
  {
    title: 'Email',
    text: ['Office: info@example.com', 'Site: https://example.com'],
  },
];

const social = [
  { label: 'Twitter', icon: IconBrandTwitter, href: '#' },
  { label: 'Instagram', icon: IconBrandInstagram, href: '#' },
  { label: 'Facebook', icon: IconBrandFacebook, href: '#' },
  { label: 'RSS', icon: IconRss, href: '#' },
  { label: 'Github', icon: IconBrandGithub, href: 'https://github.com/onwidget/tailnext' },
];

const links = [
  { label: 'Terms of Use', href: '#' },
  { label: 'Legal Disclaimer', href: '#' },
  { label: 'Privacy Policy', href: '#' },
];

const Footer = () => (
  <div className="mx-auto max-w-6xl px-4 sm:px-6">
    <div className="xs:gap-8 grid grid-cols-4 gap-4 gap-y-8 py-8 md:py-12">
      {items.map(({ title, text }, index) => (
        <div
          key={`item-footer-${index}`}
          className="col-span-4 sm:col-span-2 md:col-span-2 lg:col-span-1 xl:col-span-1"
        >
          <div className="mb-2 font-medium text-gray-800 dark:text-gray-300">{title}</div>
          <p>
            {text[0]}
            <br />
            {text[1]}
          </p>
        </div>
      ))}
      <div className="col-span-4 sm:col-span-2 md:col-span-2 lg:col-span-1 xl:col-span-1">
        <div className="mb-2 font-medium text-gray-800 dark:text-gray-300">Social</div>
        <ul className="mb-4 -ml-2 flex md:order-1 md:mb-0">
          {social.map(({ label, href, icon: Icon }, index2) => (
            <li key={`social-${index2}`}>
              <a
                className="inline-flex items-center rounded-lg p-2.5 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                aria-label={label}
                href={href}
              >
                <Icon className="h-5 w-5" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
    <div className="py-6 text-sm text-gray-700 dark:text-slate-400 md:flex md:items-center md:justify-between md:py-8">
      <ul className="mb-4 -ml-2 flex pl-2 md:order-1 md:ml-4 md:mb-0">
        {links.map(({ label, href }, index) => (
          <li key={`link-${index}`}>
            <a className="pr-4 hover:text-blue-600 hover:underline" href={href}>
              {label}
            </a>
          </li>
        ))}
      </ul>
      <div className="mr-4">
        <span className="float-left mr-1.5 h-5 w-5 rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)] bg-cover md:-mt-0.5 md:h-6 md:w-6"></span>
        Made by{' '}
        <a className="text-blue-600 hover:underline dark:text-gray-200" href="https://onwidget.com/">
          {' '}
          onWidget
        </a>{' '}
        · All rights reserved.
      </div>
    </div>
  </div>
);

export default Footer;
