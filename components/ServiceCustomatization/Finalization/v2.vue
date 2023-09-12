<template lang="pug">
div(class="relative w-full bg-[rgba(255,255,255,0.9)] shadow-[0_1px_30px_-15px_rgba(0,0,0,0.4)] h-auto pt-[8rem] pb-[4rem] px-[2rem] md:px-[6rem] rounded-2xl text-center")
    div(class="p-[0.6rem] bg-[#Fcf2ec] absolute left-1/2 transform  -top-[6rem] -translate-x-1/2 rounded-full")
      nuxt-img(src="icons/thank-you-icon.png"  class="h-[9rem] md:h-[10rem] w-[9rem] md:w-[10rem] rounded-full object-cover    ")
    p(class="text-2xl md:text-3xl font-bold") Your's estimation is ready!
    p(class="mt-2 text-lgmd:text-base") Please create account to see the details and book your service.
    hr(class="my-9")
    div(class="w-full flex gap-y-6 flex-col md:flex-row gap-x-[1.5rem] md:gap-x-[4rem] text-start")
      div(class="flex flex-col w-full md:w-1/2 gap-y-4 ")
        .flex.w-full.gap-x-4.font-semibold
          CalendarIcon(class="w-6 h-6 text-blue-600")
          p(class="w-full") No-Obligation Appointment
        p The contractor will start  your free estimate by taking measurements, exmanining layout and bringing materials for you to look at.
      div(class="flex flex-col w-full md:w-1/2 gap-y-4")
        .flex.w-full.gap-x-4.font-semibold   
            MessageIcon(class="w-6 h-6 -rotate-[45deg] text-blue-600")
            p You're in control!
        p There is no obligation at this point, it's up to you if you want to move forward.
    div(class="w-full flex gap-x-[1.5rem] md:gap-x-[4rem] text-start")
        button(@click="$emit('next')" class="mt-8 w-full h-[4rem]  bg-[#fa8c16] border-[1px] border-gray-300 rounded-md px-4 py-2 text-base md:text-lg font-medium text-white hover:bg-[#f16e00]") Create account and Book it!
</template>

<script setup lang="ts">
import CalendarIcon from "~icons/mdi/calendar-check";
import MessageIcon from "~icons/uil/message";

defineProps({
  partner: {
    type: Object,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss"></style>
