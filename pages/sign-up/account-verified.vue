<template lang="pug">
div(class="flex flex-col items-center justify-center  h-[48rem] lg:h-[83vh] relative px-2 lg:px-0 ")
    nuxt-img(src="images/verified-bg.png" format="webp" alt="verified-bg" class="absolute top-0 w-full h-full object-cover object-bottom z-20 scale-[1.0]")
    div(class="w-full lg:w-[37.9375rem] h-auto relative bg-white bg-[rgba(255, 255, 255, 0.70)] rounded-xl z-50 flex flex-col px-[3rem] lg:px-[9.07rem] py-[3.5rem] lg:py-[11rem] backdrop-blur-[4px]")
        nuxt-img(src="images/verified-hands.png" format="webp" alt="verified-bg"  class="absolute -top-[2rem] left-0  right-0 mx-auto w-[17.37rem]  object-bottom  scale-[1.0]")

        h1(class=" font-bold text-[3rem] text-center ") Good job!
        p(class="text-[1.4375rem] text-center gap-x-2 flex flex-wrap justify-center") Your account has been 
            span verified.

        p(class="text-base text-center mt-[3rem] gap-x-1 flex justify-center") 👉 You can 
            button(class="font-bold underline" @click="writeToUs") log in 
            span now.
</template>

<script setup lang="ts"></script>

<style lang="scss"></style>
