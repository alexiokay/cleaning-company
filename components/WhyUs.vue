<template lang="pug">
div(class="w-full  flex text-center gap-y-12 gap-x-[9rem] bg-[#Fcf2ec] pt-[4rem]")


    div(class="flex flex-col w-1/2  pt-[2rem] gap-x-[8rem]  ")
        div(class="flex flex-col pl-[19rem] w-full h-auto pb-[4rem]")
            div(class="mr-auto text-[#F9782b] text-2xl items-center justify-center flex font-bold ml-[2rem]") WHY CHOOSE US?
            h2(class="text-6xl leading-[4.5rem] font-semibold text-black text-start") We maintain healthy, environments through our services
            div(class="flex flex-col w-full text-start text-2xl font-semibold text-[#7f7d7e] mt-[1rem] ")
                p(class="leading-[2.6rem]") For over 15 years, customers have welcomed the trusted cleaning proffesionals from locally owned and operated businesses into their homes.
        div(class='flex h-full w-full pl-[19rem]')
            Button(text="Contact Us" class="w-[16rem]  h-[5rem]")
            div(class="h-full ml-auto")    
                nuxt-img(src="images/pani43.png" format="webp" class="h-full max-h-[45vh] mt-auto w-auto object-contain ml-auto" )
    div(class="w-1/2 flex flex-col pr-[19rem] gap-x-[8rem] gap-y-[1.5rem] mt-[3rem]")
        div(class='rounded-xl overflow-hidden w-auto')
            nuxt-img(src="images/pani_6.png" format="webp" class="h-full w-full max-h-[45vh]  object-cover " ) <!-- 51 / 6 -->
        div(class="flex  w-full mt-[4rem] justify-between text-start")
            div(class="flex flex-col w-2/5 gap-y-4")
                nuxt-img(src="icons/rank.png" format="webp" width="70" height="70")
                p(class="text-3xl text-gray-700 font-bold") Quality is our property
                p(class="text-[#7f7d7e] text-2xl font-semibold") While we are by no means perfect, if you're not happy with the job.
            div(class="flex flex-col w-2/5 gap-y-4")
                nuxt-img(src="icons/shield.png" format="webp" width="70" height="70")
                p(class="text-3xl text-gray-700 font-bold") Commitment to safety
                p(class="text-[#7f7d7e] text-2xl font-semibold") While we are by no means perfect, if you're not happy with the job.

        

</template>

<script setup lang="ts"></script>

<style lang="scss"></style>
