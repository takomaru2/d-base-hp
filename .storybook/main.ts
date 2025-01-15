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
    '@storybook/addon-viewport',
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

    // SVG対応(https://react-svgr.com/docs/next/)
    config.module = config.module || {};
    config.module.rules = config.module.rules || [];

    const imageRule = config.module.rules.find((rule) =>
      rule?.['test']?.test('.svg'),
    );
    if (imageRule) {
      imageRule['exclude'] = /\.svg$/;
    }

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  staticDirs: ['../public'],
};
export default config;
