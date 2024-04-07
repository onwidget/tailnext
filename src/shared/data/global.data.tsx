import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandTwitter,
  IconChevronDown,
  IconUser,
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
      label: 'Services',
      icon: IconChevronDown,
      links: [
        {
          label: 'Tech Support',
          href: '/it-services',
        },
        {
          label: 'Electronics Repair',
          href: '/repair-services',
        },
        {
          label: 'Data Recovery',
          href: '/data-recovery-services',
        },
        {
          label: 'Network Solutions',
          href: '/networking-services',
        },
        {
          label: 'Data Storage',
          href: '/faqs',
        },
        {
          label: 'Web & App Development',
          href: '/web-development',
        },
        {
          label: 'Electronics Recycling',
          href: '/recycling-services',
        },
      ],
    },
    {
      label: 'Blog',
      href: '/blog',
    },
    {
      label: 'Contact',
      href: '/contact',
    },
    {
      label: 'Visit Our Shop',
      href: 'https://easttexaselectronics.com',
      
    },
  ],
  actions: [
    {
      text: 'Customer Portal',
      href: '/customer-portal',
      targetBlank: false,
    },
  ],
  isSticky: true,
  showToggleTheme: true,
  showRssFeed: false,
  position: 'center',
};

// Footer data
export const footerData: FooterProps = {
  title: 'East Texas Electronics',
  links: [
    {
      label: 'Terms & Conditions',
      href: '/terms',
    },
    {
      label: 'Privacy Policy',
      href: '/privacy',
    },
  ],
  columns: [
    {
      title: 'Top Services',
      links: [
        {
          label: 'Tech Support',
          href: '/it-services',
        },
        {
          label: 'Electronics Repair',
          href: '/repair-services',
        },


        {
          label: 'Data Storage',
          href: '/faqs',
        },
        {
          label: 'Web & App Development',
          href: '/web-development',
        },

      ],
    },
    {
      title: 'Upcoming ',
      links: [
        {
          label: 'Employee Portal',
          href: '/upcoming',
        },
        {
          label: 'Employee Management',
          href: '/upcoming',
        },
        {
          label: 'Asset Management',
          href: '/upcoming',
        },
      ],
    },
    {
      title: 'Support',
      links: [
        {
          label: 'Contact Us',
          href: '/',
        },
        {
          label: 'Book an Appointment',
          href: '/',
        },
        {
          label: 'Request a Consultation',
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
          label: 'Online Store',
          href: 'https://easttexaselectronics.com',
        },
      ],
    },
  ],
  socials: [
    { label: 'Twitter', icon: IconBrandTwitter, href: '#' },
    { label: 'Instagram', icon: IconBrandInstagram, href: '#' },
    { label: 'Facebook', icon: IconBrandFacebook, href: '#' },
    // { label: 'RSS', icon: IconRss, href: '#' },
    { label: 'Github', icon: IconBrandGithub, href: 'https://github.com/easttexaselectronics' },
  ],
  footNote: (
    <div className="mr-4 text-sm dark:text-slate-400">
      <a className="text-blue-600 hover:underline dark:text-gray-200" href="https://www.easttexaselectronics.com">
        {' '}
        East Texas Electronics, LLC.
      </a>{' '}
      · All Rights Reserved.
      {' '}
      <span className="text-xs text-gray-600 dark:text-slate-300">©2022</span>
    </div>
  ),
};
