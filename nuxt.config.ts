// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  
    modules: [
      '@nuxtjs/tailwindcss',
      '@nuxtjs/google-fonts',
      'nuxt-icon',
      '@nuxt/content',
    ],
    content: {
    googleFonts :{
      families :{
        Inter: [400, 500, 600, 700, 800, 900],
        Merriweather: [400, 700],
      }
    }
    }
})
