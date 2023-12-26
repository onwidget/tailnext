import type { Meta, StoryObj } from '@storybook/react';

import Component from '~/components/widgets/Testimonials2';
import { testimonials2About as mockData } from '~/shared/data/pages/about.data';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Widgets/Testimonials2',
  component: Component,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Base: Story = {
  args: {
    ...mockData,
    hasBackground: false,
  },
};

export const WithBackground: Story = {
  args: {
    ...mockData,
    hasBackground: true,
  },
};

export const Mobile: Story = {
  args: {
    ...mockData,
  },
  parameters: {
    viewport: {
      defaultViewport: 'SMALL',
    },
  },
};
