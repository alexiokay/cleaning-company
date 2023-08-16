<template lang="pug">
div(class="w-full min-h-screen flex flex-col items-center px-4 justify-start py-8  lg:px-[15%]  gap-y-8 md:gap-y-12 bg-slate-100")
    div(class="flex w-full justify-between items-center")
        div(class="flex flex-col")
            h1(class="text-xl font-bold") Avalible Jobs
            p 100 results
        select(class="w-[10rem] h-[3rem]  bg-white border-[1px] border-gray-300 rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50")
            option(value="20") 20
            option(value="50") 50
            option(value="100") 100
    div(class="w-full h-full flex flex-col  gap-y-2")
        JobsCard.bg-gray-300(v-for="i in 10" :key="i")
        div(class="flex w-full")
</template>

<script setup lang="ts"></script>

<style lang="scss"></style>
