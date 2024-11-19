import type { Meta, StoryObj } from '@storybook/react';

import { PricingCard as Component } from '.';

const meta: Meta<typeof Component> = {
  component: Component,
};

export default meta;

type Story = StoryObj<typeof Component>;

export const Default: Story = {
  args: {
    title: '新車〜登録３ヶ月',
    text:
      '低価格でコーティングの効果を重視するあなたにおすすめ。\n' +
      'ボディ全面を塗装の負担なく研磨します',
    price: '104,500',
  },
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
};

export const Custom: Story = {
  args: {
    title: '経年車',
    text:
      '最高の艶が出るまで無制限に研磨します。\n' +
      'ボディ全面はもちろんピラーやドア内まで徹底的に磨きます。',
    price: '127,000',
  },
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
};
