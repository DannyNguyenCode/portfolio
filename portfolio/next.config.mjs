/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        esmExternals: "loose", // <-- add this
        serverComponentsExternalPackages: ["mongoose"], // <-- and this
        instrumentationHook: true, // allows connect to database to run once
      },
      images: {
        remotePatterns: [
          { protocol: "https", hostname: "res.cloudinary.com" }
        ],
        
        
    },
      // and the following to enable top-level await support for Webpack
      webpack: (config) => {
        config.experiments = {
            ...config.experiments,
            topLevelAwait: true
        };
        return config;
      },
};

export default nextConfig;
