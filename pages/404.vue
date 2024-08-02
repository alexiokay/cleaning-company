<template lang="pug">
div(class="h-screen lg:h-[calc(100vh-4.5rem)] flex items-center justify-center relative px-2 lg:px-0")
    div(class="relative flex flex-col lg:mr-[15rem] xl:mr-[30rem] gap-y-[4rem] justify-center items-center")
        p(class="lg:absolute top-[5rem] -right-[12rem] text-3xl lg:text-4xl text-red-700 ") Oops! Page not found.
        nuxt-img(src="images/oops.png" provider="ipx" width="800"  format="webp" class="object-contain  h-[calc(100%+10rem)] z-40  ")
        
</template>

<script setup lang="ts"></script>

<style lang="scss"></style>
