<template lang="pug">
div(class="w-[100vw] h-full bg-[#FAFAFA] rounded-[1.4rem] lg:rounded-[3rem] flex flex-col lg:flex-row  px-4 md:px-[4rem] py-[3rem] lg:py-[7.5rem] gap-y-3 gap-x-[3.25rem] ")
    
    div(class="flex w-auto flex-col gap-y-3")
        
        div(class="flex border-black  border-[1px] rounded-full w-[1/3] lg:w-[22rem] h-10 font-bold text-black items-center justify-center gap-x-4 py-4")
                p Search 
                ArrowIcon(class="rotate-[180deg]")
                p Book & Pay
                ArrowIcon(class="rotate-[180deg]")
                p Relax
        h1(class="mt-[1rem] lg:mt-[3.94rem]  text-[1.7rem] lg:text-[3rem] font-bold") Find a cleaning service
            p(class="text-[#7863FA]") in your area

    div(class="flex w-full lg:w-[39rem] flex-col gap-y-3")
        
        div(class="flex w-full h-full gap-x-4 md:p-[2.5rem] md:bg-white rounded-[1.5rem] relative")
            div(class="w-full h-full flex flex-col gap-y-1 md:gap-y-3 ")
                div(class="flex gap-x-2 w-full md:absolute top-3 items-center text-xs md:text-sm truncate	")
                    GoBackIcon(@click="$emit('goBack')" class="w-6 h-6 text-[#181526] hover:cursor-pointer")
                    p(class="truncate") Chosen: 
                        span {{ bookFormStore.getSelectedString}}  Search in: {{ addres_display }}, Amsterdam, Netherlands
                slot(name="content")
                slot(name="footer")
                        
                    


</template>

<script setup lang="ts">
import ArrowIcon from "~icons/ion/arrow-back";
import GoBackIcon from "~icons/iconamoon/arrow-left-2-bold";
import { useBookFormStore } from "@/stores/BookForm";
import { storeToRefs } from "pinia";

const {
  startDay,
  additionalServices,
  houseNumber,
  frequency,
  approxSqM,
  addres_display,
} = storeToRefs(useBookFormStore());

const bookFormStore = useBookFormStore();

const emit = defineEmits(["next"]);

const next = () => {
  if (
    bookFormStore.frequency === "" ||
    bookFormStore.approxSqM === "" ||
    bookFormStore.houseNumber === "" ||
    bookFormStore.additionalServices === "" ||
    bookFormStore.startDay === ""
  ) {
    alert("Please fill the forms to continue");
  } else {
    emit("next");
  }
};
</script>

<style lang="scss">
select {
  -webkit-appearance: none !important;
  -moz-appearance: none !important;
  background-color: #fafafa;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAMAAACtdX32AAAAdVBMVEUAAAD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAhMdQaAAAAJ3RSTlMAAAECAwQGBwsOFBwkJTg5RUZ4eYCHkJefpaytrsXGy8zW3+Do8vNn0bsyAAAAYElEQVR42tXROwJDQAAA0Ymw1p9kiT+L5P5HVEi3qJn2lcPjtIuzUIJ/rhIGy762N3XaThqMN1ZPALsZPEzG1x8LrFL77DHBnEMxBewz0fJ6LyFHTPL7xhwzWYrJ9z22AqmQBV757MHfAAAAAElFTkSuQmCC);
  background-position: 100%;
  background-repeat: no-repeat;
  padding: 0.5rem;
  border-radius: 0;
}
.select-wrapper::after {
  content: "▼";
  font-size: 1rem;
  top: 6px;
  right: 10px;
  position: absolute;
}
</style>
