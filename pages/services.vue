<template lang="pug">
div(class="w-full h-screen flex flex-col items-center  ")
    div(class="w-full h-auto flex items-center justify-center bg-slate-100 py-12")
       
    h2(class="text-5xl mt-12") Categories
    div(class="w-3/5  h-auto py-12 flex ")
        
        div.services__category(class=" flex flex-col items-center w-1/6 font-semibold gap-y-2")
            nuxt-img(src="icons/icon_23.png" width="500" height="500" class="object-cover  aspect-square w-[8rem]" alt="icon" title="icon" format="webp")
            p(class="text-xl") Kitchen
        div.services__category(class=" flex flex-col items-center w-1/6 font-semibold gap-y-2")
            nuxt-img(src="icons/icon_33.png" width="500" height="500" class="object-cover  aspect-square w-[8rem]" alt="icon" title="icon" format="webp")
            p(class="text-xl") Bathroom
</template>

<script setup lang="ts"></script>

<style lang="scss"></style>
