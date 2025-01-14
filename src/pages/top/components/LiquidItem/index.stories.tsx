import type { Meta, StoryObj } from '@storybook/react';

import { LiquidItem as Component } from '.';

const meta: Meta<typeof Component> = {
  component: Component,
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Component>;

export const Default: Story = {};
