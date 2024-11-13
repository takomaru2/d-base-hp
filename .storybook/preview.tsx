import type { Preview } from '@storybook/react';
import '@/styles/globals.scss';
import '@/styles/variables.scss';
import 'ress';
import Head from 'next/head';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'dark',
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
  },
  decorators: [
    (Story) => (
      <>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Revalia&family=Russo+One&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Story />
      </>
    ),
  ],
  tags: ['autodocs'],
};

export default preview;
