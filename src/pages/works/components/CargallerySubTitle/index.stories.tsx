import { CarGallerySubTitle as Component } from './index';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Component> = {
  component: Component,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    title: '使用液剤',
    description: 'FITR-103',
  },
};

export default meta;

type Story = StoryObj<typeof Component>;

export const Default: Story = {};
