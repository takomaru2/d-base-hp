import type { Meta, StoryObj } from '@storybook/react';

import { ButtonLink as Component } from './index';

const meta: Meta<typeof Component> = {
  component: Component,
};

export default meta;

type Story = StoryObj<typeof Component>;

export const MoreButton: Story = {
  args: {
    link: '/',
    children: '詳しく見る',
  },
};

export const PriceButton: Story = {
  args: {
    link: '/',
    children: '詳しい価格表を見る',
  },
};
