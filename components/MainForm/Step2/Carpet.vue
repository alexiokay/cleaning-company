<template lang="pug">


div(class="w-full  flex flex-col md:flex-row gap-x-4 md:mt-6 gap-y-1 md:gap-y-3" )
   
                

    div(class="flex flex-col w-full md:w-3/5 gap-y-2")
        p(class="text[#181526] font-bold" ) House Number
        input(v-model="houseNumber" class="w-full  border-[1px] border-[#181526]  rounded-[0.4375rem] px-[1.5rem] py-[0.5rem]" placeholder="182")
    div(class="flex flex-col w-full md:w-2/5 gap-y-2")
        p(class="text[#181526] font-bold") Carpet size (m2)
        input(v-model="carpetSize" class="w-full  border-[1px] border-[#181526]  rounded-[0.4375rem] px-[1.5rem] py-[0.5rem]" placeholder="m2")
    
div(class="w-full flex flex-col md:flex-row gap-x-4 gap-y-1 md:gap-y-3 ")
        div(class="flex flex-col w-full md:w-[19rem] gap-y-2")
            p(class="text[#181526] font-bold") Carpet Material
            CustomSelect(:options="carpetMaterials" @choose="carpetMaterial = $event")
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
  carpetSize,
  carpetMaterial,

  isDryingService,
} = storeToRefs(useBookFormStore());

const carpetMaterials = [
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
</script>

<style lang="scss"></style>
