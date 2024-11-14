import type { Meta, StoryObj } from '@storybook/react';

import { PcMenuList as Component } from '.';

const meta: Meta<typeof Component> = {
  component: Component,
};

export default meta;

type Story = StoryObj<typeof Component>;

export const PcMenu: Story = {
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};
