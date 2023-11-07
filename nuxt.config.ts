// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
    '@nuxtjs/eslint-module',
    '@nuxt/image',
    '@nuxtjs/google-fonts',
  ],
  typescript: {
    typeCheck: true,
    strict: true,
  },
  googleFonts: {
    families: {
      Rubik: true,
    },
    subsets: ['latin'],
    display: 'swap',
  },
});
