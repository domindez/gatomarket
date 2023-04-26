/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  publicRuntimeConfig: {
    staticFolder: '/public'
  }
}

module.exports = nextConfig
