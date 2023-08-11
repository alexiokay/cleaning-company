import { defineStore } from "pinia";

import { createPinia } from "pinia";
import uniqid from "uniqid";
import { useStorage } from "@vueuse/core";

const pinia = createPinia();
import { useUserStore } from "./User";
export const useCookiesStore = defineStore("cookiesStore", {
  state: () => {
    return {
      // cookies settings
      isCookiesSet: false,
      acceptedCookies: {
        necessary: true,
        functional: false,
        analytics: false,
        performance: false,
        advertisement: false,
        others: false,
      } as Record<string, boolean>,
    };
  },
  getters: {
    getAnalitycs: (state) => {
      return state.acceptedCookies.analytics;
    },
    getPerformance: (state) => {
      return state.acceptedCookies.performance;
    },
    getAdvertisement: (state) => {
      return state.acceptedCookies.advertisement;
    },
  },
  actions: {},
  persist: {
    storage: persistedState.cookies,
    // only save isCookiesSet as cookie
  },
  // other options...
});

export default pinia;
