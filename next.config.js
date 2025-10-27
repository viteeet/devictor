/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
  },
  // Otimizações para produção
  compress: true,
  poweredByHeader: false,
};

module.exports = nextConfig;
