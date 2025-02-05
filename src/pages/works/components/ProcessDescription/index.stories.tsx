import { ProcessDescription as Component } from './index';
import { Meta, StoryObj } from '@storybook/react';
import image from '@/../public/assets/works/procedure01.jpg';

const meta: Meta<typeof Component> = {
  component: Component,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    image: image,
    text: 'コーティング前の下地処理が重要です。洗車や鉄粉除去、磨きを行い塗装面を整えることで、コーティング剤がしっかり定着し、耐久性と光沢が向上します。',
  },
};

export default meta;

type Story = StoryObj<typeof Component>;

export const Default: Story = {};
