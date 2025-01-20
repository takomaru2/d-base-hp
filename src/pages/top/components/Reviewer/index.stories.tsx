import { Meta, StoryObj } from '@storybook/react';
import { Reviewer as Component } from '.';

const meta: Meta<typeof Component> = {
  component: Component,
  args: {
    slideItem: {
      title: '見違えるほど綺麗になりました！',
      reviewer: '島田　鉄平',
      craft: 'ナノセラミックコーティング・・・¥150,000',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ color: 'black' }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'light',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Component>;

export const Default: Story = {};
