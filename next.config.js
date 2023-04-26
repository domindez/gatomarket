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

// Utiliza la sintaxis de exportación de CommonJS
module.exports = { ...nextConfig, ...withSitemap }
