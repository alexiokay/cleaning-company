<template lang="pug">
div(class="w-full h-auto relative flex flex-col md:flex-row bg-[#Fcf2ec]  md:px-0 3xl:pl-[19rem] lg:pl-[8rem]  md:pl-6  items-center md:items-start justify-center   ")
 
    div(class="flex flex-col w-full gap-y-4 md:gap-y-10 justify-center items-center   pb-[3.7rem] text-black ")
        
        div(class="w-auto md:gap-y-[2rem]  flex flex-col md:mt-[4rem] text-center") 
          h1(class="text-2xl md:text-7xl  lg:w-full font-bold text-[#124944]") How Much 
            span.text-black Does it cost To Clean {{ service.name }} 
            p.text-black In The Panningen, LI Area?
      
        nuxt-img(format="webp" src="images/pani_12.png" alt="an image of person" class="md:hidden h-full max-h-[45vh] mt-auto w-auto object-contain sticky"  height="2060" width="1940")
        ServiceCustomatizationZipCodeForm(:service="service" class="w-full" :isBg="false" :isRelative="false" @next="$emit('next')")
    nuxt-img(src="images/pani_12.webp" class="hidden md:flex max-h-[55vh] mb-auto w-auto object-contain" format="webp" height="2060" width="1940")
hr.w-full
</template>

<script setup lang="ts">
defineProps({
  service: {
    type: Object,
    required: true,
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
