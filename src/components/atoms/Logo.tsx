'use client';

import Image from 'next/image';

import { useTheme } from 'next-themes';

import toniaLogo from '~/assets/images/tg_logo.svg';
import toniaLogoDark from '~/assets/images/tg_logo_dark_mode.svg';

const Logo = () => {
  const { systemTheme, theme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;
  const logo = currentTheme === 'dark' ? toniaLogoDark : toniaLogo;

  return (
  <span className="ml-2 self-center whitespace-nowrap text-2xl font-bold text-gray-900 dark:text-white md:text-xl">
    <Image src={logo} width="40" height="40" alt="logo"/>
  </span>
  )
};

export default Logo;
