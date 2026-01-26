// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  ssr: false,
  css: ["~/styles/globals.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  plugins: ["~/plugins/spline-viewer.client.ts"],
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => {
        return tag === "spline-viewer";
      },
    },
  },
  nitro: {
    static: true,
    compressPublicAssets: true,
  },
  vite: {
    build: {
      minify: 'terser',
    },
  },
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/i18n'
  ],
  i18n: {
    locales: [
      { code: 'en', iso: 'en-US', file: 'en.json' },
      { code: 'fr', iso: 'fr-FR', file: 'fr.json' }
    ],
    langDir: './',
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root'
    }
  }
});
