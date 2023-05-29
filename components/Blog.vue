<template lang="pug">
div(class="relative w-full md:px-12 flex flex-col text-center gap-y-12 py-4  pt-[8rem]")
    h3(class="text-[#02374b] md:text-[4rem]  text-xl font-bold") News & Blog
    p(class='text-2xl font-semibold text-[#7c8e98]') Your trusted locksmith in the Greater Toronto Area
    div(class="absolute left-0  h-[40rem] w-full z-[-1] -top-[16rem] rounded-b-[9rem] bg-[#F2f6f7] shadow-[0_35px_30px_-25px_rgba(0,0,0,0.1)]")
    div(class="flex flex-col lg:flex-row w-full lg:justify-around h-auto items-center justify-center gap-y-12 gap-x-[6%] px-[4rem] md:px-[8rem]  ")
        
        div(class="flex flex-col lg:w-1/3 w-full space-y-10 text-[#02374b] lg:text-start items-center lg:items-start bg-white  rounded-xl  ")
            nuxt-img(src="images/news/news_1.png" width="300" h="100" class="w-full h-[18rem] object-cover rounded-2xl ")
            div(class="px-[2rem] gap-y-4 w-full flex flex-col ")
                h3(class="font-bold text-3xl ") Automotive Rates
                p(class='text-2xl  text-[#7c8e98]') Your trusted locksmith in the Greater Toronto Area

                    
                
                button(class='text-[#2da9db] text-2xl font-semibold flex mt-4') Read More
                    ArrowIcon(class="w-8 h-8 ml-3 group-hover:text-[#2da9db] ")
        div(class="flex flex-col lg:w-1/3 w-full space-y-10 text-[#02374b] lg:text-start items-center lg:items-start bg-white  rounded-xl  ")
            nuxt-img(src="images/news/news_2.png" width="300" h="100" class="w-full h-[18rem] object-cover rounded-2xl")
            div(class="px-[2rem] gap-y-4 w-full flex flex-col")
                h3(class="font-bold text-3xl") Automotive Rates
                p(class='text-2xl  text-[#7c8e98]') Your trusted locksmith in the Greater Toronto Area

                    
                
                button(class='text-[#2da9db] text-2xl font-semibold flex mt-4 ') Read More
                    ArrowIcon(class="w-8 h-8 ml-3 group-hover:text-[#2da9db] ")
        div(class="flex flex-col lg:w-1/3 w-full space-y-10 text-[#02374b] lg:text-start items-center lg:items-start bg-white  rounded-xl  ")
            nuxt-img(src="images/news/news_3.png" width="300" h="100" class="w-full h-[18rem] object-cover rounded-2xl")
            div(class="px-[2rem] gap-y-4 w-full flex flex-col")
                h3(class="font-bold text-3xl") Automotive Rates
                p(class='text-2xl  text-[#7c8e98]') Your trusted locksmith in the Greater Toronto Area

                    
                
                button(class='text-[#2da9db] text-2xl font-semibold flex mt-4 ') Read More
                    ArrowIcon(class="w-8 h-8 ml-3 group-hover:text-[#2da9db] ")
    buttonsButton(text="View All Posts" class="h-[5rem] w-[17rem] text-xl mx-auto mt-2 text-white")
                template(v-slot:icon)
                    ArrowIcon(class="w-8 h-8 ml-3 group-hover:text-[#2da9db] ")
        
</template>

<script setup lang="ts">
import ArrowIcon from "~icons/ph/arrow-right";
</script>

<style lang="scss"></style>
