import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fakestoreapi.com',
        port: '',
        search: ''
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        port: '',
        search: ''
      }
    ]
  }
};

export default nextConfig;
