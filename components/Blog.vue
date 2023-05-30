<template lang="pug">
div(class="relative w-full md:px-12 flex flex-col text-center gap-y-4 md:gap-y-10 py-4  pt-[2rem] ")
    p(class="w-[10rem]  h-[3rem] rounded-full bg-[#Fcf2ec] text-[#F9782b] text-2xl items-center justify-center flex font-bold mx-auto") Our Blog
    h2(class="text-black md:text-[4rem]  text-xl font-bold") Latest News & Articles
    
    div(class="flex flex-col lg:flex-row w-full lg:justify-around h-auto items-center justify-center gap-y-12 gap-x-[2.5rem] 3xl:px-[19rem]  md:px-[4rem] px-[1rem] md:mt-[4rem] mt-[1rem]  ")
        
        div(class="relative flex flex-col lg:w-1/3 w-full space-y-4 md:space-y-8  lg:text-start items-center lg:items-start bg-white  rounded-xl   ")
            nuxt-img(src="images/news/news_1.png" width="300" h="200" class="w-full md:h-[25rem] h-[13rem] object-cover rounded-xl ")
            div(class="absolute top-0 left-[2rem] p-4 bg-[#Ffffff] font-medium text-xl text-[#7f7d7e]")
                p 02 Dec 2021
            div(class="flex w-full text-xl md:text-2xl font-medium text-[#939393]  items-center ")
                p(class="w-4/5 md:w-3/5 text-start") Office Cleaning 
                div.blog-comments(class="flex w-1/5 font-normal justify-end items-center space-x-3") 
                    CommentsIcon(class="w-4 h-4 md:w-6 md:h-6 md:ml-3  ")
                    p.text-sm 25
                div.blog-views(class="flex w-2/6 font-normal justify-end items-center space-x-3") 
                    ViewsIcon(class="w-5 h-5 md:w-7 md:h-7 ml-3  ")
                    p.text-sm 32 k
            hr(class="w-full")
            div(class=" gap-y-4 w-full flex flex-col ")
                h5(class="font-bold text-xl md:text-3xl w-full truncate") What is the difference between  dsa dsa dsa
                p(class='text-xl md:text-2xl  text-[#7f7d7e] md:text-center text-start') Your trusted locksmith in the Greater Toronto Area
            

                    
                
            button(class='text-[#214e49] text-xl md:text-2xl font-bold flex mt-4 mr-auto md:mr-0') Read More
                ArrowIcon(class="w-8 h-8 ml-3 group-hover:text-[#2da9db] ")
        div(class="relative flex flex-col lg:w-1/3 w-full space-y-4 md:space-y-8  lg:text-start items-center lg:items-start bg-white  rounded-xl mt-6 md:mt-0")
            nuxt-img(src="images/news/news_1.png" width="300" h="200" class="w-full md:h-[25rem] h-[13rem] object-cover rounded-xl ")
            div(class="absolute top-0 left-[2rem] p-4 bg-[#Ffffff] font-medium text-xl text-[#7f7d7e]")
                p 02 Dec 2021
            div(class="flex w-full text-xl md:text-2xl font-medium text-[#939393]  items-center ")
                p(class="w-4/5 md:w-3/5 text-start") Office Cleaning 
                div.blog-comments(class="flex w-1/5 font-normal justify-end items-center space-x-3") 
                    CommentsIcon(class="w-4 h-4 md:w-6 md:h-6  md:ml-3  ")
                    p.text-sm 25
                div.blog-views(class="flex w-2/6  font-normal justify-end items-center space-x-3") 
                    ViewsIcon(class="w-5 h-5 md:w-7 md:h-7 ml-3  ")
                    p.text-sm 32 k
            hr(class="w-full")
            div(class=" gap-y-4 w-full flex flex-col ")
                h5(class="font-bold text-xl md:text-3xl w-full truncate ") What is the difference between  dsa dsa dsa
                p(class='text-xl md:text-2xl  text-[#7f7d7e] md:text-center text-start') Your trusted locksmith in the Greater Toronto Area
            

                    
                
            button(class='text-[#214e49] text-xl md:text-2xl font-bold flex mt-4 mr-auto md:mr-0') Read More
                ArrowIcon(class="w-8 h-8 ml-3 group-hover:text-[#2da9db] ")
        div(class="relative flex flex-col lg:w-1/3 w-full space-y-4 md:space-y-8  lg:text-start items-center lg:items-start bg-white  rounded-xl mt-6 md:mt-0 ")
            nuxt-img(src="images/news/news_1.png" width="300" h="200" class="w-full md:h-[25rem] h-[13rem] object-cover rounded-xl ")
            div(class="absolute top-0 left-[2rem] p-4 bg-[#Ffffff] font-medium text-xl text-[#7f7d7e]")
                p 02 Dec 2021
            div(class="flex w-full text-xl md:text-2xl font-medium text-[#939393]   items-center")
                p(class="w-4/5 md:w-3/5 text-start") Office Cleaning 
                div.blog-comments(class="flex w-1/5 font-normal justify-end items-center space-x-3") 
                    CommentsIcon(class="w-4 h-4 md:w-6 md:h-6  md:ml-3  ")
                    p.text-sm 25
                div.blog-views(class="flex w-2/6   font-normal justify-end items-center space-x-3") 
                    ViewsIcon(class="w-5 h-5 md:w-7 md:h-7 ml-3  ")
                    p.text-sm 32 k
            hr(class="w-full")
            div(class=" gap-y-4 w-full flex flex-col ")
                h5(class="font-bold text-xl md:text-3xl w-full truncate") What is the difference between  dsa dsa dsa
                p(class='text-xl md:text-2xl  text-[#7f7d7e] md:text-center text-start') Your trusted locksmith in the Greater Toronto Area
            

                    
                
            button(class='text-[#214e49] text-xl md:text-2xl font-bold flex mt-4 mr-auto md:mr-0') Read More
                ArrowIcon(class="w-8 h-8 ml-3 group-hover:text-[#2da9db] ")
    buttonsButton(text="View All Posts" class="h-[5rem] w-[17rem] text-xl mx-auto mt-2 text-white")
                template(v-slot:icon)
                    ArrowIcon(class="w-8 h-8 ml-3 group-hover:text-[#2da9db] ")
        
</template>

<script setup lang="ts">
import ArrowIcon from "~icons/ph/arrow-right";
import CommentsIcon from "~icons/octicon/comment-24";
import ViewsIcon from "~icons/carbon/view";
</script>

<style lang="scss"></style>
