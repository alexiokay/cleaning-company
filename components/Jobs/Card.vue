<template lang="pug">
div(class="w-full h-[15rem] bg-white py-4 px-6 flex gap-x-6")
    nuxt-img(src="https://cdn-icons-png.flaticon.com/512/4329/4329449.png" format="webp" class=" aspect-square h-full w-auto bg-slate-100 px-2 pt-4")
    div(class="flex flex-col w-full py-6 justify-between h-full")
        p(class="text-xl font-semibold") Cleaning Job - 
            span.font-normal ( Fresh&Tidy )
        div(class="flex w-full ")
            div(class="w-1/4 flex flex-col")
                p.text-gray-400 Type
                p Writing
            div(class="w-1/4 flex flex-col")
                p.text-gray-400 Monetization
                p Writing
            div(class="w-1/4 flex flex-col")
                p.text-gray-400 Community Size
                p Writing
            div(class="w-1/4 flex flex-col")
                p.text-gray-400 Net Profit
                p Writing
        p Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
    div(class="w-[15rem] flex flex-col py-6")
        p(class="text-xl font-bold") $3,500 - $5,000
</template>

<script setup lang="ts">
import PersonIcon from "~icons/noto-v1/person-shrugging";
</script>

<style lang="scss"></style>
