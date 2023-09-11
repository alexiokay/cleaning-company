<template lang="pug">
div(class="flex flex-col w-full justify-start items-center gap-y-3 py-8  bg-[#f5f6feff] xl:px-[26%] p-8 ")
    h3(class="md:text-3xl font-bold font-flamabook") {{ title }}
    h4(class="text-lg ") 
        slot(name="subtitle")
    div(class="flex w-full  justify-center items-start gap-x-6 md:gap-x-[6rem] mt-3")
        div(class="flex flex-col h-auto gap-y-6 text-lg w-1/2")
            nuxt-img(:src="image1" format="webp" provider="ipx" class="rounded-xl h-[21.5vh] object-cover")
            h5.text-xl.font-bold 
                slot(name="benefit1")
           
        div(class="flex flex-col h-full gap-y-6  text-lg w-1/2")
            nuxt-img(:src="image2" provider="ipx" class="rounded-xl h-[21.5vh] object-cover")
            h5.text-xl.font-bold 
                slot(name="benefit2")
    ul(class="flex w-full  justify-between items-start mt-8 flex-wrap gap-y-8 ")
        li(class="flex flex-col w-[calc(50%-3rem)] lg:w-[calc(30%-2rem)]  gap-y-3" v-for="i in 3")
            nuxt-img(src="https://www.homebuddy.com/static/roofing/advantages/7.svg" provider="ipx" class="w-10 h-10 aspect-square object-cover")
            p(class="font-bold text-lg") Reasonably Priced
            p(class="") You’ll work with honest and experienced professionals from the beginning to end of your roofing project.
          
</template>

<script setup lang="ts">
const props = defineProps({
  image1: {
    type: String,
    required: true,
  },
  image2: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss"></style>
