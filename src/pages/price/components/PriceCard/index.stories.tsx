import { PriceCard as Component } from './index';
import { Meta, StoryObj } from '@storybook/react';
import { priceCardList } from '@/pages/price/components/PriceCard/const/priceCardList';

const meta: Meta<typeof Component> = {
  component: Component,
  args: { list: priceCardList },
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof Component>;

export const Default: Story = {};
