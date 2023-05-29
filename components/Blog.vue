<template lang="pug">
div(class="relative w-full md:px-12 flex flex-col text-center gap-y-10 py-4  pt-[8rem] ")
    p(class="w-[10rem]  h-[3rem] rounded-full bg-[#Fcf2ec] text-[#F9782b] text-2xl items-center justify-center flex font-bold mx-auto") Our Blog
    h2(class="text-black md:text-[4rem]  text-xl font-bold") Latest News & Articles
    
    div(class="flex flex-col lg:flex-row w-full lg:justify-around h-auto items-center justify-center gap-y-12 gap-x-[2.5rem] px-[4rem] md:px-[19rem] mt-[4rem]  ")
        
        div(class="flex flex-col lg:w-1/3 w-full space-y-8  lg:text-start items-center lg:items-start bg-white  rounded-xl ")
            nuxt-img(src="images/news/news_1.png" width="300" h="200" class="w-full h-[25rem] object-cover rounded-xl ")
            div(class="flex w-full text-2xl font-medium text-[#939393]   ")
                p(class="w-3/5") Office Cleaning 
                div.blog-comments(class="flex w-1/5 font-normal justify-end") s s
                div.blog-views(class="flex w-1/5 font-normal justify-end") s s
            hr(class="w-full")
            div(class=" gap-y-4 w-full flex flex-col ")
                h5(class="font-bold text-3xl w-full truncate") What is the difference between  dsa dsa dsa
                p(class='text-2xl  text-[#7f7d7e]') Your trusted locksmith in the Greater Toronto Area
            

                    
                
            button(class='text-[#214e49] text-2xl font-bold flex mt-4') Read More
                ArrowIcon(class="w-8 h-8 ml-3 group-hover:text-[#2da9db] ")
        div(class="flex flex-col lg:w-1/3 w-full space-y-8  lg:text-start items-center lg:items-start bg-white  rounded-xl ")
            nuxt-img(src="images/news/news_1.png" width="300" h="200" class="w-full h-[25rem] object-cover rounded-xl ")
            div(class="flex w-full text-2xl font-medium text-[#939393]   ")
                p(class="w-3/5") Office Cleaning 
                div.blog-comments(class="flex w-1/5 font-normal justify-end") s s
                div.blog-views(class="flex w-1/5 font-normal justify-end") s s
            hr(class="w-full")
            div(class=" gap-y-4 w-full flex flex-col ")
                h5(class="font-bold text-3xl w-full truncate") What is the difference between  dsa dsa dsa
                p(class='text-2xl  text-[#7f7d7e]') Your trusted locksmith in the Greater Toronto Area
            

                    
                
            button(class='text-[#214e49] text-2xl font-bold flex mt-4') Read More
                ArrowIcon(class="w-8 h-8 ml-3 group-hover:text-[#2da9db] ")
        div(class="flex flex-col lg:w-1/3 w-full space-y-8  lg:text-start items-center lg:items-start bg-white  rounded-xl ")
            nuxt-img(src="images/news/news_1.png" width="300" h="200" class="w-full h-[25rem] object-cover rounded-xl ")
            div(class="flex w-full text-2xl font-medium text-[#939393]   ")
                p(class="w-3/5") Office Cleaning 
                div.blog-comments(class="flex w-1/5 font-normal justify-end") s s
                div.blog-views(class="flex w-1/5 font-normal justify-end") s s
            hr(class="w-full")
            div(class=" gap-y-4 w-full flex flex-col ")
                h5(class="font-bold text-3xl w-full truncate") What is the difference between  dsa dsa dsa
                p(class='text-2xl  text-[#7f7d7e]') Your trusted locksmith in the Greater Toronto Area
            

                    
                
            button(class='text-[#214e49] text-2xl font-bold flex mt-4') Read More
                ArrowIcon(class="w-8 h-8 ml-3 group-hover:text-[#2da9db] ")
    buttonsButton(text="View All Posts" class="h-[5rem] w-[17rem] text-xl mx-auto mt-2 text-white")
                template(v-slot:icon)
                    ArrowIcon(class="w-8 h-8 ml-3 group-hover:text-[#2da9db] ")
        
</template>

<script setup lang="ts">
import ArrowIcon from "~icons/ph/arrow-right";
</script>

<style lang="scss"></style>
