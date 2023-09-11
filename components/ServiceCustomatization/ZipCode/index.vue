<template lang="pug">
div(class="w-full h-auto relative flex flex-col items-center    ")
 
    div(class="flex flex-col w-full gap-y-4 md:gap-y-10 justify-center items-center  pb-[3.7rem] text-black  py-8")
        
        h1.text-center.font-semibold.z-10.px-4.py-2.rounded-xl(class="text-black text-2xl lg:text-4xl") How Much Do {{ service.name }} Cleaning Cost
            p  In The Panningen, LI Area?
       
        
        ServiceCustomatizationZipCodeForm(:service="service" class="w-full" :isBg="false" :isRelative="false" @next="$emit('next')")

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
