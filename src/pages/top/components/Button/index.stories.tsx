import type { Meta, StoryObj } from '@storybook/react';

import { Button as Component } from '.';

const meta: Meta<typeof Component> = {
  component: Component,
};

export default meta;

type Story = StoryObj<typeof Component>;

export const MoreButton: Story = {
  args: {
    label: 'normal',
    link: '/',
  },
};

export const PriceButton: Story = {
  args: {
    label: 'price',
    link: '/',
  },
};
