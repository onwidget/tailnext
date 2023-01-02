/* eslint-disable @next/next/no-img-element */
const Announcement = () => (
  <div className="hidden overflow-hidden text-ellipsis whitespace-nowrap border-b border-blue-900 bg-blue-900 px-3 py-2 text-sm text-gray-200 md:block">
    <span className="bg-blue-800 py-0.5 px-1 text-xs font-semibold">NEW</span>{' '}
    <a
      href="https://beta.nextjs.org/docs/app-directory-roadmap"
      target="_blank"
      rel="noreferrer noopened"
      className="text-gray-100 hover:underline"
    >
      This template is made with Next.js 13 using the new app directory »
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
