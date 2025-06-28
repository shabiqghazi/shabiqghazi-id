// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  ssr: true,
  modules: [
    "@nuxt/image",
    "@nuxt/fonts",
    "@nuxt/eslint",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/sitemap",
  ],
  runtimeConfig: {
    public: {
      apiBaseURL: process.env.API_BASE_URL,
      apiMediaURL: process.env.API_MEDIA_URL,
      siteURL: process.env.SITE_URL,
    },
  },
  nitro: {
    compressPublicAssets: true,
  },
  sitemap: {
    sources: ["/api/__sitemap__/urls"],
  },
});
