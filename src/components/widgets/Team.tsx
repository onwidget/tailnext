import Image from "next/image";

import {
  IconBrandTwitter,
  IconBrandLinkedin,
  IconMail
} from "@tabler/icons";

const items = [
  {
    name: "Cindy Belcher",
    occupation: "SEO Consultant",
    src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80",
    links: [
      {
        icon: IconBrandTwitter,
        href: "https://twitter.com/",
        ariaLabel: "Know more on Twitter"
      },
      {
        icon: IconBrandLinkedin,
        href: "https://www.linkedin.com/",
        ariaLabel: "Know more on Linkedin"

      },
      {
        icon: IconMail,
        href: "https://www.google.com/intl/es/gmail/about/",
        ariaLabel: "Contact by email"
      },
    ]
  },
  {
    name: "Toby Foster",
    occupation: "Marketing Tech",
    src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    links: [
      {
        icon: IconBrandTwitter,
        href: "https://twitter.com/",
        ariaLabel: "Know more on Twitter"
      },
      {
        icon: IconBrandLinkedin,
        href: "https://www.linkedin.com/",
        ariaLabel: "Know more on Linkedin"
      },
      {
        icon: IconMail,
        href: "https://www.google.com/intl/es/gmail/about/",
        ariaLabel: "Contact by email"
      },
    ]
  },
  {
    name: "Clark Bourne",
    occupation: "Content Manager",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    links: [
      {
        icon: IconBrandTwitter,
        href: "https://twitter.com/",
        ariaLabel: "Know more on Twitter"
      },
      {
        icon: IconBrandLinkedin,
        href: "https://www.linkedin.com/",
        ariaLabel: "Know more on Linkedin"
      },
      {
        icon: IconMail,
        href: "https://www.google.com/intl/es/gmail/about/",
        ariaLabel: "Contact by email"
      },
    ]
  },
  {
    name: "Bella Chase",
    occupation: "UX Designer",
    src: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    links: [
      {
        icon: IconBrandTwitter,
        href: "https://twitter.com/",
        ariaLabel: "Know more on Twitter"
      },
      {
        icon: IconBrandLinkedin,
        href: "https://www.linkedin.com/",
        ariaLabel: "Know more on Linkedin"
      },
      {
        icon: IconMail,
        href: "https://www.google.com/intl/es/gmail/about/",
        ariaLabel: "Contact by email"
      },
    ]
  },
];

const Team = () => (
  <section className="px-4 py-16 sm:px-6 mx-auto lg:px-8 lg:py-20 max-w-6xl" id="team">
    <div className="text-center mb-4">
      <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-gray-900 dark:text-slate-300">Team Members</h2>
      <p className="max-w-3xl mx-auto mt-4 text-xl text-gray-600 dark:text-slate-400">Suspendisse in dui nibh. Donec enim leo, sodales et egestas id, malesuada non diam. Sed dapibus velit et mauris condimentum, vel imperdiet erat egestas.</p>
    </div>
    <div className="flex justify-center items-stretch">
      <div className="dark:text-white grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 mt-8">
        {items.map(({ name, src, occupation, links }, index) => (
          <div key={`item-team-${index}`} className="p-2">
            <Image
              src={src}
              width={240}
              height={320}
              alt={name}
              className="rounded-md shadow-lg w-60 h-72 object-cover"
            />
            <div className="relative text-center mt-2">
              <h3 className="text-xl font-bold mb-1.5">{name}</h3>
              <p className="text-base font-medium mb-7 text-gray-600 dark:text-slate-400 capitalize">{occupation}</p>
              <ul className="absolute block right-[-10px] bottom-[245px] bg-white dark:bg-slate-800 rounded-md list-none shadow-[0_0_10px_rgba(0,0,0,0.3)]">
                {links.map(({ href, icon: Icon, ariaLabel }, index) => (
                  <li key={`team-link-${index}`} className="flex items-center justify-center m-0.5 rounded text-primary-700 hover:text-gray-500">
                    <a 
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={ariaLabel}
                      className="flex items-center justify-center rounded-sm bg-primary-900 hover:bg-primary-50 hover:dark:bg-slate-800 text-slate-200 hover:text-primary-900 p-0.5 hover:dark:text-slate-200"
                    >
                      <Icon className="w-8 h-8 p-0.5" />
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