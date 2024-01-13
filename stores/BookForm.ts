import { defineStore } from "pinia";
import { createPinia } from "pinia";

const pinia = createPinia();

// @ts-ignore: Unreachable code error
export const useBookFormStore = defineStore("BookForm", {
  state: () => {
    return {
      selected: [] as String[],
      zipCode: "",
      houseNumber: "",
      approxSqM: "",
      frequency: "once",
      additionalServices: "",
      startDay: "",
      fullName: "",
      companyName: "",
      email: "",
      phone: "",

      termsAgreed: false as boolean,
    };
  },
  getters: {
    getSelected(state) {
      return state.selected;
    },

    getSelectedString(state) {
      let selectedString = "";
      state.selected.forEach((element) => {
        selectedString += element + ", ";
      });
      // remove last comma
      //selectedString = selectedString.slice(0, -2);
      return selectedString;
    },
  },
  actions: {
    addSelected(selected: String) {
      this.selected.push(selected);
    },
    removeElement(selected: String) {
      this.selected = this.selected.filter((element) => element !== selected);
    },
  },
  // persist: {
  //   storage: persistedState.sessionStorage,
  //   // only save isCookiesSet as cookie
  // },
});

export default pinia;
