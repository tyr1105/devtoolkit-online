import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/devtoolkit-online',
  images: {
    unoptimized: true,
  },
};
export default nextConfig;
