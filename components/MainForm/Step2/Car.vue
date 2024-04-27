<template lang="pug">

div(class="w-full  flex flex-col md:flex-row gap-x-4 md:mt-6 gap-y-1 md:gap-y-3")
    div(class="flex flex-col w-full md:w-3/5 gap-y-2")
        p(class="text[#181526] font-bold") House Number
        input(v-model="houseNumber" class="w-full  border-[1px] border-[#181526]  rounded-[0.4375rem] px-[1.5rem] py-[0.5rem]" placeholder="182")
    div(class="flex flex-col w-full md:w-2/5 gap-y-2")
        p(class="text[#181526] font-bold") Make and Model
        input(v-model="carModel" class="w-full  border-[1px] border-[#181526]  rounded-[0.4375rem] px-[1.5rem] py-[0.5rem]" placeholder="Mazda CX-3")
div(class="w-full flex flex-col md:flex gap-x-4 gap-y-1 md:gap-y-3 ")
    div(class="flex flex-col w-full md:w-[12rem] gap-y-2")
        p(class="text[#181526] font-bold") Year
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
} = storeToRefs(useBookFormStore());
</script>

<style lang="scss"></style>
