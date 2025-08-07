// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  ssr: true,
  modules: [
    "@nuxt/image",
    "@nuxt/fonts",
    "@nuxt/eslint",
    "@nuxtjs/sitemap",
    "@nuxtjs/google-fonts",
    "shadcn-nuxt",
  ],
  css: ["~/assets/css/main.css"],
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
  googleFonts: {
    families: {
      Montserrat: [300, 400, 500, 600, 700],
      "JetBrains+Mono": true, // untuk kode
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: "",
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: "./components/ui",
  },
  alias: {
    lucide: "lucide-vue-next",
  },
  app: {
    head: {
      htmlAttrs: {
        lang: "id",
      },
    },
  },
});
