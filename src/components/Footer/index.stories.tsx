import type { Meta, StoryObj } from '@storybook/react';

import { Footer as Component } from '.';

const meta: Meta<typeof Component> = {
  component: Component,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof Component>;

export const ShowMenu: Story = {};
