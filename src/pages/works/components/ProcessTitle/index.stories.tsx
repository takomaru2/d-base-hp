import { ProcessTitle as Component } from './index';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Component> = {
  component: Component,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    title: '01.下処理',
  },
};

export default meta;

type Story = StoryObj<typeof Component>;

export const Default: Story = {};
