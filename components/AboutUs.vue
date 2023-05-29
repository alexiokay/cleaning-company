<template lang="pug">
div(class="w-full  flex text-center gap-y-12 gap-x-[9rem] ")


    div(class="flex flex-col w-1/2  pt-[2rem] gap-x-[8rem]  ")
        div(class="flex flex-col pl-[19rem] w-full h-auto pb-[4rem]")
            div(class="w-[10rem]  h-[3rem] rounded-full bg-[#Fcf2ec] text-[#F9782b] text-2xl items-center justify-center flex font-bold") ABOUT US
            h2(class="text-[4rem] font-bold text-black text-start") We Are Providing  Best Cleaning Services
        div(class="h-1/3")    
            nuxt-img(src="images/pani_3.png" format="webp" class="w-full  object-contain" )
    div(class="w-1/2 flex flex-col pr-[19rem] gap-x-[8rem] mt-[6rem] gap-y-[1.5rem]")
        div(class="flex flex-col w-full text-start text-3xl font-semibold text-[#7f7d7e] ")
            p(class="leading-[2.6rem]") For over 15 years, customers have welcomed the trusted cleaning proffesionals from locally owned and operated businesses into their homes.
        div(class="flex flex-col w-full mt-[4rem]")
            div(class='bg-[#021108] flex justify-between items-center px-[2rem] h-[5rem] rounded-lg text-white font-semibold text-3xl')
                p Free lifetime Support
                p x
            div(class="bg-bg-white shadow-[0_1px_60px_-15px_rgba(0,0,0,0.4)] text-[#838495] text-2xl px-[2rem] text-start leading-[2.5rem] font-medium py-[1.5rem]")
                p Trought Our Connected Content Approach, We Unite Communications, Digital Experiences, And Performance Marketing To Help More Than 1000 Global Companies.
        div(class=" p-[1.6rem] border-2 border-[#c9c9c9] rounded-lg flex items-center justify-between text-3xl font-bold text-[#838495]")
            p(class="")  100% Satisfaction Guarantee
            p +
        div(class=" p-[1.6rem] border-2 border-[#c9c9c9] rounded-lg flex items-center justify-between text-3xl font-bold text-[#838495]")
            p(class="")  Expert & Experienced Cleaning Staff
            p +
        Button(text="Contact Us" class="w-[16rem] mt-[3rem]")

</template>

<script setup lang="ts"></script>

<style lang="scss"></style>
