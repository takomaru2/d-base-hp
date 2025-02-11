import { CardButtonLink as Component } from './index';
import { Meta, StoryObj } from '@storybook/react';
import image from '@/../public/assets/price/cardPolymer.jpg';

const meta: Meta<typeof Component> = {
  component: Component,
  args: {
    craft: 'NH-10H',
    image: image,
    price: '¥ 134,100~',
    text: '青空駐車専用圧倒的なコスパ\nとっても綺麗！！',
  },
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof Component>;

export const Default: Story = {};
