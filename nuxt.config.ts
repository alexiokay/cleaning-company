import { defineNuxtConfig } from "nuxt/config";
import Icons from "unplugin-icons/vite";
import { IntlifyModuleOptions } from "@intlify/nuxt3";
import svgLoader from "vite-svg-loader";

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
    "@samk-dev/nuxt-vcalendar",
    "nuxt-vue3-google-signin",
  ],

  googleSignIn: {
    clientId:
      "390010756532-tt4797df9h8arjmnsa0qjcamud9svjjd.apps.googleusercontent.com",
  },

  auth: {
    // The module is enabled. Change this to disable the module
    isEnabled: true,
    // The origin is set to the development origin. Change this when deploying to production by setting `origin` in this config before build-time or by exporting `AUTH_ORIGIN` by running `export AUTH_ORIGIN=...`
    origin: "http://127.0.0.1:8001",
    // The base path to the authentication endpoints. Change this if you want to add your auth-endpoints at a non-default location
    basePath: "/api/auth",
    // Whether to periodically refresh the session. Change this to `true` for a refresh every seconds or set this to a number like `5000` for a refresh every 5000 milliseconds (aka: 5 seconds)
    enableSessionRefreshPeriodically: false,
    // Whether to refresh the session whenever a window focus event happens, i.e, when your user refocuses the window. Set this to `false` to turn this off
    enableSessionRefreshOnWindowFocus: true,
    // Whether to add a global authentication middleware that will protect all pages without exclusion
    globalAppMiddleware: false,
    // Select the default-provider to use when `signIn` is called. Setting this here will also effect the global middleware behavior: E.g., when you set it to `github` and the user is unauthorized, they will be directly forwarded to the Github OAuth page instead of seeing the app-login page
    defaultProvider: undefined,
    // Whether to automatically set the callback url to the page the user tried to visit when the middleware stopped them. This is useful to disable this when using the credentials provider, as it does not allow a `callbackUrl`. Setting this to a string-value will result in that being used as the callbackUrl path.
    addDefaultCallbackUrl: true,
    // Configuration of the global auth-middleware (only applies if you set `globalAppMiddleware: true` above!)
    globalMiddlewareOptions: {
      // Whether to allow access to 404 pages without authentication. Set this to `false` to force users to sign-in before seeing `404` pages. Setting this to false may lead to vue-router problems (as the target page does not exist)
      allow404WithoutAuth: true,
      // Whether to automatically set the callback url to the page the user tried to visit when the middleware stopped them. This is useful to disable this when using the credentials provider, as it does not allow a `callbackUrl`. Setting this to a string-value will result in that being used as the callbackUrl path. Note: You also need to set the global `addDefaultCallbackUrl` setting to `false` if you want to fully disable this for the global middleware.
      addDefaultCallbackUrl: true,
    },
  },

  image: {
    domains: [
      process.env.FRONTEND_URL as string,
      "localhost:3000",
      "127.0.0.1:8001",
      "backend.freshandtidy.nl",
      "amazonaws.com",
    ],
    format: ["webp"],
    provider: "twicpics",
    ipx: {
      dir: "public",
    },
    storyblok: {
      baseURL: "https://a.storyblok.com",
    },
    twicpics: {
      baseURL: "https://freshandtidy.twic.pics/",
      // Feel free to use our demo domain to try the following examples.
      // baseUrl: 'https://demo.twic.pics/'
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
      failOnError: false,
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
      svgLoader(),
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
      CHATBOT_URL: process.env.CHATBOT_URL,

      gtm_id: process.env.GOOGLE_TAG_MANAGER_ID,
      gtm_enabled: process.env.GOOGLE_TAG_MANAGER_ENABLED,
      gtm_debug: process.env.GOOGLE_TAG_MANAGER_DEBUG,
    },
  },
});
