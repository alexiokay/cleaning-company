<template lang="pug">
div(class="flex flex-col gap-y-2 items-center group  relative w-[3rem]")
    p(class="group-hover:text-blue-400 hover-text-animation") I like it
    NotoThumbsUp(  class="w-6 h-6 absolute top-1/2 -translate-y-1/2 group-hover:w-7 group-hover:h-7  hover-thumb-animation ")
    slot(name="icon")
    p(class="absolute text-[0.6rem] bottom-0 text-slate-500") 2 
</template>

<script setup lang="ts"></script>

<style lang="scss"></style>
