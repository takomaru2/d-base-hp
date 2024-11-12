import type { StorybookConfig } from '@storybook/nextjs';
import path from 'node:path';
import { webpack } from 'next/dist/compiled/webpack/webpack';
import Configuration = webpack.Configuration;

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|ts|jsx|tsx)'],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  webpackFinal: async (config: Configuration) => {
    // tsconfig.jsonと同様のパスエイリアスをWebpackのエイリアスに追加
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, '../src'),
    };
    config.resolve.modules = [path.resolve(__dirname, '..'), 'node_modules'];
    return config;
  },
};
export default config;
