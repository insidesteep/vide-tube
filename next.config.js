
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    PORT: process.env.PORT,
  },
  webpack: (config) => {
    config.experiments = {
      topLevelAwait: true,
    }
    return config
  },
};

module.exports = nextConfig;
