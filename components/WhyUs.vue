<template lang="pug">
div(class="w-full flex-col md:flex-row  flex text-center gap-y-12 gap-x-[9rem] bg-[#Fcf2ec] md:pt-[4rem] px-2 md:px-0")


    div(class="flex flex-col  w-full md:w-1/2  pt-[2rem] gap-x-[8rem]  ")
        div(class="flex flex-col 3xl:pl-[19rem]  md:pl-[4rem] w-full h-auto pb-[4rem] gap-y-[1.5rem] md:gap-y-0")
            div(class="mr-auto text-[#F9782b] text-2xl items-center justify-center flex font-bold ml-[2rem]") WHY CHOOSE US?
            h2(class="text-5xl md:text-6xl md:leading-[4.5rem] font-bold md:font-semibold text-black text-start") We maintain healthy, environments through our services
            div(class="flex flex-col w-full text-start text-xl md:text-2xl font-semibold text-[#7f7d7e] mt-[1rem] ")
                p(class="leading-[2.6rem]") For over 15 years, customers have welcomed the trusted cleaning proffesionals from locally owned and operated businesses into their homes.
        div(class='flex h-full w-full md:pl-[19rem] ')
            Button(text="Contact Us" class="w-[16rem]  h-[4rem] md:h-[5rem] order-1")
            div(class="h-full ml-auto")    
                nuxt-img(src="images/pani43.png" format="webp" class="h-full max-h-[45vh] mt-auto w-auto object-contain ml-auto" )
    div(class="md:w-1/2 w-full flex flex-col 3xl:pr-[19rem] md:pr-[2rem] gap-x-[8rem] gap-y-[1.5rem] md:mt-[3rem] mb:pb-8 ")
        div(class='rounded-xl overflow-hidden w-auto order-1 md:order-0')
            nuxt-img(src="images/pani_6.png" format="webp" class="h-full w-full max-h-[45vh]  object-cover " ) <!-- 51 / 6 -->
        div(class="flex flex-col md:flex-row gap-y-8  order-0 md:order-1 md:gap-y-0 w-full  mt-2 justify-between text-start mb-8 md:mb-0 ")
            div(class="flex flex-col w-full md:w-2/5 gap-y-4 items-center md:items-start")
                nuxt-img(src="icons/rank.png" format="webp" width="70" height="70")
                p(class="text-2xl md:text-3xl text-gray-700 font-bold") Quality is our property
                p(class="text-[#7f7d7e] text-xl md:text-2xl font-semibold text-center md:text-start") While we are by no means perfect, if you're not happy with the job.
            div(class="flex flex-col w-full md:w-2/5 gap-y-4 items-center md:items-start")
                nuxt-img(src="icons/shield.png" format="webp" width="70" height="70")
                p(class="text-2xl md:text-3xl text-gray-700 font-bold") Commitment to safety
                p(class="text-[#7f7d7e] text-xl md:text-2xl font-semibold text-center md:text-start") While we are by no means perfect, if you're not happy with the job.

        

</template>

<script setup lang="ts"></script>

<style lang="scss"></style>
