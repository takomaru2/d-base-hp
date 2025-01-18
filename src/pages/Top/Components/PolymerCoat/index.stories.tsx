import type { Meta, StoryObj } from '@storybook/react';

import { PolymerCoat as Component } from '.';

const meta: Meta<typeof Component> = {
  component: Component,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof Component>;

export const MoreButton: Story = {
  args: {
    label: 'ポリマーコート',
    backgroundImage: '/assets/top/price/polymerCoatBackImage.jpg',
  },
};
