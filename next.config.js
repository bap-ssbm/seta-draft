/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en', 'ja'],
    defaultLocale: 'ja',
  },
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['images.pexels.com'],
  }
}

module.exports = nextConfig
