import type { Meta, StoryObj } from '@storybook/react';

import { FAQItem as Component } from '.';

const meta: Meta<typeof Component> = {
  component: Component,
  args: {
    item: {
      id: '1',
      question: 'コーティングの期間は？',
      answer:
        '1週間から1週間くらいとなりますが、時期や車種、車の状態によっても変わることがありますので、詳しい期間についてはお問い合わせください',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Component>;

export const Default: Story = {};
