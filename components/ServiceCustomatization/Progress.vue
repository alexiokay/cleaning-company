<template lang="pug">
div(class="w-full h-auto  flex flex-col  gap-y-4 items-center justify-center py-8 px:8 md:px-[15%] 4xl:px-[25%] bg-[#Fcf2ec]")    
    div( class="w-full md:h-[20rem]  gap-y-4 flex flex-col px-6 py-4 shadow-lg  items-center justify-between rounded-xl bg-white overflow-clip border-[1px]" )
        CloseIcon(@click="$emit('closeProgress')" class=" md:hidden absolute z-50 top-4 right-4 ml-auto text-2xl hover:cursor-pointer w-6 md:w-auto h-6 md:h-auto text-gray-500" ) 

        div.progress-bar(class="w-[calc(100%+3rem)] h-[0.25rem] bg-white -mt-4 "  )
                div.progress-bar__bar(:style="{ width: progressBarLength }" class=" h-full bg-green-500")
       
        p(class="text-center text-lg md:text-2xl text-black font-semibold tracking-wider") {{activeStep.question}}
    
        div(class="flex flex-col gap-y-2 md:flex-row w-full justify-center items-center gap-x-6")
            div.item(@click="makeAnswer(answer)" v-for="answer in activeStep.answers" :key="answer" :class="answer.answered === true? 'border-orange-500': 'border-slate-100  hover:border-orange-500'" class="rounded-lg w-full md:w-1/5 h-full py-6 md:py-14 border-[2px] flex flex-col items-center justify-center hover:cursor-pointer ")
                p.w-full.text-center {{answer.title}}
        button(@click="nextStep" class="w-auto h-[3rem]  bg-orange-300 rounded-md px-6 py-2 text-lg font-bold text-white hover:bg-orange-500") Next
   
</template>

<script setup lang="ts">
import CloseIcon from "~icons/carbon/close-outline";

const props = defineProps({
  steps: {
    type: Object,
    required: true,
  },
});
const router = useRouter();

const activeStep = computed(() => {
  return Object.values(props.steps).find((step) => step.active);
});

const nextStep = () => {
  const activeStep = Object.values(props.steps).find((step) => step.active);
  const activeStepIndex = Object.values(props.steps).indexOf(activeStep);

  if (activeStepIndex + 1 <= Object.values(props.steps).length - 2) {
    const nextStep = Object.values(props.steps)[activeStepIndex + 1];
    activeStep.active = false;
    nextStep.active = true;

    console.log(activeStepIndex);
    console.log(nextStep);
    console.log(activeStep);
  } else {
    router.push({
      path: "/thank-you",
      params: { title: "whole-house" },
    });
  }

  // scroll to top
  window.scrollTo(0, 0);
};

const makeAnswer = (answer) => {
  // allow only one answer
  activeStep.value.answers.forEach((answer) => {
    answer.answered = false;
  });
  answer.answered = true;
};

const progressBarLength = computed(() => {
  const activeStep = Object.values(props.steps).find((step) => step.active);
  const activeStepIndex = Object.values(props.steps).indexOf(activeStep);
  const progress = (activeStepIndex / Object.values(props.steps).length) * 112.5;
  return `${progress}%`;
});
</script>

<style lang="scss">
.progress-bar__bar {
  transition: width 1s;
}
</style>
