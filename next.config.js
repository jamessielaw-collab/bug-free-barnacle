/** @type {import('next').NextConfig} */
const nextConfig = {
  // Essential for Replit environment
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-cache, no-store, must-revalidate, proxy-revalidate',
          },
          {
            key: 'Pragma',
            value: 'no-cache',
          },
          {
            key: 'Expires',
            value: '0',
          },
        ],
      },
    ]
  },
  // Allow all external hosts for Replit proxy environment
  async rewrites() {
    return []
  },
}

module.exports = nextConfig