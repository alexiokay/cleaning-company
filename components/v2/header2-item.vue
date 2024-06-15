<template lang="pug">

div(class="flex flex-col gap-y-4 items-center w-full lg:w-1/3 text-center ")
    slot(name="icon")
    p(class="text-[1.4rem] w-[85%] lg:w-full text-xl flex items-center justify-center lg:text-[2.0625rem] font-bold ") 
        slot(name="title")
    p(class="lg:px-[5.1rem] h-auto w-[90%] lg:w-full")
        slot(name="subtitle")
</template>

<script setup lang="ts"></script>

<style lang="scss"></style>
