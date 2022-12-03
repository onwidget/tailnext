const Announcement = () => (
  <div className="hidden md:block bg-primary-100 dark:bg-slate-800 dark:border-slate-800 dark:text-slate-400 border-b border-primary-100 text-sm px-3 py-2 text-gray-800 overflow-hidden whitespace-nowrap text-ellipsis">
    <span className="text-xs py-0.5 px-1 bg-primary-200 dark:bg-slate-600 font-semibold">
      NEW
    </span>{' '}
    <a
      href="/get-started-website-with-next-js-tailwind-css"
      className="hover:underline text-gray-700 dark:text-slate-400"
    >
      Get started with TailNext to create a website using Next.js and Tailwind
      CSS »
    </a>
    <a
      target="_blank"
      rel="noreferrer"
      className="float-right"
      title="Follow @onWidget on Twitter"
      href="https://twitter.com/intent/user?screen_name=onwidget"
    >
      <img
        src="https://img.shields.io/twitter/url/https/twitter.com/onwidget.svg?style=social&amp;label=Follow%20%40onWidget"
        alt="Follow @onWidget"
        width="125"
        height="20"
      />
    </a>
  </div>
);

export default Announcement;
