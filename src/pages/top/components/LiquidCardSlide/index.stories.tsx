import type { Meta, StoryObj } from '@storybook/react';

import { LiquidCardSlide as Component } from '.';
import { liquidSlideItemList } from '@/pages/top/components/LiquidCardSlide/const/liquidSlideItemList';

const meta: Meta<typeof Component> = {
  component: Component,
  args: {
    swipeList: liquidSlideItemList,
  },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'light',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Component>;

export const Default: Story = {};
