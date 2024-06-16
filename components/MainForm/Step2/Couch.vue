<template lang="pug">


div(class="w-full  flex flex-col md:flex-row gap-x-4 md:mt-6 gap-y-1 md:gap-y-3" )
   
                

    div(class="flex flex-col w-full md:w-3/5 gap-y-2")
        p(class="text[#181526] font-bold" ) House Number
        input(v-model="houseNumber" class="w-full  border-[1px] border-[#181526]  rounded-[0.4375rem] px-[1.5rem] py-[0.5rem]" placeholder="182")
    div(class="flex flex-col w-full md:w-2/5 gap-y-2")
        p(class="text[#181526] font-bold") Couch size
        //- input(v-model="carModel" class="w-full  border-[1px] border-[#181526]  rounded-[0.4375rem] px-[1.5rem] py-[0.5rem]" placeholder="Mazda CX-3")
        //- select(v-model="carSize" class="w-full  border-[1px] border-[#181526]  rounded-[0.4375rem] px-[1.5rem] py-[0.5rem]" )
        //-     option(value="fa-align-left" selected default) &#xf036
        //-         LogosGoogleMaps
        //-         p Choose here
        //-     option(value="small" ) Small (VW up, Smart etc.)
        //-     option(value="medium" ) Medium (VW Polo, Audi A3 etc.)
        //-     option(value="large" ) Large (VW Passat, Audi A6 etc.)
        //-     option(value="suv" ) SUV/Crossiver/MPV (VW Tiguan etc.)
        //-     option(value="van" ) Van (VW Transporter, etc.)
        //-     option(value="Medium Van" ) Medium Van (Ford Transit etc.)

        CustomSelect(:options="couchSizeOptions" @choose="couchSize = $event")
    
div(class="w-full flex flex-col md:flex-row gap-x-4 gap-y-1 md:gap-y-3 ")
        div(class="flex flex-col w-full md:w-[19rem] gap-y-2")
            p(class="text[#181526] font-bold") Couch Material
            CustomSelect(:options="couchMaterials" @choose="couchMaterial = $event")
        div(class="flex flex-col w-full gap-y-2")
            p(class="text[#181526] font-bold") Drying service
            div(class="flex w-full  justify-between rounded-lg overflow-hidden border-[1px] border-[#181526]")
                button(@click="isDryingService = false" :class="!isDryingService? 'bg-[#563CF9] text-white': 'bg-white'" class=" w-full text-center px-3 py-2") Yes
                button(@click="isDryingService = true" :class="isDryingService? 'bg-[#563CF9]  text-white': 'bg-white'" class=" w-full text-center  px-3 py-2") No
   
p(class="text[#181526] font-bold md:-mb-1") Service Date
  
</template>

<script setup lang="ts">
import LogosGoogleMaps from "~icons/logos/google-maps";

import PhVanLight from "~icons/ph/van-light";

import { useBookFormStore } from "@/stores/BookForm";

import { storeToRefs } from "pinia";

const emit = defineEmits(["next"]);
const {
  startDay,
  additionalServicesList,
  houseNumber,
  selected,
  couchSize,
  couchMaterial,
  isDryingService,
} = storeToRefs(useBookFormStore());

const couchMaterials = [
  {
    title: "Fabric",
    value: "fabric",
  },
  {
    title: "Leather",
    value: "leather",
  },
  {
    title: "Synthetic",
    value: "synthetic",
  },
];

const couchSizeOptions = [
  {
    title: "Small (2 seats)",
    value: "small",
  },
  {
    title: "Medium (3 seats)",
    value: "medium",
  },
  {
    title: "Large (4 seats)",
    value: "large",
  },
  {
    title: "Extra Large (5 seats)",
    value: "extraLarge",
  },
  {
    title: "Corner",
    value: "corner",
  },
];
</script>

<style lang="scss"></style>
