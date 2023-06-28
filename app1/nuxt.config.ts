import { createResolver } from '@nuxt/kit'
const { resolve } = createResolver(import.meta.url);


// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: ['../base', '../checkout'],
  css: ['@base/assets/css/base.css', resolve('./assets/css/theme.css')]
})
