<template lang="pug">
div(class="w-full h-full flex flex-col items-center gap-y-4  min-h-screen font-robotolight")
    div(class="flex flex-col w-full gap-y-10 justify-center items-center bg-blue-600 pb-[9.7rem] text-white")
        
        h1.text-center.text-4xl.font-semibold.text-white Hi I'am fresh and tidy.
            p Your cleaning service customization helper
        
        div(class="flex gap-y-4  flex-col")
            p.text-white.text-3xl.text-center How much will the service cost?
            div(class="flex gap-x-4 ")
                select(type="select" placeholder="Select service type" class="w-[20rem] h-[3rem] border-[1px] border-gray-300 rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50")
                    option(value="20") 20
                    option(value="50") 50
                    option(value="100") 100
                button(class="w-[10rem] h-[3rem]  bg-white border-[1px] border-gray-300 rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50") Let's find out
            p.text-gray-300 free, no obligation estimates.
</template>

<script setup lang="ts"></script>

<style lang="scss"></style>
