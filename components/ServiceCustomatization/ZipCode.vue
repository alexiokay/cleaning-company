<template lang="pug">
div(class="w-full h-auto flex flex-col items-center gap-y-4   font-robotolight")
    div(class="flex flex-col w-full gap-y-10 justify-center items-center  pb-[9.7rem] text-black")
        
        h1.text-center.text-4xl.font-semibold How Much Do {{ service.name }} Cleaning Cost
            p  In The Panningen, LI Area?
        
        div(class="flex gap-y-4  flex-col")
            p.text-3xl.text-center What is Your ZIP Code?
            div(class="flex gap-x-4 ")
                input(type="text" placeholder="Enter your ZIP code" v-model="zipCode" class="w-[20rem] h-[3rem] border-[1px] border-gray-300 rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50")
                button(@click="nextStep" class="w-[10rem] h-[3rem]  bg-white border-[1px] border-gray-300 rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50") Let's find out
            p.text-gray-300 free, no obligation estimates.
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
