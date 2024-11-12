import type { Meta, StoryObj } from '@storybook/react';

import { LearnMoreButton as Component } from '.';

const meta: Meta<typeof Component> = {
  component: Component,
  args: {
    label: 'aaa',
  },
};

export default meta;

type Story = StoryObj<typeof Component>;

export const MoreButton: Story = {
  args: {
    label: '詳しく見る',
  },
};

export const PriceButton: Story = {
  args: {
    label: '詳しい価格表を見る',
  },
};
