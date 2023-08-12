<template lang="pug">
div#cart-process(class="flex h-auto w-full items-center justify-center sm:justify-between md:justify-center md:gap-x-16")
   
    div( class="flex h-full justify-center sm:w-auto w-auto relative")
        div(v-for="(val, index, key) in props.steps" class="w-[5rem] sm:w-[8rem] relative md:w-[9.5rem] h-[4rem]  flex flex-col justify-between items-center")
            button(@click="goToStep(index)" class="w-10 h-10 rounded-full items-center justify-center flex " :class="{ 'bg-gray-500 text-white': index < currentStep, 'bg-white border-[1px] border-gray-400': index > currentStep, 'bg-black text-white': index === currentStep }")
                p(v-if="index >=currentStep") {{ index+1 }}
                IconDone(v-if="index < currentStep")
            p(class="text-xs text-gray-500 text-center") {{val}}
       
            hr(v-if="index !== props.steps.length -1" class="absolute top-[0.95rem] left-[3.7rem] sm:left-[5.6rem] md:left-[6.2rem] w-[2.7rem] sm:w-[5rem] md:w-[6.5rem] h-[1.5px] bg-gray-800")
 
            
           
</template>

<script setup lang="ts">
import IconDone from "~icons/material-symbols/done-rounded";

const route = useRoute();
const props = defineProps<{ steps: string[] }>();
const currentStep = computed(() => {
  if (route.name === "services") return 0;
  if (route.path === "/cart/order") return 1;
  if (route.path === "/cart/payment") return 2;
  if (route.path === "/cart/ready") return 3;
});
const router = useRouter();
const goToStep = (index: number) => {
  if (index === 0) {
    router.push("/cart");
  }
  if (index === 1) {
    router.push("/cart/order");
  }
};
</script>

<style lang="sass"></style>
