import { defineNuxtConfig } from "nuxt/config";
import Icons from "unplugin-icons/vite";
import { IntlifyModuleOptions } from "@intlify/nuxt3";

declare module "@nuxt/schema" {
  interface NuxtConfig {
    intlify?: IntlifyModuleOptions;
  }
}
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/content",
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore", "acceptHMRUpdate", "useStore"],
      },
    ],
    "@pinia-plugin-persistedstate/nuxt",
    "@intlify/nuxt3",
    "@nuxt/image",
    "unplugin-icons/nuxt",
    "nuxt-simple-sitemap",
    "nuxt-simple-robots",
    ["@storyblok/nuxt", { accessToken: process.env.STORYBLOK_TOKEN }],
    "nuxt-swiper",
  ],

  image: {
    domains: [process.env.FRONTEND_URL as string],
    format: ["webp"],
    storyblok: {
      baseURL: "https://a.storyblok.com",
    },
  },

  swiper: {
    // Swiper options
    //----------------------
    // prefix: 'Swiper',
    // styleLang: 'css',
    // modules: ['navigation', 'pagination'], // all modules are imported by default
  },

  build: {
    transpile: ["@headlessui/vue"],
  },

  content: {
    // https://content.nuxtjs.org/api/configuration
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ["/", "/sitemap.xml", "/robots.txt"],
    },
  },

  routeRules: {
    // Static page generated on-demand, revalidates in background (ISG)
    "/**": { ssr: true },
    "/cart": { ssr: false },
    // Static page generated on-demand once (SSG - or at least mighty close) { static: true },

    // Render these routes on the client (SPA) { ssr: false },
  },
  intlify: {
    localeDir: "locales",
    vueI18n: {
      locale: "en",
      fallbackLocale: "en",
      availableLocales: ["en", "pl"],
    },
  },

  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title:
        "Top Cleaning Services in Netherlands | Expert House, Office, and Floor Cleaning",
      meta: [
        // <meta name="description" content="My amazing site">
        {
          hid: `description`,
          name: "description",
          content:
            "Discover professional cleaning services for homes, offices, cars, and commercial spaces. Our experts provide comprehensive solutions, including house cleaning, office maintenance, and floor care. Enhance your surroundings with our trusted cleaning solutions. Contact us for a sparkling clean space!",
        },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/images/favicon.ico" },
      ],
    },
  },

  css: ["@/assets/css/styles.css"],

  vite: {
    plugins: [
      Icons({
        // the feature below is experimental ⬇️
        autoInstall: true,
      }),
    ],
  },

  runtimeConfig: {
    TWILIO_ACCOUNT_SID: process.env.TWILIO_ACCOUNT_SID,
    TWILIO_AUTH_TOKEN: process.env.TWILIO_AUTH_TOKEN,
    TWILIO_SHORT_NAME: process.env.TWILIO_SHORT_NAME,
    TWILIO_PHONE_NUMBER: process.env.TWILIO_PHONE_NUMBER,

    public: {
      cwd: process.cwd(),
      BASE_URL: process.env.BASE_URL,
      API_TOKEN: process.env.API_TOKEN,
      API_URL: process.env.API_URL,
      HOST: process.env.HOST,
      FETCH_HOST: process.env.FETCH_HOST,

      gtm_id: process.env.GOOGLE_TAG_MANAGER_ID,
      gtm_enabled: process.env.GOOGLE_TAG_MANAGER_ENABLED,
      gtm_debug: process.env.GOOGLE_TAG_MANAGER_DEBUG,
    },
  },
});
