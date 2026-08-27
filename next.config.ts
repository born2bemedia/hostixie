import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/:locale/web-hosting',
        destination: '/:locale/advertising-services',
        permanent: true,
      },
      {
        source: '/:locale/web-development',
        destination: '/:locale/marketing-communications',
        permanent: true,
      },
    ];
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
