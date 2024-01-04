<template lang="pug">
div.howItWorks(class="w-full relative h-auto flex flex-col text-center gap-y-6 pt-10 pb-14 xl:px-[26%] p-8 bg-[#f5f6feff]")
    p(class="font-bold text-3xl") How It Works
    div(class="flex flex-col  md:flex-row justify-center items-start gap-x-4 gap-y-4")
        div.howItWorks__item(class="flex flex-col relative justify-center gap-y-4 items-center  w-full md:w-1/3" v-for="(instruction, index) in instructions")
            nuxt-img(:src="instruction.icon" provider="ipx" class="w-24 h-24 aspect-square object-cover ")
            div.flex.items-center.gap-x-2
                div.rounded-full.p-2.text-white.bg-orange-500.w-6.h-6.items-center.justify-center.flex 1
                p.text-lg.font-semibold {{ instruction.title  }}
            p.text-sm.text-center {{ instruction.description  }}
            ArrowIcon(class="absolute top-[30%] right-4 -rotate-[180deg]" v-if="index < instructions.length-1")
</template>

<script setup lang="ts">
import ArrowIcon from "~icons/teenyicons/arrow-left-solid";

const instructions = [
  {
    title: "Share Details Of Your Project",
    description: "Answer a few simple questions about your project.",
    icon: "https://www.homebuddy.com/static/shared1/howItWorks1.svg",
  },
  {
    title: "Get Matched With Local Pros",
    description:
      "We’ll match you with up to 3 local pros who are a perfect fit for your project.",
    icon: "https://www.homebuddy.com/static/shared1/howItWorks2.svg",
  },
  {
    title: "Compare Quotes",
    description:
      "Compare competing quotes and select the best one to get started.",
    icon: "https://www.homebuddy.com/static/shared1/howItWorks3.svg",
  },
];
</script>

<style lang="scss"></style>
