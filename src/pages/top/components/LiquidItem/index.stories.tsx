import item1 from '../../../../../public/assets/top/liquidItem/item1.jpg';
import type { Meta, StoryObj } from '@storybook/react';

import { LiquidItem as Component } from '.';

const meta: Meta<typeof Component> = {
  component: Component,
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Component>;

export const Default: Story = {
  args: {
    src: item1,
    alt: '液剤',
    title: 'NS-10H',
    text: (
      <>
        雨染みの元を徹底的に排除した
        <br />
        青空駐車専用コーティング。 <br />
        3層コーティングからなる圧倒的な艶と耐久性
      </>
    ),
  },
};
