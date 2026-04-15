import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * Inline route CSS into HTML (shorter critical path vs document → linked .css).
   * Requires the Webpack builder — use `next dev --webpack` / `next build --webpack`
   * (see package.json). Turbopack still emits a separate CSS chunk, so Lighthouse on
   * default Turbopack dev will show a stylesheet chain.
   */
  experimental: {
    inlineCss: true,
  },
  images: {
    /** Allow `quality={72}` on `<Image>` (e.g. Eevee teaser) alongside the default 75. */
    qualities: [72, 75],
    /** Finer steps so `sizes`-matched widths don’t jump to 828 / 1080 when ~360 / 576px suffice. */
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
