'use client';

import { useEffect, useState } from 'react';
import { IconSun } from '@tabler/icons';

function setTheme(themeName: string, current: string) {
  localStorage.setItem('theme', themeName);
  if (current) {
    document.documentElement.classList.remove(current);
  }

  document.documentElement.classList.add(themeName);
}

function ToggleDarkMode() {
  const [mode, setMode] = useState('light');

  useEffect(() => {
    if (mode === 'dark') {
      setTheme('dark', 'light');
    } else {
      setTheme('light', 'dark');
    }
  }, [mode]);

  const handleOnClick = () => {
    if (localStorage.getItem('theme') === 'dark') {
      setMode('light');
    } else {
      setMode('dark');
    }
  };

  return (
    <button
      onClick={handleOnClick}
      className="inline-block rounded-lg p-2.5 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
      aria-label="Toggle Dark Mode"
    >
      <IconSun className="h-5 w-5" />
    </button>
  );
}

export default ToggleDarkMode;
