/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'standalone', // You can keep or remove this line based on your deployment needs
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.mdx?$/,
      use: [
        {
          loader: '@mdx-js/loader',
          /** @type {import('@mdx-js/loader').Options} */
          options: {
            providerImportSource: '@mdx-js/react',
          },
        },
      ],
    });
    return config;
  },
};

export default nextConfig;
