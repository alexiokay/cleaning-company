import { defineStore } from "pinia";
import { createPinia } from "pinia";

const pinia = createPinia();

// @ts-ignore: Unreachable code error
export const useBookFormStore = defineStore("BookForm", {
  state: () => {
    return {
      selected: [] as String[],
      zipCode: "",
      addres_display: "",
      houseNumber: "",
      approxSqM: "",
      frequency: "once",
      additionalServices: "",
      startDay: "",
      fullName: "",
      companyName: "",
      email: "",
      isMobile: false,
      carSize: "",
      phone: "",
      serviceValidationConfig: {
        car: ["carModel", "carYear", "HouseNumber", "startDay"],
        house: ["HouseNumber", "startDay"],
        garden: ["HouseNumber", "startDay"],
        office: ["HouseNumber", "startDay"],
        event: ["HouseNumber", "startDay"],
        construction: ["HouseNumber", "startDay"],
        industrial: ["HouseNumber", "startDay"],
      },

      /// cars
      carModel: "",
      carYear: "",

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
    setSelected(selected: String[]) {
      // allow only one selection
      this.selected = selected;
    },
    validate2Step(service: String) {
      service = service.toLowerCase();
      let validationArray = this.serviceValidationConfig[service];
      console.log(validationArray);
      let valid = true;
      validationArray.forEach((element) => {
        if (this[element] == "") {
          valid = false;
        }
      });
      return valid;
    },
  },
  // persist: {
  //   storage: persistedState.sessionStorage,
  //   // only save isCookiesSet as cookie
  // },
});

export default pinia;
