/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  publicRuntimeConfig: {
    staticFolder: '/public'
  }
}
const withSitemap = require('next-sitemap')(
  require('./next-sitemap.js')
)

module.exports = withSitemap({})
module.exports = nextConfig
