'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { IconSun, IconMoon } from '@tabler/icons-react';

const ToggleDarkMode = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const { systemTheme, theme, setTheme } = useTheme();

  const currentTheme = theme === 'system' ? systemTheme : theme;

  const handleOnClick = () => setTheme(currentTheme === 'dark' ? 'light' : 'dark');

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <button
      onClick={handleOnClick}
      className="inline-block rounded-lg p-2.5 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
      aria-label="Toggle Dark Mode"
    >
      {mounted ? (
        currentTheme === 'dark' ? (
          <IconMoon className="h-5 w-5" />
        ) : (
          <IconSun className="h-5 w-5" />
        )
      ) : (
        <div className="h-5 w-5"></div>
      )}
    </button>
  );
};

export default ToggleDarkMode;
