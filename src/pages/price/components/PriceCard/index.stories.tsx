import { PriceCard as Component } from './index';
import { Meta, StoryObj } from '@storybook/react';
import {
  ns10hNew,
  priceCardText,
} from '@/pages/price/components/PriceCard/const/priceCardList';

const meta: Meta<typeof Component> = {
  component: Component,
  args: { priceCardText: priceCardText, priceList: ns10hNew },
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof Component>;

export const Default: Story = {};
