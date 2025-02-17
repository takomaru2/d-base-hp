import type { Meta, StoryObj } from '@storybook/react';

import { CraftDescription as Component } from '.';

const meta: Meta<typeof Component> = {
  component: Component,
  args: {
    title: '特徴',
    children:
      'ガラス成分９４％の純度の高いベースコートにナノセラミックのトップコートを重ねる２層+有機質のポリマーレジン１層を追加し完成するコーティングです。\n雨染みの元となる酸化成分や油分を一切使用せずさらにポリマーレジン層を犠牲被膜にすることで徹底的に雨染みを防ぐことができます。\n耐久性も７年と当店のラインナップの中で最長で\n使用した感想は車の色が変わるほどの深い艶と膜厚感があります。\n全ての項目に満点をつけたくなりますが特に艶感と耐久性に特化しています。\nまた積層可能ですのでベースを塗り重ねれば耐久性、膜厚感が向上し、トップを塗り重ねれば艶の向上、さらに傷の自己修復機能まで生まれます。\nモニターパネルを用意してあるので効果の違いを確かめたい方はお気軽にご相談下さい。',
  },
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof Component>;

export const Default: Story = {};
