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
  basePath: '/[lng]',
  exportPathMap: function(defaultPathMap) {
    return {
      '/en/page': { page: '/page', query: { lng: 'en' } },
      '/ja/page': { page: '/page', query: { lng: 'ja' } },
      ...defaultPathMap
    }
  }
}

module.exports = nextConfig
