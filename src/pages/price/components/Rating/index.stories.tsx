import { Rating as Component } from './index';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Component> = {
  component: Component,
  args: {
    title: '耐床オナ性',
    starLevel: 4,
  },
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof Component>;

export const Default: Story = {};
