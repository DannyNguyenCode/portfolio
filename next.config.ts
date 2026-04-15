import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [72, 75],
    deviceSizes: [
      360, 480, 560, 640, 750, 828, 1080, 1200, 1920, 2048, 3840,
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
