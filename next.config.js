/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  publicRuntimeConfig: {
    staticFolder: '/public'
  }
};

(async () => {
  const withSitemap = (await import('next-sitemap')).default(require('./next-sitemap.js'))
  module.exports = { ...nextConfig, ...withSitemap }
})()
