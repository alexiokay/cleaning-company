<template lang="pug">

div(:class="{'relative': isRelative === true}" class="flex gap-y-4 w-auto  flex-col justify-center items-center py-4 text-black px-4")
    nuxt-img(v-if="isBg" src="images/cleaning_zip-code_bg.png"  class="absolute top-0 left-0 w-full h-full object-cover object-center blur-[4px] ")
    div(class="w-full md:w-auto text-start flex flex-col items-center z-50 gap-y-4")
        p.text-2xl.text-center.z-50 What is Your ZIP Code?
        div(class="flex flex-col sm:flex-row gap-y-2 gap-x-4 z-50 w-full")
            input(type="text" placeholder="Enter your ZIP code" v-model="zipCode" class="z-50 w-full md:w-[20rem] h-[4rem] border-[1px] border-gray-300 rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50")
            button(@click="$emit('next')" class="w-auto md:w-[10rem] h-[4rem]  bg-[#fa8c16] border-[1px] border-gray-300 rounded-md px-4 py-2 text-base md:text-lg font-medium text-white hover:bg-[#f16e00]") Book
        p.text-gray-300.z-50 free, no obligation estimates.


</template>

<script setup lang="ts">
defineProps({
  service: {
    type: Object,
    required: true,
  },
  isBg: {
    type: Boolean,
    default: true,
  },
  isRelative: {
    type: Boolean,
    default: true,
  },
});

const emit = defineEmits(["next"]);

const nextStep = () => {
  if (zipCode.value.length === 6) {
    emit("next");
  } else {
    alert("Please enter a valid ZIP code");
  }
};
const zipCode = ref("");
</script>

<style lang="scss"></style>
