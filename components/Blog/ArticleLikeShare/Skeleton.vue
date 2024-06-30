<template lang="pug">
div(class="flex gap-x-2 items-center text-sm font-semibold relative select-none animate-pulse ")
    div#article_options(class="bg-[#f7f7f7] w-[186.22px] px-3 h-full flex gap-x-2 items-center hover:cursor-pointer hover-text-animation")
     
           
            
            
        
    div(@click="$emit('share')" class="bg-[#f7f7f7] w-[91.25px] h-[42.38px] px-3 py-[0.7rem] items-center flex gap-x-2 md:hover:text-blue-400  hover-text-animation hover:cursor-pointer ")
        MdiShare(  class="w-5 h-5")
        p(class="hidden md:block ") 
    
</template>

<script setup lang="ts"></script>

<style lang="scss"></style>
