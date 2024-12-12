/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
}

module.exports = {
  webpack: (config) => {
    config.resolve.alias['@splinetool/react-spline'] = require.resolve('@splinetool/react-spline/dist/index.mjs');
    return config;
  },
};
