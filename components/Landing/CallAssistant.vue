<template lang="pug">
div(class="w-full h-[50rem] pt-[8rem] flex flex-col px-[10%] ")
    div(class="w-full flex justify-around h-full")
        div(class="flex flex-col w-1/2 gap-y-[2rem]")
                h2(class="text-3xl md:text-6xl font-bold text-black text-start") Meet our 
                    span(class="text-[#40ebf4]") Inteligent 
                    span call Assistant

                p(class="text-[#5d5552] text-xl md:text-2xl font-medium mt-4 md:mt-0") We use AI to help you find perfect suited Cleaning Service providers.
              
        nuxt-img(:src="'images/call-assistant.png'"   alt="call assistant"  format="webp"  class="w-1/2 h-auto object-contain")
        
  
      
</template>

<script setup lang="ts"></script>

<style lang="scss"></style>
