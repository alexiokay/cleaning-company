<template lang="pug">
div(class="w-full flex-col md:flex-row  flex text-center gap-y-12 gap-x-[9rem] bg-[#Fcf2ec] md:pt-[4rem] px-2 md:px-0")


    div(class="flex flex-col  w-full md:w-1/2  pt-[2rem] gap-x-[8rem]  ")
        div(class="flex flex-col 3xl:pl-[19rem]  md:pl-[4rem] w-full h-auto pb-[4rem] gap-y-3 md:gap-y-0")
            div(class="mr-auto text-[#F9782b] text-2xl items-center justify-center flex font-bold ml-[2rem]") WHY CHOOSE US?
            h2(class="text-3xl md:text-6xl  md:leading-[4.5rem] font-bold md:font-semibold text-black text-start") We link you with
                span(class="text-[#124944]")  best-suited

                span  , cleaning services that match your needs
            div(class=' md:hidden rounded-xl overflow-hidden w-auto order-0 md:order-0')
                nuxt-img(src="images/pani_6.png" alt="an image of person" format="webp" class="h-full w-full max-h-[45vh]  object-cover " ) <!-- 51 / 6 -->
            div(class="flex flex-col w-full text-start text-xl md:text-2xl 2xl:text-3xl text-[#5d5552] font -mt-1 md:my-4 md:mt-[1rem] ")
                p(class="") Discover the ideal cleaning services that precisely match your needs. Our inteligent matching algorithm will connect you with the best-suited cleaning services in your area.
        div(class='flex h-full w-full md:pl-[19rem] ')
            Button(text="Contact Us" class="w-[16rem]  h-[4rem] md:h-[5rem] order-1 md:order-0 bg-[#fad613] mx-auto md:mx-0")
            div(class="hidden md:flex h-full ml-auto order-0 md:order-1")    
                nuxt-img(src="images/pani43.png" alt="an image of person" format="webp" class=" h-full max-h-[45vh] mt-auto w-auto object-contain ml-auto " )
    div(class="md:w-1/2 w-full flex flex-col 3xl:pr-[19rem] md:pr-[2rem] gap-x-[8rem] gap-y-[1.5rem] md:mt-[3rem] mb:pb-8 ")
        div(class=' hidden md:flex rounded-xl overflow-hidden w-auto order-1 md:order-0')
            nuxt-img(src="images/pani_6.png" alt="an image of person" format="webp" class="h-full w-full max-h-[45vh]  object-cover " ) <!-- 51 / 6 -->
        div(class="flex flex-col md:flex-row gap-y-8  order-0 md:order-1 md:gap-y-0 w-full  mt-2 justify-between text-start mb-8 md:mb-0 ")
            div(class="flex flex-col w-full md:w-2/5 gap-y-4 items-center md:items-start")
                nuxt-img(src="icons/rank.png" alt="rank" format="webp" width="70" height="70")
                p(class="text-2xl md:text-3xl text-gray-700 font-bold") Quality is our property
                p(class="text-[#5d5552] text-xl md:text-2xl  text-center md:text-start") We strive for excellence in every service we provide. If you're ever dissatisfied, we're here to make it right.
            div(class="flex flex-col w-full md:w-2/5 gap-y-4 items-center md:items-start")
                nuxt-img(src="icons/shield.png" alt="shield" format="webp" width="70" height="70")
                p(class="text-2xl md:text-3xl text-gray-700 font-bold") Commitment to safety
                p(class="text-[#5d5552] text-xl md:text-2xl  text-center md:text-start") Your safety matters most.  If you're not fully satisfied with our work, please let us know. We're dedicated to addressing any concerns promptly.

        

</template>

<script setup lang="ts"></script>

<style lang="scss"></style>
