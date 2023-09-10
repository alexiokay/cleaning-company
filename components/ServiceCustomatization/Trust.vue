<template lang="pug">
div(class="flex flex-col w-full justify-start items-center gap-y-3 py-10   xl:px-[26%] px-8 ")
    h3(class="md:text-3xl font-bold font-flamabook") Trust Us From Start To Finish
    ul(class="flex w-full  justify-between lg:justify-center items-start mt-8 flex-wrap gap-y-8 ")
        li(class="flex flex-col w-[calc(33%-0.5rem)] md:w-[calc(33%-2rem)] lg:w-[calc(30%-2rem)]  gap-y-4" v-for="i in 3")
            p(class="font-extrabold text-2xl md:text-3xl lg:text-5xl") 112,651
            div(class="flex w-full md:gap-x-3 gap-x-1")
                nuxt-img(src="https://www.homebuddy.com/static/shared/icons/arrow-point-north-east_outlined_orange_24x24.svg" provider="ipx" class="object-contain")
                p Project requests

</template>

<script setup lang="ts"></script>

<style lang="scss"></style>
