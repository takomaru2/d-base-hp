import { Meta, StoryObj } from '@storybook/react';
import { BeforeAfterPcCard as Component } from '.';
import image from '@/../public/assets/top/works/beforeafter-pc.jpg';

const meta: Meta<typeof Component> = {
  component: Component,
  args: {
    model: 'SUZUKI Jimny',
    image: image,
  },
};

export default meta;

type Story = StoryObj<typeof Component>;

export const Default: Story = {
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'light',
    },
  },
};
