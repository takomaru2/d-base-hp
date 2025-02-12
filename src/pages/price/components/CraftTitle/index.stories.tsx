import type { Meta, StoryObj } from '@storybook/react';

import { CraftTitle as Component } from '.';

const meta: Meta<typeof Component> = {
  component: Component,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Component>;

export const Default: Story = {};
