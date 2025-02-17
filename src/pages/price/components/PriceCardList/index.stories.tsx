import { PriceCardList as Component } from '.';
import { Meta, StoryObj } from '@storybook/react';
import { priceCardListNs10h } from '@/pages/price/components/PriceCard/const/priceCardList';

const meta: Meta<typeof Component> = {
  component: Component,
  args: {
    cardList: priceCardListNs10h,
  },
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof Component>;

export const Default: Story = {};
