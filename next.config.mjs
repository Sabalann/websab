import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n.js');

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ['next-intl', 'convex'],
  },

  // Fix 404 errors: Redirect old /prijzen URL to new /kosten URL
  async redirects() {
    return [
      {
        source: '/prijzen',
        destination: '/nl/kosten',
        permanent: true, // 301 redirect - tells Google the move is permanent
      },
      {
        source: '/nl/prijzen',
        destination: '/nl/kosten',
        permanent: true,
      },
      {
        source: '/en/prijzen',
        destination: '/en/kosten',
        permanent: true,
      },
    ];
  },
  
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

export default withNextIntl(nextConfig);
