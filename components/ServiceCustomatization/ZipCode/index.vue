<template lang="pug">
div(class="w-full h-auto relative flex flex-col items-center font-montserrat   ")
 
    div(class="flex flex-col w-full gap-y-4 md:gap-y-10 justify-center items-center  pb-[3.7rem] text-black")
        

        h1.text-center.font-bold.z-10.px-4.py-2.rounded-xl(class="text-black text-2xl lg:text-4xl") How Much Do {{ service.name }} Cleaning Cost
            span(class="md:hidden")  In The Panningen, LI Area?
            p(class="hidden md:block") In The Panningen, LI Area?
       
        nuxt-img(format="webp" src="images/pani_12.png" alt="an image of person" class="md:hidden h-full max-h-[75vh] mt-auto w-auto object-contain sticky"  height="2060" width="1940")
        ServiceCustomatizationSelect(:service="service" class="w-full" :isBg="false" :isRelative="false" @next="$emit('next')")

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
