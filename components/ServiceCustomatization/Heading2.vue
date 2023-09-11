<template lang="pug">

div(class="flex flex-col w-full justify-start items-center gap-y-3 py-8  bg-[#f5f6feff] xl:px-[26%] p-8 ")
    h3(class="md:text-3xl font-bold font-flamabook") {{service.name}} cleaning
    h4(class="text-lg ") 
        slot(name="subtitle")
    div(class="flex w-full  justify-center items-start gap-x-6 md:gap-x-[6rem] mt-3")
        div(class="flex flex-col h-auto gap-y-6 text-lg")
            nuxt-img(:src="image1" format="webp" provider="ipx" class="rounded-xl object-cover h-[20.5vh]")
            h5.text-xl 
                slot(name="title1")
            p 
                slot(name="content1")
        div(class="flex flex-col h-full gap-y-6  text-lg")
            nuxt-img(:src="image2" provider="ipx" class="rounded-xl object-cover h-[20.5vh]")
            h5.text-xl 
                slot(name="title2")
            p 
                slot(name="content2")
</template>

<script setup lang="ts">
defineProps({
  image1: {
    type: String,
    required: true,
  },
  image2: {
    type: String,
    required: true,
  },
  service: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="scss"></style>
