<template lang="pug">

div(class="flex flex-col items-center w-1/3 text-center ")
    slot(name="icon")
    p(class="text-[2.0625rem] font-bold mt-[1.56rem]") 
        slot(name="title")
    p(class="mt-[1rem] px-[5.1rem]")
        slot(name="subtitle")
</template>

<script setup lang="ts"></script>

<style lang="scss"></style>
