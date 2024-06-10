<template lang="pug">

div(class="w-full  flex flex-col gap-x-4 md:mt-6 gap-y-1 md:gap-y-3" )
    p(class="text[#181526] font-bold") Where do u want the service to be done?
    div(class="flex w-full  justify-between rounded-lg overflow-hidden border-[1px] border-[#181526]")
        button(@click="isMobile = false" :class="!isMobile? 'bg-[#563CF9] text-white': 'bg-white'" class=" w-full text-center px-3 py-2") at your location
        button(@click="isMobile = true" :class="isMobile? 'bg-[#563CF9]  text-white': 'bg-white'" class=" w-full text-center  px-3 py-2") in our garage
            

div(class="w-full  flex flex-col md:flex-row gap-x-4 md:mt-6 gap-y-1 md:gap-y-3" )
   
                
    div(class="flex flex-col w-full md:w-3/5 gap-y-2" v-if="isMobile")
        p(class="text[#181526] font-bold" ) Our closest location:
        div(class="w-full  border-[1px] items-center flex justify-between border-[#181526]  rounded-[0.4375rem] px-[1.5rem] py-[0.5rem]") 
            LogosGoogleMaps(class="w-5 h-5 hover:cursor-pointer")
            p Venlo Geresstrat 189, 5922CP
            
    div(class="flex flex-col w-full md:w-3/5 gap-y-2" v-if="!isMobile")
        p(class="text[#181526] font-bold" ) House Number
        input(v-model="houseNumber" class="w-full  border-[1px] border-[#181526]  rounded-[0.4375rem] px-[1.5rem] py-[0.5rem]" placeholder="182")
    div(class="flex flex-col w-full md:w-2/5 gap-y-2")
        p(class="text[#181526] font-bold") Car size
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
        CustomSelect(:options="carSizeOptions" @choose="carSize = $event")
div(class="w-full flex flex-col md:flex-row gap-x-4 gap-y-1 md:gap-y-3 ")
    div(class="flex flex-col w-full md:w-[19rem] gap-y-2")
        p(class="text[#181526] font-bold") Package
        CustomSelect(:options="cleaningPackages" @choose="carPackage = $event")
    div(class="flex flex-col w-full gap-y-2")
        p(class="text[#181526] font-bold") Additional Services
        //- input(v-model="additionalServices" class="w-full  border-[1px] border-[#181526]  rounded-[0.4375rem] px-[1.5rem] py-[0.5rem]" placeholder="e.g. Engine Cleaning and Refreshing")
        CustomSelectChecklist(:options="additionalServicesList" @choose="$event => $event.active = !$event.active" )
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
  carYear,
  carModel,
  selected,
  isMobile,
  carSize,
  carPackage,
} = storeToRefs(useBookFormStore());

const cleaningPackages = [
  {
    title: "Custom",
    value: "custom",
    icon: "icons/packages/icon0.png",
  },
  {
    title: "Interior",
    value: "interior",
    icon: "icons/packages/icon1.png",
  },
  {
    title: "Exterior",
    value: "exterior",
    icon: "icons/packages/icon2.png",
  },
  {
    title: "Interior/Exterior",
    value: "interiorExterior",
    icon: "icons/packages/icon3.png",
  },
  {
    title: "Premium",
    value: "premium",
    icon: "icons/packages/icon4.png",
  },
  {
    title: "Deluxe",
    value: "deluxe",
    icon: "icons/packages/icon5.png",
  },
];

const carSizeOptions = [
  {
    title: "Small (VW up, Smart etc.)",
    value: "small",
    icon: "icons/cars/car1.png",
  },
  {
    title: "Medium (VW Polo, Audi A3 etc.)",
    value: "medium",
    icon: "icons/cars/car2.png",
  },
  {
    title: "Large (VW Passat, Audi A6 etc.)",
    value: "large",
    icon: "icons/cars/car3.png",
  },
  {
    title: "SUV/Crossiver/MPV (VW Tiguan etc.)",
    value: "suv",
    icon: "icons/cars/car4.png",
  },
  {
    title: "Van (VW Transporter, etc.)",
    value: "van",
    icon: "icons/cars/van2.png",
  },
  {
    title: "Medium Van (Ford Transit etc.)",
    value: "Medium Van",
    icon: "icons/cars/van1.png",
  },
];
</script>

<style lang="scss"></style>
