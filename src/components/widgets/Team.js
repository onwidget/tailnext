import Image from 'next/image';

import { IconBrandTwitter, IconBrandLinkedin, IconMail } from '@tabler/icons';

const items = [
  {
    name: 'Cindy Belcher',
    occupation: 'SEO Consultant',
    src: 'https://images.unsplash.com/photo-1637858868799-7f26a0640eb6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
    links: [
      {
        icon: IconBrandTwitter,
        href: '#',
        ariaLabel: 'Know more on Twitter',
      },
      {
        icon: IconBrandLinkedin,
        href: '#',
        ariaLabel: 'Know more on Linkedin',
      },
      {
        icon: IconMail,
        href: '#',
        ariaLabel: 'Contact by email',
      },
    ],
  },
  {
    name: 'Toby Foster',
    occupation: 'Marketing Tech',
    src: 'https://images.unsplash.com/photo-1614583224978-f05ce51ef5fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2172&q=80',
    links: [
      {
        icon: IconBrandTwitter,
        href: '#',
        ariaLabel: 'Know more on Twitter',
      },
      {
        icon: IconBrandLinkedin,
        href: '#',
        ariaLabel: 'Know more on Linkedin',
      },
      {
        icon: IconMail,
        href: '#',
        ariaLabel: 'Contact by email',
      },
    ],
  },
  {
    name: 'Clark Bourne',
    occupation: 'Content Manager',
    src: 'https://images.unsplash.com/photo-1639628735078-ed2f038a193e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
    links: [
      {
        icon: IconBrandTwitter,
        href: '#',
        ariaLabel: 'Know more on Twitter',
      },
      {
        icon: IconBrandLinkedin,
        href: '#',
        ariaLabel: 'Know more on Linkedin',
      },
      {
        icon: IconMail,
        href: '#',
        ariaLabel: 'Contact by email',
      },
    ],
  },
  {
    name: 'Bella Chase',
    occupation: 'UX Designer',
    src: 'https://images.unsplash.com/photo-1628260412297-a3377e45006f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
    links: [
      {
        icon: IconBrandTwitter,
        href: '#',
        ariaLabel: 'Know more on Twitter',
      },
      {
        icon: IconBrandLinkedin,
        href: '#',
        ariaLabel: 'Know more on Linkedin',
      },
      {
        icon: IconMail,
        href: '#',
        ariaLabel: 'Contact by email',
      },
    ],
  },
];

const Team = () => (
  <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20" id="team">
    <div className="mb-4 text-center">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-slate-300 sm:text-3xl">Team Members</h2>
      <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-slate-400">
        Suspendisse in dui nibh. Donec enim leo, sodales et egestas id, malesuada non diam. Sed dapibus velit et mauris
        condimentum, vel imperdiet erat egestas.
      </p>
    </div>
    <div className="flex items-stretch justify-center">
      <div className="mt-8 grid grid-cols-1 gap-4 dark:text-white sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
        {items.map(({ name, src, occupation, links }, index) => (
          <div key={`item-team-${index}`} className="p-2">
            <Image src={src} width={240} height={320} alt={name} className="h-72 w-60 rounded-md object-cover" />
            <div className="relative mt-3 text-center">
              <h3 className="mb-1.5 text-xl font-bold">{name}</h3>
              <p className="mb-7 text-base font-medium capitalize text-gray-600 dark:text-slate-400">{occupation}</p>
              <ul className="absolute right-[-10px] bottom-[245px] block list-none rounded-md bg-white/70 shadow-[0_0_8px_rgba(0,0,0,0.2)] backdrop-blur-sm dark:bg-white/40">
                {links.map(({ href, icon: Icon, ariaLabel }, index) => (
                  <li
                    key={`team-link-${index}`}
                    className="m-1 flex items-center justify-center rounded text-primary-700 hover:text-gray-500"
                  >
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={ariaLabel}
                      className="flex items-center justify-center rounded-sm bg-transparent p-0.5 text-primary-900 hover:bg-primary-900 hover:text-slate-200 hover:dark:bg-slate-800 hover:dark:text-slate-200"
                    >
                      <Icon className="h-6 w-6 p-0.5" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Team;
