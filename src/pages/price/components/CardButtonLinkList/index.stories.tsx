import { CardButtonLinkList as Component } from './index';
import { Meta, StoryObj } from '@storybook/react';
import { cardButtonLinkList } from '@/pages/price/components/CardButtonLinkList/const/cardButtonLinkList';

const meta: Meta<typeof Component> = {
  component: Component,
  args: {
    cardButtonLinkListProps: cardButtonLinkList,
  },
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof Component>;

export const Default: Story = {};
