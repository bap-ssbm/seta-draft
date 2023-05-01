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
  },
  exportPathMap: function () {
    return {
      '/': { page: '/ja' }
    }
  },
}

module.exports = nextConfig
