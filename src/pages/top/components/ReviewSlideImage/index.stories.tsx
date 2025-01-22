import { Meta, StoryObj } from '@storybook/react';
import { ReviewSlideImage as Component } from '.';
import image1 from '@/../public/assets/top/works/worksImage01.jpg';

const meta: Meta<typeof Component> = {
  component: Component,
  args: {
    image: image1,
    alt: '施工後の利用者の車外観',
    style: {
      width: '500px',
      height: '710px',
      right: '300px',
      zIndex: 10,
    },
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
