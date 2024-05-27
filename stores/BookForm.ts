import { defineStore } from "pinia";
import { createPinia } from "pinia";

const pinia = createPinia();

// @ts-ignore: Unreachable code error
export const useBookFormStore = defineStore("BookForm", {
  state: () => {
    return {
      priceList: {
        small: {
          interior: 40,
          exterior: 40,
          interiorExterior: 60,
          premium: 70,
          deluxe: 90,
        },
        medium: {
          interior: 20,
          exterior: 30,
          interiorExterior: 50,
          premium: 60,
          deluxe: 70,
        },
        large: {
          interior: 30,
          exterior: 40,
          interiorExterior: 70,
          premium: 80,
          deluxe: 90,
        },
      },
      additionalServicesList: [
        {
          title: "Engine Cleaning and Refreshing",
          value: "Engine Cleaning and Refreshing",
          icon: "icons/services/engine.png",
          price: 20,
          active: false,
        },
        {
          title: "Waxing",
          value: "Waxing",
          icon: "icons/services/waxing.png",
          price: 20,
          active: false,
        },
        {
          title: "Polishing",
          value: "Polishing",
          icon: "icons/services/polishing.png",
          price: 20,
          active: false,
        },
        {
          title: "Interior Polishing",
          value: "Interior Polishing",
          icon: "icons/services/interior.png",
          price: 20,
          active: false,
        },
        {
          title: "Leather Renewal",
          value: "Leather Renewal",
          icon: "icons/services/leather.png",
          price: 20,
          active: false,
        },
      ],

      selected: [] as String[],
      zipCode: "",
      addres_display: "",
      houseNumber: "",
      approxSqM: "",
      frequency: "once",

      startDay: "",
      fullName: "",
      companyName: "",
      email: "",
      isMobile: false,
      carSize: "",
      phone: "",
      carPackage: "",
      price: 0,
      serviceValidationConfig: {
        car: ["carSize", "carPackage", "HouseNumber", "startDay"],
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
    computedPrice(state) {
      // Use current state to fetch the correct price from the priceList
      let price = 0;

      if (state.carPackage !== "" && state.carSize !== "") {
        price = state.priceList[state.carSize][state.carPackage];
      }

      // add additional services
      state.additionalServicesList.forEach((element) => {
        if (element.active) {
          price = price + element.price;
        }
      });

      // if mobile service, add 10 euro to the price
      if (state.isMobile == false) {
        price = price + 10;
      }
      return price;
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
