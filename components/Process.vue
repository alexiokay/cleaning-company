<template lang="pug">
div#cart-process(class="flex h-auto w-full items-center justify-center sm:justify-between md:justify-center md:gap-x-16")
   
    div(class="flex h-full justify-center sm:w-auto w-auto relative")
        div(v-for="(val, index, key) in steps" class="select-none w-[5rem] sm:w-[8rem] relative md:w-[9.5rem] h-[5rem]  flex flex-col justify-between items-center ")
            button(@click="goToStep(index)" class="w-10 h-10 rounded-full items-center justify-center flex border-[1px]" :class="{ 'bg-white  border-gray-400': val.done === true && val.active === false, 'bg-black text-white': val.active === true, 'border-gray-400': val.active === true && val.done === true }" )
                p(v-if="!val.done") {{ index+1 }}
                IconDone(v-if="val.done === true")
            p(@click="goToStep(index)" :class="index === currentStep? 'font-semibold text-black': 'text-gray-600 '" class="text-xl text-center hover:cursor-pointer") {{val.name}}
       
            hr(v-if="index !== props.steps.length -1" class="absolute top-[1.2rem] left-[3.7rem] sm:left-[5.6rem] md:left-[6.5rem] w-[2.7rem] sm:w-[5rem] md:w-[6rem] h-[1.5px] bg-gray-800")
 
            
           
</template>

<script setup lang="ts">
import IconDone from "~icons/material-symbols/done-rounded";

const route = useRoute();
const props = defineProps<{ steps: Object[] }>();

const currentStep = computed(() => {
  // find current step and return its index from steps array
  return props.steps.findIndex((step) => step.active === true);
});

const emit = defineEmits(["slideTo"]);

const goToStep = (index: number) => {
  // set active step inactivated
  props.steps[currentStep.value].active = false;

  // set step active based on index
  props.steps[index].active = true;
  emit("slideTo", index);
};
</script>

<style lang="sass"></style>
