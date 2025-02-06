import { CarGallerySwiper as Component } from './index';
import { Meta, StoryObj } from '@storybook/react';
import { swiperItemList01 } from '@/pages/works/components/CarGallery/const/carGalleryData';

const meta: Meta<typeof Component> = {
  component: Component,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    swiperItem: swiperItemList01,
  },
};

export default meta;

type Story = StoryObj<typeof Component>;

export const Default: Story = {};
