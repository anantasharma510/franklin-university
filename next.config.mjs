/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.bpp.com',
        port: '',
        pathname: '/images/**',
      },
      {
        protocol: 'https',
        hostname: 'www.uwl.ac.uk',
        port: '',
        pathname: '/themes/uwl/assets/images/**',
      },
      {
        protocol: 'https',
        hostname: 'www.roehampton.ac.uk',
        port: '',
        pathname: '/globalassets/images/branding/**',
      },
    ],
  },
}

export default nextConfig
