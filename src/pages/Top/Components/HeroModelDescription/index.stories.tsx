import { Meta, StoryObj } from '@storybook/react';
import { HeroModelDescription as Component } from '.';

const meta: Meta<typeof Component> = {
  component: Component,
  args: {
    model: 'string',
    craft: 'string',
    pricing: 'string',
  },
};

export default meta;

type Story = StoryObj<typeof Component>;

export const Default: Story = {};
