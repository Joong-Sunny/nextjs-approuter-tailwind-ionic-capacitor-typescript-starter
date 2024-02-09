/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '',
  images: {
    domains: ['images.unsplash.com'],
  },
  swcMinify: true,
  transpilePackages: ['@ionic/react', '@ionic/core', '@stencil/core', 'ionicons'],
  // output: 'export', // for capacitor, disable this when you develop with web
  distDir: 'out',
  trailingSlash: true,
};

module.exports = nextConfig;
