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
        CustomSelect(:options="carSizeOptions")
div(class="w-full flex flex-col md:flex-row gap-x-4 gap-y-1 md:gap-y-3 ")
    div(class="flex flex-col w-full md:w-[12rem] gap-y-2")
        p(class="text[#181526] font-bold") Package
        select(v-model="carYear" class="w-full  border-[1px] border-[#181526]  rounded-[0.4375rem] px-[1.5rem] py-[0.5rem]")
            option(value="" selected ) Choose here
            option(value="2020" ) 2020
            option(value="2021" ) 2021
    div(class="flex flex-col w-full gap-y-2")
        p(class="text[#181526] font-bold") Additional Services
        input(v-model="additionalServices" class="w-full  border-[1px] border-[#181526]  rounded-[0.4375rem] px-[1.5rem] py-[0.5rem]" placeholder="e.g. Engine Cleaning and Refreshing")

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
  additionalServices,
  houseNumber,
  carYear,
  carModel,
  selected,
  isMobile,
  carSize,
} = storeToRefs(useBookFormStore());

const carSizeOptions = [
  {
    title: "Small (VW up, Smart etc.)",
    value: "small",
    icon: "fluent:vehicle-car-profile-20-regular",
  },
  {
    title: "Medium (VW Polo, Audi A3 etc.)",
    value: "medium",
    icon: "PhVanLight",
  },
  {
    title: "Large (VW Passat, Audi A6 etc.)",
    value: "large",
    icon: "PhVanLight",
  },
  {
    title: "SUV/Crossiver/MPV (VW Tiguan etc.)",
    value: "suv",
    icon: "mdi:car-suv",
  },
  { title: "Van (VW Transporter, etc.)", value: "van", icon: "ph:van-light" },
  {
    title: "Medium Van (Ford Transit etc.)",
    value: "Medium Van",
    icon: "PhVanLight",
  },
];
</script>

<style lang="scss"></style>
