import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  pageExtensions: ['page.tsx'],
  webpack: (config) => {
    config.resolve.alias['pages/index.page'] = path.join(
      __dirname,
      'pages/Top/index.page',
    );
    return config;
  },
};

export default nextConfig;
