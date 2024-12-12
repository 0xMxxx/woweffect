/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
}

module.exports = {
  webpack: (config) => {
    config.resolve.fallback = { fs: false, path: false }; // Opcional: si `@splinetool/react-spline` requiere estos módulos
    return config;
  },
};
