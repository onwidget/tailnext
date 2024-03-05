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
    <div className="md:flex md:gap-4">
      <span className="ml-2 self-center  text-2xl font-bold text-gray-900 dark:text-white md:text-xl">
        <Image src={logo} width="40" height="40" alt="logo" />
      </span>
      <span>Tonia Gonzalez</span>
    </div>
  );
};

export default Logo;
