<template lang="pug">
div(class=" h-auto  py-4 flex flex-col")
    p Filters
    div(class="w-full flex gap-x-4 flex-wrap ")
        div(class="flex flex-col w-[calc(50%-1rem)] md:w-auto h-[5rem]")
            p Type 
            select(type="select" @change="(e) => setServiceActive(e.target.value)" placeholder="Select service type" class="w-auto h-[3rem] border-[1px] border-gray-300 rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50")
                option(v-for="option in customization.general" :value="option.title" :selected="option.active" )  {{ option.title }}
        div(class="flex flex-col w-[calc(50%-1rem)] md:w-auto h-[5rem]")
            p Category 
            select(type="select" placeholder="Select service type" class="w-auto h-[3rem] border-[1px] border-gray-300 rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50")
                option(v-for="category in activeService" :value="category.title" ) {{ category.title }}
     
        div(class="flex flex-col w-[calc(50%-1rem)] md:w-auto h-[5rem]")
            p date 
            input(type="date" placeholder="Select service type" class="w-auto h-[3rem] border-[1px] border-gray-300 rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50")
        div.instant-booking(class="flex w-[calc(50%-1rem)] md:w-auto gap-x-4 px-8 items-center lg:ml-auto")
            p(class="text-xl") Instant booking
            Switch(
                v-model="instantBooking"
                :class="instantBooking ? 'bg-blue-600' : 'bg-gray-200'" 
                class="relative inline-flex h-8 w-20 items-center rounded-full")
                p(:class="instantBooking ? 'text-white left-3' : 'right-3'" class=" absolute text-lg  ") {{ instantBooking ? 'On' : 'Off' }}
                span(class="sr-only") Enable notifications
                span(
                    :class="instantBooking ? 'translate-x-[3.3rem]' : 'translate-x-1'"
                    class="inline-block h-6 w-6 transform rounded-full bg-white transition")     
</template>

<script setup lang="ts">
import { Switch } from "@headlessui/vue";

const props = defineProps({
  customization: {
    type: Object,
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
