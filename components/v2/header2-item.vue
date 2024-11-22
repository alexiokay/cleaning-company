<template lang="pug">

div(class="flex flex-col gap-y-4 items-center w-full  text-center " data-aos="fade-down"  data-aos-offset="150"
 data-aos-once="true")
        
    div(class="min-h-[4rem]")    
        slot(name="icon")
    p(class="text-[1.4rem] w-[80%]  text-xl flex items-center justify-center lg:text-[2.0625rem] font-bold md:leading-[2.3rem] ") 
        slot(name="title")
    p(class="lg:px-[5.1rem] h-[8rem] w-[85%] lg:w-full mt-auto")
        slot(name="subtitle")
</template>

<script setup lang="ts"></script>

<style lang="scss"></style>
