export default defineNuxtConfig({
  css: ['@/assets/css/roboto.css'],
  modules: [
    [
      '@storyblok/nuxt',
      {
        accessToken: 'etI0A6nyrTI8QdC51tLXZgtt',
        apiOptions: {
           region: '' // Set 'US" if your space is created in US region (EU default)
        }
      },
    ],
    '@nuxtjs/tailwindcss',
  ],
  vite: {
    optimizeDeps: { exclude: ["fsevents"] }
  }
})
