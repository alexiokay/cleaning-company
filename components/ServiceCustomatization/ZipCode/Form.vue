<template lang="pug">

div(class="flex gap-y-4 relative flex-col justif-center items-center py-4 text-black")
    nuxt-img(src="images/cleaning_zip-code_bg.png"  class="absolute top-0 left-0 w-full h-full object-cover")
    p.text-3xl.text-center What is Your ZIP Code?
    div(class="flex gap-x-4 ")
        input(type="text" placeholder="Enter your ZIP code" v-model="zipCode" class="w-[20rem] h-[3rem] border-[1px] border-gray-300 rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50")
        button(@click="nextStep" class="w-[10rem] h-[3rem]  bg-white border-[1px] border-gray-300 rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50") Let's find out
    p.text-gray-300 free, no obligation estimates.


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
