<template lang="pug">
div(class="flex flex-col w-full justify-start items-center gap-y-3 py-8  bg-[#f5f6feff] xl:px-[26%] px-8 ")
    h3(class="md:text-3xl font-bold font-flamabook") Why Trust Us With Your Roof?
    ul(class="flex w-full  justify-between items-start mt-8 flex-wrap gap-y-8 ")
        li(class="flex flex-col w-[calc(50%-3rem)] lg:w-[calc(30%-2rem)]  gap-y-3" v-for="i in 6")
            nuxt-img(src="icons/icon_23.png" class="w-12 h-12 aspect-square object-cover")
            p(class="font-bold text-lg") Licensed Local Contractors
            p(class="") You’ll work with honest and experienced professionals from the beginning to end of your roofing project.
        
</template>

<script setup lang="ts"></script>

<style lang="scss"></style>
