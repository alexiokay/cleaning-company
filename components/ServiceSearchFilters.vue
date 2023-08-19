<template lang="pug">
div(class=" h-auto  py-4 flex flex-col")
   
                   
    div(class="w-full flex gap-x-4 overflow-x-auto ")
        

        div(class="flex flex-col :w-auto h-[4rem] md:h-[5rem]")
            p(class="hidden md:flex") Type 
            select(type="select" @change="(e) => setServiceActive(e.target.value)" placeholder="Select service type" class="w-auto  h-auto border-[1px] border-gray-300 rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50")
                option(disabled selected value="") select a service
                option(v-for="option in customization.general" :value="option.title" )  {{ option.title }}
        
       
        div(class="flex flex-col w-auto  h-[4rem] md:h-[5rem]")
            p(class="hidden md:flex") Category 
           
            
            select(type="select" placeholder="Select service type" class="w-auto  auto border-[1px] border-gray-300 rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50")
                option(disabled selected value="") select category
                option(v-for="category in activeService" :value="category.title" :selected="category.active" ) {{ category.title }}
        div(class=" md:hidden flex flex-col w-auto  h-[4rem] md:h-[5rem]") 
            select(type="select" class="w-auto  auto border-[1px] border-gray-300 rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50")
                option(disabled selected value="") select localization
                option(v-for="region in regions" :value="region.name"  ) {{ region.name }}
        div(class="flex flex-col :w-auto h-[4rem] md:h-[5rem]")
            p(class="hidden md:flex") date 
            input(type="date" placeholder="Select date" class="w-auto h-auto border-[1px] border-gray-300 rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50")
        div.instant-booking(class="flex w-auto gap-x-4 px-3 h-full md:h-auto items-center lg:ml-auto")
            p(class="text-sm md:text-xl w-auto  ") Instant booking
            Switch(
                v-model="instantBooking"
                :class="instantBooking ? 'bg-blue-600' : 'bg-gray-200'" 
                class="relative inline-flex h-auto w-20 items-center rounded-full py-[2px]")
                p(:class="instantBooking ? 'text-white left-2' : 'right-2'" class=" absolute text-base  ") {{ instantBooking ? 'On' : 'Off' }}
                span(class="sr-only") Enable notifications
                span(
                    :class="instantBooking ? 'translate-x-[2.1rem]' : 'translate-x-1'"
                    class="inline-block h-6 w-6 transform rounded-full bg-white transition")     
</template>

<script setup lang="ts">
import { Switch } from "@headlessui/vue";
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";

const props = defineProps({
  customization: {
    type: Object,
    required: true,
  },
  regions: {
    type: Array,
    required: true,
  },
});

console.log(props.customization.general);
const activeServiceName = ref(
  props.customization.general.find((service) => service.active).title
);

const activeService = computed(() => {
  if (activeServiceName.value === "house cleaning") {
    return props.customization.house_categories;
  } else if (activeServiceName.value === "car cleaning") {
    return props.customization.car_categories;
  }
});

const setServiceActive = (service) => {
  props.customization.general.forEach((service) => (service.active = false));
  activeServiceName.value = service;
};

const instantBooking = ref(false);
</script>

<style lang="scss"></style>
