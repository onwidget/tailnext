import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconChevronDown,
  IconRss,
} from '@tabler/icons-react';
import { AnnouncementProps, FooterProps, HeaderProps } from '../types';

// Announcement data
export const announcementData: AnnouncementProps = {
  title: 'NEW',
  callToAction: {
    text: 'This template is made with Next.js 14 using the new App Router »',
    href: 'https://nextjs.org/blog/next-14',
  },
  callToAction2: {
    text: 'Follow @onWidget on Twitter',
    href: 'https://twitter.com/intent/user?screen_name=onwidget',
  },
};

// Header data
export const headerData: HeaderProps = {
  links: [
    {
      label: 'Code stuff',
      href: '/code',
    },
    {
      label: 'Art stuff',
      href: '/art',
    },
    {
      label: 'About',
      href: '/about',
    },
  ],
  isSticky: true,
  showToggleTheme: true,
  showRssFeed: false,
  position: 'right',
};

// Footer data
export const footerData: FooterProps = {
  title: 'TailNext',
  links: [],
  columns: [
    {
      title: 'Product',
      links: [
        {
          label: 'Features',
          href: '/',
        },
        {
          label: 'Security',
          href: '/',
        },
        {
          label: 'Team',
          href: '/',
        },
        {
          label: 'Enterprise',
          href: '/',
        },
        {
          label: 'Customer stories',
          href: '/',
        },
        {
          label: 'Pricing',
          href: '/pricing',
        },
        {
          label: 'Resources',
          href: '/',
        },
      ],
    },
    {
      title: 'Platform',
      links: [
        {
          label: 'Developer API',
          href: '/',
        },
        {
          label: 'Partners',
          href: '/',
        },
      ],
    },
    {
      title: 'Support',
      links: [
        {
          label: 'Docs',
          href: '/',
        },
        {
          label: 'Community Forum',
          href: '/',
        },
        {
          label: 'Professional Services',
          href: '/',
        },
        {
          label: 'Skills',
          href: '/',
        },
        {
          label: 'Status',
          href: '/',
        },
      ],
    },
    {
      title: 'Company',
      links: [
        {
          label: 'About',
          href: '/',
        },
        {
          label: 'Blog',
          href: '/blog',
        },
        {
          label: 'Careers',
          href: '/',
        },
        {
          label: 'Press',
          href: '/',
        },
        {
          label: 'Inclusion',
          href: '/',
        },
        {
          label: 'Social Impact',
          href: '/',
        },
        {
          label: 'Shop',
          href: '/',
        },
      ],
    },
  ],
  socials: [
    { label: 'LinkedIn', icon: IconBrandLinkedin, href: 'https://www.linkedin.com/in/tonia-gonzalez-71404416a/'},
    { label: 'Github', icon: IconBrandGithub, href: 'https://github.com/toniagonzalez' },
    { label: 'Instagram', icon: IconBrandInstagram, href: 'https://www.instagram.com/encantolosarboles/' },
  ],
  footNote: (
    <div className="mr-4 text-sm">
      Tonia Gonzalez <span>&copy;</span>2024
    </div>
  ),
};

// Footer2 data
export const footerData2: FooterProps = {
  links: [],
  columns: [
    {
      title: 'Email:',
      texts: ['toniagonzalez.design@gmail.com'],
    },
  ],
  socials: [
    { label: 'LinkedIn', icon: IconBrandLinkedin, href: 'https://www.linkedin.com/in/tonia-gonzalez-71404416a/'},
    { label: 'Github', icon: IconBrandGithub, href: 'https://github.com/toniagonzalez' },
    { label: 'Instagram', icon: IconBrandInstagram, href: 'https://www.instagram.com/encantolosarboles/' },
  ],
  footNote: (
    <div className="mr-4 text-md">
      Tonia Gonzalez <span>&copy;</span>2024
    </div>
  ),
};
