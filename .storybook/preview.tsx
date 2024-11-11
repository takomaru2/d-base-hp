import type { Preview } from '@storybook/react';
import '../src/styles/globals.scss';
import '../src/styles/_variables.scss';
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
  },
  decorators: [
    (Story) => (
      <>
        <Head>
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
