<template lang="pug">
div(class="flex flex-col w-full h-auto py-9 justify-center items-center gap-y-3 xl:px-[26%] p-8  ")
    h3(class="text-3xl md:text-3xl font-itim") {{ title }}
    h4(class="text-lg text-center ") We offer a wide range of customizable services to meet every type of need.
    div(class="flex w-full  flex-col sm:flex-row justify-between items-start gap-x-6 mt-3")
        div(class="w-auto h-full  py-8 flex flex-col items-start gap-y-2 justify-start")
            div(class="flex w-full items-center gap-x-4  font-bold" v-for="point in points" )
                CheckIcon
                p {{ point.title }}
        
    
        
        nuxt-img(:src="image" height="1000" width="600" format="webp" provider="ipx" class="rounded-xl sm:w-[60%] md:h-[25vh] object-cover")
</template>

<script setup lang="ts">
import CheckIcon from "~/assets/icons/check.svg";

defineProps({
  image: {
    type: String,
    required: true,
  },
  points: {
    type: Array,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss"></style>
