import { ImageList as Component } from '.';
import { Meta, StoryObj } from '@storybook/react';
import topView01 from '@/../public/assets/top/topView01.jpg';
import topView02 from '@/../public/assets/top/topView02.jpg';
import topView03 from '@/../public/assets/top/topView03.jpg';

const meta: Meta<typeof Component> = {
  component: Component,
  args: {
    activeIndex: 1,
    topViewImageList: [
      { id: '1', image: topView01 },
      { id: '2', image: topView02 },
      { id: '3', image: topView03 },
    ],
  },
};

export default meta;

type Story = StoryObj<typeof Component>;

export const Default: Story = {};
