import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n.js');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '*.convex.cloud', pathname: '/**' },
      { protocol: 'https', hostname: '*.convex.site', pathname: '/**' },
    ],
  },
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
};

export default withNextIntl(nextConfig);
