import '~/styles/base.css'

import { Inter } from '@next/font/google';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    (
      <html lang="en" className={`motion-safe:scroll-smooth 2xl:text-[24px] font-light ${inter.className}`}>
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </head>
        <body className="antialiased text-gray-900 dark:text-slate-300 tracking-tight bg-white dark:bg-slate-900">
          {children}
        </body>
      </html>
    )
  );
}