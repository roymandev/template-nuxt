// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxtjs/eslint-module'],
  typescript: {
    typeCheck: true,
    strict: true
  }
})
