import { Meta, StoryObj } from '@storybook/react';
import { BeforeAfterSpCard as Component } from '.';
import before from '../../../public/assets/top/works/before.jpg';

const meta: Meta<typeof Component> = {
  component: Component,
};

export default meta;

type Story = StoryObj<typeof Component>;

export const BeforeCard: Story = {
  args: {
    title: 'Before',
    reverse: false,
    image: before,
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
    image: before,
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
    image: before,
  },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'light',
    },
  },
};
