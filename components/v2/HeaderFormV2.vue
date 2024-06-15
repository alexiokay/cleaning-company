<template lang="pug">
div(class="w-auto h-full bg-[#FAFAFA] rounded-[1.4rem] lg:rounded-[3rem] flex flex-col lg:flex-row  px-4 md:px-[4rem] py-[3rem] lg:py-[7.5rem] gap-y-3 gap-x-[3.25rem] ")
    
    div(class="flex w-auto flex-col gap-y-3 ")
        div(class="flex border-black  border-[1px] rounded-full w-[1/3] lg:w-[22rem] h-10 font-bold text-black items-center justify-center gap-x-4 py-4")
                p Search 
                ArrowIcon(class="rotate-[180deg]")
                p Book & Pay
                ArrowIcon(class="rotate-[180deg]")
                p Relax
        h1(class="mt-[1rem] lg:mt-[3.94rem]  text-[1.7rem] lg:text-[3rem] font-bold") Book a cleaning service
            p(class="text-[#7863FA]") in your area

    div(class="flex lg:w-[39rem] flex-col gap-y-3")
        div(class="flex w-full h-full gap-x-4  md:p-2 lg:p-[2.5rem] md:bg-white rounded-[1.5rem]")
            div(class="w-full h-full flex flex-col gap-y-3")
                p(class="text[#181526] font-bold") Select the service you are interested in
                div(class="flex flex-wrap gap-x-2 gap-y-2 ")
                    buttonCasual(@click="select('House')" text="House" :isSelected="selected.includes('House')" )
                        template(v-slot:icon)
                            MdiHouseCityOutline(class="w-5 h-5")
                    buttonCasual(@click="select('Car')" text="Car" :isSelected="selected.includes('Car')" )
                        template(v-slot:icon)
                            IcRoundLocalCarWash(class="w-5 h-5")
                    buttonCasual(@click="select('Garden')" text="Garden" :isSelected="selected.includes('Garden')" disabled )
                        template(v-slot:icon)
                            MdiFlowerTulipOutline(class="w-5 h-5")
                    buttonCasual(@click="select('Swimming Pool')" text="Swimming Pool" :isSelected="selected.includes('Swimming Pool')" disabled)
                        template(v-slot:icon)
                            MdiSwimmingPool(class="w-5 h-5")
                    buttonCasual(@click="select('Office')" text="Office" :isSelected="selected.includes('Office')" disabled)
                        template(v-slot:icon)
                            GameIconsOfficeChair(class="w-5 h-5")
                    buttonCasual(@click="select('Event')" text="Event" :isSelected="selected.includes('Event')" disabled)
                        template(v-slot:icon)
                            MdiPeopleOutline(class="w-5 h-5")
                    buttonCasual(@click="select('Construction')" text="Construction"  :isSelected="selected.includes('Construction')" disabled)
                        template(v-slot:icon)
                            MdiConstructionOutline(class="w-5 h-5")
                    buttonCasual(@click="select('Industrial')" text="Industrial" :isSelected="selected.includes('Industrial')" disabled)
                        template(v-slot:icon)
                            FluentProduction20Regular(class="w-5 h-5")
                    //- buttonCasual(text="more")
                    //-      template(v-slot:icon)
                    //-         <svg xmlns="http://www.w3.org/2000/svg"  width="17" height="16" viewBox="0 0 17 16" fill="none">
                    //-             <path d="M14.2732 13.3333L9.7465 2.53996C9.49984 1.97996 9.11984 1.52663 8.6065 1.17996C8.09984 0.839959 7.53317 0.666626 6.9065 0.666626C6.3465 0.666626 5.83317 0.806626 5.3665 1.08663C4.89984 1.36663 4.5265 1.74663 4.25317 2.21329C3.97984 2.67996 3.83317 3.19996 3.83317 3.75996L3.85317 5.99996H1.85317V9.63329C2.2665 9.44663 2.7065 9.35329 3.1665 9.35329V7.35329H6.49984C6.87984 7.35329 7.19317 7.48663 7.45317 7.74663C7.71317 7.99996 7.83317 8.31329 7.83317 8.66663V13.3533H6.43984C6.33984 13.8333 6.1265 14.2733 5.81317 14.6666H9.1665V8.66663C9.1665 8.18663 9.03317 7.74663 8.79984 7.33329C8.5665 6.91996 8.23984 6.60663 7.83317 6.37329C7.4465 6.13329 6.99984 5.99996 6.49984 5.99996H5.1665V3.75996C5.1665 3.27996 5.33317 2.87329 5.67317 2.52663C6.01317 2.17996 6.4265 1.99996 6.9065 1.99996C7.25984 1.99996 7.5865 2.10663 7.87317 2.30663C8.15984 2.50663 8.37317 2.75996 8.49984 3.07329L12.8065 13.3333L11.1665 13.3533V14.6666H15.8332V13.3533L14.2732 13.3333ZM3.1665 12C3.53317 12 3.83317 12.3 3.83317 12.6666C3.83317 13.0333 3.53317 13.3333 3.1665 13.3333C2.79984 13.3333 2.49984 13.0333 2.49984 12.6666C2.49984 12.3 2.79984 12 3.1665 12ZM3.1665 10.6666C2.05984 10.6666 1.1665 11.56 1.1665 12.6666C1.1665 13.7733 2.05984 14.6666 3.1665 14.6666C4.27317 14.6666 5.1665 13.7733 5.1665 12.6666C5.1665 11.56 4.27317 10.6666 3.1665 10.6666Z" fill="#181526"/>
                    //-         </svg>
                p(class="text[#181526] font-bold") What is your ZIP Code?
                div(class="flex flex-col lg:flex-row gap-x-[0.5rem] gap-y-3")
                    input#zipcode-input(class="w-full  border-[1px] border-[#181526]  rounded-[0.4375rem] px-[1.5rem] py-[0.5rem]" placeholder="Zip Code / Address" v-model="zipCode")
                    MainFormNext(@next="next")
                
                p(class="text-red-500" v-if="incorrectZipCode === true") The zipcode you submitted is not Netherlands zipcode
              
                        
                    


</template>

<script setup lang="ts">
import IcRoundLocalCarWash from "~icons/ic/round-local-car-wash";
import MdiHouseCityOutline from "~icons/mdi/house-city-outline";
import MdiFlowerTulipOutline from "~icons/mdi/flower-tulip-outline";
import MdiSwimmingPool from "~icons/mdi/swimming-pool";
import GameIconsOfficeChair from "~icons/game-icons/office-chair";
import MdiPeopleOutline from "~icons/mdi/people-outline";
import MdiConstructionOutline from "~icons/mdi/construction-outline";
import FluentProduction20Regular from "~icons/fluent/production-20-regular";

import ArrowIcon from "~icons/ion/arrow-back";
import { useBookFormStore } from "@/stores/BookForm";
import { storeToRefs } from "pinia";

const emit = defineEmits(["next"]);

const config = useRuntimeConfig();

const BookFormStore = useBookFormStore();
const { selected, zipCode, addres_display } = storeToRefs(useBookFormStore());

const incorrectZipCode = ref(false);

const next = async () => {
  if (selected.value.length === 0 || zipCode.value === "") {
    alert("Please select at least one option");
  } else {
    await get_city_name(zipCode.value);
    if (incorrectZipCode.value === false) emit("next");
    else incorrectZipCode.value = true;
  }

  // TODO: add validation for zip code
};

const get_city_name = async (zip: string) => {
  const response = await fetch(
    config.public.API_URL + `api/v1/localizations/get-city-name`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ zip_code: zip }),
    }
  );
  const data = await response.json().then((data) => {
    addres_display.value = data.address_display;
    incorrectZipCode.value = data.incorrect_zipcode;
  });

  console.log(data);
};

const select = (name: string) => {
  //   if (selected.value.includes(name)) {
  //     BookFormStore.removeElement(name);
  //   } else {
  //     BookFormStore.addSelected(name);
  //   }
  // allow only one selection
  BookFormStore.setSelected([name]);
};

onMounted(() => {
  const zipcodeInput = document.getElementById(
    "zipcode-input"
  ) as HTMLInputElement;
  // on enter press
  zipcodeInput.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      next();
    }
  });
});
</script>

<style lang="scss"></style>
