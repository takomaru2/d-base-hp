import { Meta, StoryObj } from '@storybook/react';
import { BeforeAfterSpCard as Component } from '.';

const meta: Meta<typeof Component> = {
  component: Component,
};

export default meta;

type Story = StoryObj<typeof Component>;

export const BeforeCard: Story = {
  args: {
    title: 'Before',
    reverse: false,
  },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'light',
    },
  },
};

export const AfterCard: Story = {
  args: {
    title: 'After',
    description: '200,000\n全3週間',
    reverse: false,
  },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'light',
    },
  },
};

export const AfterCardReverse: Story = {
  args: {
    title: 'After',
    description: '200,000\n全3週間',
    reverse: true,
  },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'light',
    },
  },
};
