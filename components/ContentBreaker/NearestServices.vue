<template lang="pug">
div(class="flex flex-col items-start justify-center w-full h-[20rem] bg-slate-200 relative px-[2rem] lg:px-[10rem]")
    nuxt-img(src="images/map-example.png"  provider="ipx" class=" z-20 absolute top-0 left-0 object-cover h-full w-full"  format="webp")
    div(class="w-full h-full z-20 absolute top-0 left-0 header-background-dark ")
    p(class="  mb-12 text-3xl lg:text-4xl z-30 text-white font-semibold") The nearest services in your 
        p neighborhood
    button(class="bg-white rounded-lg w-auto px-[1rem] py-[0.5rem] z-30 text-black font-bold") Search Cleaners
</template>

<script setup lang="ts"></script>

<style lang="scss"></style>
