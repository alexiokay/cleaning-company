import { createPinia } from "pinia";

const pinia = createPinia();

// @ts-ignore: Unreachable code error
export const useBookFormStore = defineStore("BookForm", {
  state: () => {
    return {
      priceList: {
        small: {
          custom: 0,
          interior: 40,
          exterior: 50,
          interiorExterior: 60,
          premium: 70,
          deluxe: 90,
        },
        medium: {
          custom: 0,
          interior: 40,
          exterior: 50,
          interiorExterior: 50,
          premium: 60,
          deluxe: 70,
        },
        large: {
          custom: 0,
          interior: 40,
          exterior: 50,
          interiorExterior: 70,
          premium: 80,
          deluxe: 90,
        },
      },
      additionalServicesList: [
        {
          title: "Engine Cleaning and Refreshing",
          value: "engine-cleaning-and-refreshing",
          icon: "icons/services/engine.png",
          price: 20,
          active: false,
        },
        {
          title: "Headlight Restoration",
          value: "headlight-restoration",
          icon: "",
          price: 0,
          active: false,
        },
        {
          title: "Odor Removal",
          value: "odor-removal",
          icon: "icons/services/odor.png",
          price: 0,
          active: false,
        },
        {
          title: "Vaccum Cleaning",
          value: "vaccum-cleaning",
          icon: "icons/services/vaccum.png",
          price: 20,
          active: false,
        },
        {
          title: "Waxing",
          value: "waxing",
          icon: "icons/services/waxing.png",
          price: 20,
          active: false,
        },
        {
          title: "Polishing",
          value: "polishing",
          icon: "icons/services/polishing.png",
          price: 20,
          active: false,
        },
        {
          title: "Interior Polishing",
          value: "interior-polishing",
          icon: "icons/services/interior.png",
          price: 20,
          active: false,
        },
        {
          title: "Leather Renewal",
          value: "leather-renewal",
          icon: "icons/services/leather.png",
          price: 20,
          active: false,
        },
      ],
      packageServices: {
        custom: [],
        interior: ["Vaccum Cleaning", "Interior Polishing"],
        exterior: ["Waxing", "Polishing"],
        interiorExterior: [
          "Vaccum Cleaning",
          "Interior Polishing",
          "Waxing",
          "Polishing",
        ],
        premium: [
          "Vaccum Cleaning",
          "Interior Polishing",
          "Waxing",
          "Polishing",
          "Leather Renewal",
        ],
        deluxe: [
          "Vaccum Cleaning",
          "Interior Polishing",
          "Waxing",
          "Polishing",
          "Leather Renewal",
          "Odor Removal",
        ],
      },

      HouseServiceList: [
        {
          title: "Full House Cleaning",
          value: "full-house-cleaning",
          icon: "icons/home/fhousei.jpg.png",
          price: 50,
          active: false,
        },
        {
          title: "Carpet Cleaning",
          value: "carpet-cleaning",
          icon: "icons/home/fcarpeti.jpg",
          price: 20,
          active: false,
        },
        {
          title: "Couch/Chair Washing",
          value: "couch-chair-washing",
          icon: "icons/home/fcouchi.jpg",
          price: 20,
          active: false,
        },
      ],
      step: 1,
      selected: [] as String[],
      zipCode: "",
      addres_display: "",
      houseNumber: "",
      approxSqM: "",
      frequency: "",

      startDay: null as Date | null,
      startTime: "" as string,
      fullName: "",
      companyName: "",
      email: "",
      isMobile: false,
      // isFullHouse: false,
      carSize: "",
      couchSize: "",
      carpetSize: "",
      phone: "",
      carPackage: "",
      couchMaterial: "",
      carpetMaterial: "",
      isDryingService: false,
      price: 0,
      serviceValidationConfig: {
        car: ["carSize", "carPackage", "houseNumber", "startDay"],
        couch: ["houseNumber", "startDay", "couchSize", "couchMaterial"],
        carpet: ["houseNumber", "startDay", "carpetSize"],
        house: ["houseNumber", "startDay"],
        garden: ["houseNumber", "startDay"],
        office: ["houseNumber", "startDay"],
        event: ["houseNumber", "startDay"],
        construction: ["houseNumber", "startDay"],
        industrial: ["houseNumber", "startDay"],
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
        console.log("validating: " + element + " value: " + this[element]);
        if (
          this[element] == "" ||
          this[element] == null ||
          this[element] == undefined
        ) {
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
