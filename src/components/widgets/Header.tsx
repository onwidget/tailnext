import { IconBrandGithub } from '@tabler/icons';
import ToggleDarkMode from '../atoms/ToggleDarkMode';
import Link from 'next/link';
import Logo from '../atoms/Logo.server';

const Header = () => (
  <header className="sticky top-0 z-40 mx-auto w-full flex-none bg-white dark:bg-slate-900 md:bg-white/90 md:backdrop-blur-sm dark:md:bg-slate-900/90">
    <div className="mx-auto w-full max-w-6xl py-3 px-3 md:flex md:justify-between md:px-4">
      <div className="flex justify-between">
        <Link className="flex items-center" href="/">
          <Logo />
        </Link>
        <div className="flex items-center md:hidden"></div>
      </div>
      <nav
        className="hidden h-screen w-full items-center text-gray-600 dark:text-slate-200 md:flex md:h-auto md:w-auto"
        aria-label="Main navigation"
        id="menu"
      >
        <ul className="mr-6 flex w-full flex-col pt-8 text-xl md:w-auto md:flex-row md:self-center md:pt-0 md:text-base">
          <li>
            <Link
              className="flex items-center px-4 py-3 font-medium transition duration-150 ease-in-out hover:text-gray-900 dark:hover:text-white"
              href="#"
            >
              Pages
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center px-4 py-3 font-medium transition duration-150 ease-in-out hover:text-gray-900 dark:hover:text-white"
              href="/blog"
            >
              Blog
            </Link>
          </li>
          <li className="md:hidden">
            <a
              className="flex items-center px-4 py-3 font-bold transition duration-150 ease-in-out hover:text-gray-900 dark:hover:text-white"
              href="https://github.com/onwidget/tailnext"
            >
              Github
            </a>
          </li>
        </ul>
        <div className="mb-4 ml-2 flex items-center md:mb-0 md:self-center">
          <div className="hidden items-center md:flex">
            <ToggleDarkMode />
            <a
              className="btn btn-primary ml-4 w-full py-2 px-5 text-sm sm:mb-0"
              href="https://github.com/onwidget/astrowind"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download
            </a>
          </div>
        </div>
      </nav>
    </div>
  </header>
);

export default Header;
