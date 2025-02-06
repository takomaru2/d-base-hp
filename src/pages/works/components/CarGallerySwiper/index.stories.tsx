import { CarGallerySwiper as Component } from './index';
import { Meta, StoryObj } from '@storybook/react';
import image1 from '@/../public/assets/works/carGallery01.jpg';
import image2 from '@/../public/assets/works/carGallery02.jpg';
import image3 from '@/../public/assets/works/carGallery03.jpg';
import { SwiperItem } from '@/pages/works/components/CarGallery/const/carGalleryData';

const swiperItemList: SwiperItem[] = [
  { id: '1', image: image1 },
  { id: '2', image: image2 },
  { id: '3', image: image3 },
];
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
