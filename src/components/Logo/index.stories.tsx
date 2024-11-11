import type { Meta, StoryObj } from '@storybook/react';

import { Logo as Component } from '.';

const meta: Meta<typeof Component> = {
  component: Component,
  args: {
    color: 'white',
  },
};

export default meta;

type Story = StoryObj<typeof Component>;

export const ColorWhite: Story = {
  args: {
    color: 'white',
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export const ColorBlack: Story = {
  args: {
    color: 'black',
  },
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
};
