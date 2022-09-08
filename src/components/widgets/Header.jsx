import Logo from "~/components/atoms/Logo"

const Header = (props) => (
  <header className="sticky top-0 z-40 flex-none mx-auto w-full bg-white md:bg-white/90 dark:bg-slate-900 dark:md:bg-slate-900/90 md:backdrop-blur-sm border-b dark:border-b-0">
    <div className="py-3 px-3 mx-auto w-full md:flex md:justify-between max-w-6xl md:px-4">
      <div className="flex justify-between">
        <a className="flex items-center" href="#">
          <Logo />
        </a>
        <div className="flex items-center md:hidden"></div>
      </div>
      <nav
        className="items-center w-full md:w-auto hidden md:flex text-gray-600 dark:text-slate-200 h-screen md:h-auto"
        aria-label="Main navigation"
        id="menu"
      >
        <ul className="flex flex-col pt-8 md:pt-0 md:flex-row md:self-center collapse w-full md:w-auto collapsed text-xl md:text-base">
          <li>
            <a
              className="font-medium hover:text-gray-900 dark:hover:text-white px-4 py-3 flex items-center transition duration-150 ease-in-out"
              href="#"
            >
              Pages
            </a>
          </li>
          <li>
            <a
              className="font-medium hover:text-gray-900 dark:hover:text-white px-4 py-3 flex items-center transition duration-150 ease-in-out"
              href="#"
            >
              Resources
            </a>
          </li>
          <li>
            <a
              className="font-medium hover:text-gray-900 dark:hover:text-white px-4 py-3 flex items-center transition duration-150 ease-in-out"
              href="#"
            >
              Blog
            </a>
          </li>
          <li className="md:hidden">
            <a
              className="font-bold hover:text-gray-900 dark:hover:text-white px-4 py-3 flex items-center transition duration-150 ease-in-out"
              href="https://github.com/onwidget/tailnext"
            >
              Github
            </a>
          </li>
        </ul>
        <div className="md:self-center flex items-center mb-4 md:mb-0 ml-2">
          <div className="hidden items-center md:flex">
            Toggle
            <a
              href="https://github.com/onwidget/tailnext"
              className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
              aria-label="TailNext Github"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5" astro-icon="tabler:brand-github"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"></path></svg>
            </a>
          </div>
        </div>
      </nav>
    </div>
  </header>
);

export default Header;
