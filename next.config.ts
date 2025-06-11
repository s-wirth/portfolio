import type { NextConfig } from "next";

// const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  images: {
    loader: 'imgix',
    unoptimized: true,
    path: '../',
  },
  reactStrictMode: false,
  trailingSlash: true,
  assetPrefix: '',
  basePath: '',
  output: 'export',
};
export default nextConfig;
