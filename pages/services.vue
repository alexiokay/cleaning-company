<template lang="pug">
div(class="w-full h-screen flex flex-col items-center gap-y-4  ")
    div(v-show="isHintOpen" class="text-start px-6 py-4 bg-[#Fff6d9] w-full -mb-4 flex items-center gap-x-4")
        BulbIcon(class="w-8 h-8")
        p We use AI to find the best fitting service provider for you from our huge database
        CloseIcon(@click="isHintOpen = false" class="ml-auto text-2xl hover:cursor-pointer") 
    div(class="w-full relative h-auto flex items-center justify-center bg-slate-100 py-12")
        Searchbar(class="w-3/5 h-[5rem]")
    h1 Find best service provider
    Process(:steps='["General", "Location", "Timing", "category"]' )
    div(class="w-3/5  h-auto py-12 flex flex-wrap gap-y-4  mt-2")
        
        div.services__category(class=" flex flex-col items-center w-1/6 font-semibold gap-y-2" v-for="i in 12")
            nuxt-img(src="icons/icon_23.png" width="500" height="500" class="object-cover  aspect-square w-[6rem]" alt="icon" title="icon" format="webp")
            p(class="text-xl") Kitchen
        div.services__category(class=" flex flex-col items-center w-1/6 font-semibold gap-y-2")
            nuxt-img(src="icons/icon_33.png" width="500" height="500" class="object-cover  aspect-square w-[6rem]" alt="icon" title="icon" format="webp")
            p(class="text-xl") Bathroom
    div(class="w-full xl:px-[20rem] relative h-auto flex flex-col items-center justify-center bg-slate-100 py-12")
        div(class="w-full h-[10rem] bg-white px-10 py-8 rounded-2xl") p s
</template>

<script setup lang="ts">
import BulbIcon from "~icons/openmoji/light-bulb";
import CloseIcon from "~icons/ic/round-close";

const isHintOpen = ref(true);
</script>

<style lang="scss"></style>
