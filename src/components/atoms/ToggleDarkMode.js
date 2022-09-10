import { useEffect, useState } from "react";
import { IconSun } from '@tabler/icons';

function setTheme(themeName) {
  localStorage.setItem("theme", themeName);
  document.documentElement.className = themeName;
}

function ToggleDarkMode() {
  const [mode, setMode] = useState("ligth");

  useEffect(() => {
    if (mode === "dark") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, [mode]);

  const handleOnClick = () => {
    if (localStorage.getItem("theme") === "dark") {
      setMode("light");
    } else {
      setMode("dark");
    }
  };

  return (
    <button
      onClick={handleOnClick}
      className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
    >
      <IconSun className="w-5 h-5" />
    </button>
  );
}

export default ToggleDarkMode;
