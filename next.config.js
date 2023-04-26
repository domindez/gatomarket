/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  publicRuntimeConfig: {
    staticFolder: '/public'
  }
}

const withSitemap = require('next-sitemap')(require('./next-sitemap.js'))

// eslint-disable-next-line import/no-anonymous-default-export
export default { ...nextConfig, ...withSitemap }
