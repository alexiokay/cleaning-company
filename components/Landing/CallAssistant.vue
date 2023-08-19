<template lang="pug">
div(class="w-full md:h-[50rem] pt-[2rem] md:pt-[8rem] flex flex-col  md:px-0 3xl:pl-[19rem] lg:pl-[8rem]  md:pl-6 pl-4 bg-gray-50 md:bg-white")
    div(class="w-full flex flex-col md:flex-row justify-around h-full gap-y-8")
        div(class="flex flex-col w-full md:w-1/2 md:gap-y-[2rem]")
            h2(class="text-3xl md:text-6xl font-bold text-black text-start") Meet our 
                span(class="text-[#40ebf4]") Inteligent 
                span Assistants
            

            p(class="text-[#5d5552] text-xl md:text-2xl font-medium mt-4 md:mt-0") We use AI to help you find perfect suited Cleaning Service providers.

            div(class=" mt-[3rem] md:mt-[6rem] flex flex-col w-full h-auto gap-y-8 text-3xl  md:text-4xl 2xl:ml-[6rem]")
                div(class="flex gap-x-6")
                    ChatbotIcon(class="text-orange-500 md:w-14 md:h-14")
                    p Chatbot
                div(class="flex gap-x-6")
                    CallAssistant(class="text-orange-500 md:w-14 md:h-14")
                    p Call Assistant
                div(class="flex gap-x-6")
                    WebTool(class="text-orange-500 md:w-14 md:h-14")
                    p Web Tool Assistant
                
                
        nuxt-img(:src="'images/call-assistant.png'"   alt="call assistant"  format="webp"  class="w-full md:w-1/2 h-auto object-contain")
        
  
      
</template>

<script setup lang="ts">
import ChatbotIcon from "~icons/tabler/message-chatbot";
import WebTool from "~icons/fluent/window-dev-tools-20-regular";
import CallAssistant from "~icons/tabler/phone-call";
</script>

<style lang="scss"></style>
