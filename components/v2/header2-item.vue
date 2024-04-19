<template lang="pug">

div(class="flex flex-col  items-center w-full lg:w-1/3 text-center ")
    slot(name="icon")
    p(class="text-[1.4rem] lg:text-[2.0625rem] font-bold mt-[1.56rem]") 
        slot(name="title")
    p(class="mt-[1rem] lg:px-[5.1rem] h-auto")
        slot(name="subtitle")
</template>

<script setup lang="ts"></script>

<style lang="scss"></style>
