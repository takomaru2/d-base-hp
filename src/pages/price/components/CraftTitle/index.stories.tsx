import type { Meta, StoryObj } from '@storybook/react';

import { CraftTitle as Component } from '.';

const meta: Meta<typeof Component> = {
  component: Component,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Component>;

export const Default: Story = {
  args: {
    title: 'NS-10H',
    description:
      '圧倒的な艶と持続する強靭な保護力。\n最高峰の露天駐車対応コーティング',
  },
};
