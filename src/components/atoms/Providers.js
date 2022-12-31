'use client';

import { ThemeProvider } from 'next-themes';

const Providers = ({ children }) => (
  <ThemeProvider attribute="class" disableTransitionOnChange>
    {children}
  </ThemeProvider>
);

export default Providers;
