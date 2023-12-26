import React from 'react';
import type { Preview, ReactRenderer } from '@storybook/react';
import { withThemeByClassName } from '@storybook/addon-themes';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import { Inter as CustomFont } from 'next/font/google';
import '~/assets/styles/base.css';

const customFont = CustomFont({ subsets: ['latin'], variable: '--font-custom' });

const CUSTOM_VIEWPORTS = {
  SMALL: {
    name: 'Mobile View',
    styles: {
      width: '360px',
      height: '640px',
    },
    type: 'mobile',
  },
  MEDIUM: {
    name: 'Tablet View',
    styles: {
      width: '960px',
      height: '640px',
    },
    type: 'tablet',
  },
};

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      viewports: {
        ...CUSTOM_VIEWPORTS,
        ...INITIAL_VIEWPORTS,
      },
    },
    backgrounds: {
      disable: true,
      grid: {
        disable: true,
      },
    },
  },
  decorators: [
    (Story) => (
      <div
        className={`bg-white tracking-tight text-gray-900 antialiased dark:bg-slate-900 dark:text-slate-300 ${customFont.variable} font-sans`}
      >
        <Story />
      </div>
    ),
    withThemeByClassName<ReactRenderer>({
      themes: {
        light: '',
        dark: 'dark',
      },
      defaultTheme: 'light',
    }),
  ],
};

export default preview;
