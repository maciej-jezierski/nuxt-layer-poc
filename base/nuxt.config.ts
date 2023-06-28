import { createResolver } from '@nuxt/kit'
const { resolve } = createResolver(import.meta.url);

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [resolve('./assets/css/base.css')],
  alias: {
    '@base': resolve('./')
  },
  modulesDir: [
    '../node-modules'
  ],
})
