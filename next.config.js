/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '',
  images: {
    domains: ['images.unsplash.com'],
  },
  swcMinify: true,
  transpilePackages: ['@ionic/react', '@ionic/core', '@stencil/core', 'ionicons'],
  output: 'export',
  distDir: 'out',
  trailingSlash: true,
};

module.exports = nextConfig;