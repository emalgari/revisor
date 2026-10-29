import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.js');

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  poweredByHeader: false,
  async rewrites() {
    const api = process.env.API_INTERNAL_URL || 'http://127.0.0.1:8000';
    return [{source: '/api/v1/:path*', destination: `${api}/api/v1/:path*`}];
  }
};

export default withNextIntl(nextConfig);
