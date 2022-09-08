import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html className="motion-safe:scroll-smooth 2xl:text-[24px]">
      <Head />
      <body className="antialiased text-gray-900 dark:text-slate-300 tracking-tight bg-white dark:bg-slate-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}