import { Meta, StoryObj } from '@storybook/react';
import { ReviewComment as Component } from '.';

const meta: Meta<typeof Component> = {
  component: Component,
  args: {
    model: 'SUZUKI\nJimny',
    comment:
      '思わず抱きしめたくなるような肉感溢れるヘルシースレンダーなもっちり美肌に仕上がりました。綺麗系か可愛い系のどちらかと問われると両方です。',
  },
  decorators: [
    (Story) => (
      <div style={{ color: 'black' }}>
        <Story />
      </div>
    ),
  ],
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
