import { Meta, StoryObj } from '@storybook/react';
import { SectionTitle as Component } from '.';

const meta: Meta<typeof Component> = {
  component: Component,
  args: {
    jpTitle: '施工実績',
    enTitle: 'Works',
    color: 'black',
  },
};

export default meta;

type Story = StoryObj<typeof Component>;
export const WhiteSectionTitle: Story = {
  args: {
    jpTitle: '価格表',
    enTitle: 'Price',
    color: 'white',
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export const BlackSectionTitle: Story = {
  args: {
    jpTitle: '価格表',
    enTitle: 'Price',
    color: 'black',
  },
};
