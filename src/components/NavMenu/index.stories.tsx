import type { Meta, StoryObj } from '@storybook/react';

import { NavMenu as Component } from '.';

const meta: Meta<typeof Component> = {
  component: Component,
};

export default meta;

type Story = StoryObj<typeof Component>;

export const NavMenu: Story = {
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};
