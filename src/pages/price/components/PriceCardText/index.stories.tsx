import { PriceCardText as Component } from './index';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Component> = {
  component: Component,
  args: {
    title: 'entry',
    text: '推奨: 新車～登録3ヶ月\n低価格でコーティングの効果を重視する方におすすめ。ボディ全面を塗装の負担なく研磨します。',
  },
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof Component>;

export const Default: Story = {};
