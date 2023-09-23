import { CookieOption } from "./../node_modules/next-auth/core/types.d";
import { defineStore } from "pinia";
import { createPinia } from "pinia";

const pinia = createPinia();

type AccountType = "customer" | "partner" | null | "";

// @ts-ignore: Unreachable code error
export const useUserStore = defineStore("User", {
  state: () => {
    return {
      username: "",
      firstName: "",
      lastName: "",
      email: "",
      token: "",
      isLogged: false,
      is_activated: false,
      activated_by: null,
      accountType: "" as AccountType, //customer, partner
      messages: [],
      userWantsSendMessage: false,
    };
  },
  getters: {
    getMessages(state) {
      return state.messages;
    },

    getUser(state) {
      return {
        username: state.username,
        email: state.email,
        token: state.token,
        isLogged: state.isLogged,
        accountType: state.accountType,
      };
    },

    getUsername(state) {
      return state.username;
    },
    getEmail(state) {
      return state.email;
    },
    getToken(state) {
      return state.token;
    },
    getIsLogged(state) {
      return state.isLogged;
    },
    getAccountType(state) {
      return state.accountType;
    },
  },
  actions: {
    setuserWantsSendMessage(bool: boolean) {
      this.userWantsSendMessage = bool;
    },
    addMessage(message: Object) {
      this.messages = [...this.messages, message];
    },

    setUsername(username: string) {
      this.username = username;
    },
    setEmail(email: string) {
      this.email = email;
    },
    setToken(token: string) {
      this.token = token;
    },
    setIsLogged(bool: boolean) {
      this.isLogged = bool;
    },
    logout() {
      this.username = "";
      this.email = "";
      this.token = "";
      this.isLogged = false;
      this.accountType = "";
      this.firstName = "";
      this.lastName = "";
      this.is_activated = false;
      this.activated_by = null;
    },

    setUser(data: any, token: string) {
      this.firstName = data.first_name;
      this.lastName = data.last_name;

      this.accountType = data.type;
      this.username = data.username;
      this.email = data.email;
      //this.token = data.key ? data.key : data.token;
      this.token = token;
      this.isLogged = true;
      this.is_activated = data.is_activated;
      this.activated_by = data.activated_by;
    },
  },

  persist: [
    {
      storage: persistedState.cookies,
      CookieOptions: {
        expires: 7,
      },
    },
    // {
    //   storage: persistedState.sessionStorage,
    //   paths: ["token"],
    // },
  ],
});

export default pinia;
