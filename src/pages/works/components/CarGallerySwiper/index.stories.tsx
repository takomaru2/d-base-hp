import { CarGallerySwiper as Component } from './index';
import { Meta, StoryObj } from '@storybook/react';
import { swiperItemList } from '@/pages/works/const/swiperItemList01';

const meta: Meta<typeof Component> = {
  component: Component,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    swiperItem: swiperItemList,
  },
};

export default meta;

type Story = StoryObj<typeof Component>;

export const Default: Story = {};
