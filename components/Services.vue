<template lang="pug">
div(class="w-full  flex flex-col  items-center text-center gap-y-4 gap-x-[9rem] pt-[4rem] px-[19rem]")

        div(class="w-[10rem]  h-[3rem] rounded-full bg-[#Fcf2ec] text-[#F9782b] text-2xl items-center justify-center flex font-bold") Services
        h2(class="text-6xl leading-[4.5rem] font-semibold text-black text-start") Our Best Cleaning Services
        div(class="w-full flex flex-wrap justify-between gap-y-[2.6rem] mt-[3rem]")
            div(class="flex flex-col lg:w-[calc(33%-1.3rem)] w-3/4 gap-y-6 text-[#02374b] lg:text-center items-center lg:items-center shadow-[0_1px_60px_-15px_rgba(0,0,0,0.1)] rounded-3xl p-[4rem] hover:cursor-pointer")
                nuxt-img(src="icons/icon_13.png" width="150" h="45")
                h3(class="font-bold text-4xl") HOUSE CLEANING
                p(class="text-2xl font-medium text-[#7f7d7e]") We clean and care  for variety of hard surface flooring at many places of business.
            div(class="flex flex-col lg:w-[calc(33%-1.3rem)] w-3/4 gap-y-6 text-[#02374b] lg:text-center items-center lg:items-center shadow-[0_1px_60px_-15px_rgba(0,0,0,0.1)] rounded-3xl p-[4rem] hover:cursor-pointer")
                nuxt-img(src="icons/icon_23.png" width="150" h="45")
                h3(class="font-bold text-4xl") KITCHEN CLEANING
                p(class="text-2xl text-[#7f7d7e]") We clean and care  for variety of hard surface flooring at many places of business.
            div(class="flex flex-col lg:w-[calc(33%-1.3rem)] w-3/4 gap-y-6 text-[#02374b] lg:text-center items-center lg:items-center shadow-[0_1px_60px_-15px_rgba(0,0,0,0.1)] rounded-3xl p-[4rem] hover:cursor-pointer")
                nuxt-img(src="icons/icon_33.png" width="150" h="45")
                h3(class="font-bold text-4xl") FLOOR CLEANING
                p(class="text-2xl text-[#7f7d7e]") We clean and care  for variety of hard surface flooring at many places of business.
            div(class="flex flex-col lg:w-[calc(33%-1.3rem)] w-3/4 gap-y-6 text-[#02374b] lg:text-center items-center lg:items-center shadow-[0_1px_60px_-15px_rgba(0,0,0,0.1)] rounded-3xl p-[4rem] hover:cursor-pointer")
                nuxt-img(src="icons/icon_43.png" width="150" h="45")
                h3(class="font-bold text-4xl") BATHROOM CLEANING
                p(class="text-2xl text-[#7f7d7e]") We clean and care  for variety of hard surface flooring at many places of business.
            div(class="flex flex-col lg:w-[calc(33%-1.3rem)] w-3/4 gap-y-6 text-[#02374b] lg:text-center items-center lg:items-center shadow-[0_1px_60px_-15px_rgba(0,0,0,0.1)] rounded-3xl p-[4rem] hover:cursor-pointer")
                nuxt-img(src="icons/icon_53.png" width="150" h="45")
                h3(class="font-bold text-4xl") OFFICE CLEANING
                p(class="text-2xl text-[#7f7d7e]") We clean and care  for variety of hard surface flooring at many places of business.
            div(class="flex flex-col lg:w-[calc(33%-1.3rem)] w-3/4 gap-y-6 text-white lg:text-center items-center justify-center lg:items-center bg-[#111111]  hover:cursor-pointer shadow-[0_1px_60px_-15px_rgba(0,0,0,0.1)] rounded-3xl p-[4rem]")
               
                h3(class="font-bold text-7xl leading-[6rem]") 12+ 
                    span(class="text-5xl font-normal") Services 
                    p(class="text-5xl font-normal") You can Explore
                ArrowIcon(class="  w-[6rem] h-[6rem]  aspect-video  hover:cursor-pointer hover:text-[#2da9db] text-yellow-400 rotate-180 mr-auto ml-[4rem]")

</template>

<script setup lang="ts">
import ArrowIcon from "~icons/teenyicons/arrow-left-solid";
</script>

<style lang="scss"></style>
