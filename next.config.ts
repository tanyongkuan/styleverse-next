import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      // NextJS <Image> component needs to whitelist domains for src={}
      'fakestoreapi.com'
    ]
  }
};

export default nextConfig;
