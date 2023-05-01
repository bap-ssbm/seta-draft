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

  async exportPathMap(defaultPathMap) {
    return Object.keys(defaultPathMap).reduce((pathMap, path) => {
      const localizedPaths = ['/en', '/ja'].map((locale) => ({
        params: { lng: locale.slice(1) },
        query: { __nextLocale: locale.slice(1), __nextDefaultLocale: 'ja' },
        locale,
        as: `${locale}${path}`,
      }));

      return {
        ...pathMap,
        [path]: { page: path, ...localizedPaths.reduce((_, path) => ({ ..._, [path.locale]: path }), {}) },
      };
    }, {});
  },
}

module.exports = nextConfig
