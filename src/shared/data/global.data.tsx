import { IconBrandGithub, IconBrandInstagram, IconBrandLinkedin } from '@tabler/icons-react';
import { FooterProps, HeaderProps } from '../types';

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
    { label: 'LinkedIn', icon: IconBrandLinkedin, href: 'https://www.linkedin.com/in/tonia-gonzalez-71404416a/' },
    { label: 'Github', icon: IconBrandGithub, href: 'https://github.com/toniagonzalez' },
    { label: 'Instagram', icon: IconBrandInstagram, href: 'https://www.instagram.com/encantolosarboles/' },
  ],
  footNote: (
    <div className="mr-4 text-md">
      Tonia Gonzalez <span>&copy;</span>2024
    </div>
  ),
};
