<template lang="pug">
div(class="w-full h-auto relative flex flex-col items-center gap-y-4   py-5")
 
    div(class="flex flex-col w-full gap-y-10 justify-center items-center  pb-[3.7rem] text-black ")
        
        h1.text-center.text-4xl.font-semibold.text-white.z-10.px-4.py-2.rounded-xl(class="bg-[#5b8578ff]") How Much Do {{ service.name }} Cleaning Cost
            p  In The Panningen, LI Area?
        
        ServiceCustomatizationZipCodeForm(:service="service" class="w-full" :isBg="false")
    div(class="flex flex-wrap  gap-x-4 gap-y-6 w-full px-[30rem] justify-center text-start")

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
