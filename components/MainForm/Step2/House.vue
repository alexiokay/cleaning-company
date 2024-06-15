<template lang="pug">

//- div(class="w-full  flex flex-col gap-x-4 md:mt-6 gap-y-1 md:gap-y-3" )
//-     p(class="text[#181526] font-bold") What kind of house service do you need?
//-     div(class="flex w-full  justify-between rounded-lg overflow-hidden border-[1px] border-[#181526]")
//-         button(@click="isFullHouse = false" :class="!isFullHouse? 'bg-[#563CF9] text-white': 'bg-white'" class=" w-full text-center px-3 py-2") Full House
//-         button(@click="isFullHouse = true" :class="isFullHouse? 'bg-[#563CF9]  text-white': 'bg-white'" class=" w-full text-center  px-3 py-2") Single Service
           

div(class="w-full  flex flex-col md:flex-row gap-x-4 md:mt-6 gap-y-1 md:gap-y-3" )
    div(class="flex flex-col w-full md:w-3/5 gap-y-2")
        p(class="text[#181526] font-bold") House Number
        input(v-model="houseNumber" class="w-full  border-[1px] border-[#181526]  rounded-[0.4375rem] px-[1.5rem] py-[0.5rem]" placeholder="182")
    div(class="flex flex-col w-full md:w-2/5 gap-y-2")
        p(class="text[#181526] font-bold") Approx. square metrage
        input(v-model="approxSqM" class="w-full  border-[1px] border-[#181526]  rounded-[0.4375rem] px-[1.5rem] py-[0.5rem]" placeholder="m2")
div(class="w-full flex flex-col md:flex-row gap-x-4 gap-y-1 md:gap-y-3")
    div(class="flex flex-col w-full md:w-[12rem] gap-y-2")
        p(class="text[#181526] font-bold") Frequency
        select(v-model="frequency" class="w-full  border-[1px] border-[#181526]  rounded-[0.4375rem] px-[1.5rem] py-[0.5rem]")
            option(value="once" ) Once
            option(value="monthly" ) Monthly
    div(class="flex flex-col w-full gap-y-2")
        p(class="text[#181526] font-bold") Services
        CustomSelectChecklist(:options="HouseServiceList" @choose="$event => $event.active = !$event.active" )

p(class="text[#181526] font-bold -mb-1") Start day
</template>

<script setup lang="ts">
import { useBookFormStore } from "@/stores/BookForm";
import { storeToRefs } from "pinia";

const emit = defineEmits(["next"]);
const {
  startDay,
  approxSqM,
  houseNumber,
  selected,
  HouseServiceList,
  //   isFullHouse,
} = storeToRefs(useBookFormStore());
</script>

<style lang="scss"></style>
