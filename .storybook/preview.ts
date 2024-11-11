import type { Preview } from '@storybook/react';
import '../src/styles/globals.scss';
import '../src/styles/_variables.scss';

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#f8f8f5',
        },
        {
          name: 'dark',
          value: '#1c1c1c',
        },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  tags: ['autodocs'],
};

export default preview;
