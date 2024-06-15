<template lang="pug">
div(class="flex flex-col items-center justify-center  h-[48rem] lg:h-[83vh] relative px-2 lg:px-0 ")
    nuxt-img(src="images/login-bg2.png" format="webp" alt="login-bg" class="absolute top-0 w-full h-full object-cover object-bottom z-20 scale-[1.05]")
    div(class="w-full lg:w-[37.9375rem] h-auto bg-white bg-[rgba(255, 255, 255, 0.70)] rounded-xl z-50 flex flex-col px-[3rem] lg:px-[9.07rem] py-[3.5rem] lg:py-[4rem] backdrop-blur-[4px]")
        slot(name="all")
</template>

<script setup lang="ts"></script>

<style lang="scss"></style>
