import { Meta, StoryObj } from '@storybook/react';

import { AccessSection as Component } from '.';

const meta: Meta<typeof Component> = {
  component: Component,
};
export default meta;

type Story = StoryObj<typeof Component>;

export const Default: Story = {};