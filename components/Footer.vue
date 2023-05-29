<template lang="pug">
div(class=" h-auto flex flex-col items-center justify-around gap-y-16 pb-[5rem] px-[24rem] mx-auto bg-[#0f0f0f]")
    div(class="w-full h-auto flex justify-between items-center  ")
        div(class="flex flex-col w-2/5 gap-y-6 my-[4rem]")
            p(class="text-[#Fafafa] text-5xl font-bold") Subscribe Our Newsletter
            p(class="text-[#7f7d7e] text-2xl") Enter your details to get business inspiration, trending solutions, and consulting tips delivered to your inbox
        div(class="flex  w-2/5 gap-y-6")
            input(class="w-full h-[5rem]   border-[#7f7d7e] px-4 text-[#7f7d7e] placeholder-[#7f7d7e] text-xl focus:outline-none")
            buton(class="w-2/6 items-center justify-center flex h-[5rem]  bg-[#fad613] text-[#1e2424] text-2xl font-bold") Subscribe
        
    hr(class="w-full h-[2px] border-zinc-700")
    div(class="flex w-full flex-row flex-wrap lg:flex-nowrap gap-y-8 lg:gap-y-0 justify-between lg:justify-normal")
        div(class='flex flex-col w-full lg:w-2/5 mr-[9rem] gap-y-4 ')
            div(class="flex w-full items-center justify-start  ")
                nuxt-img(class="" alt="logo2"  src="/images/logo2.png" class="w-1/5 h-auto" format="webp")
                nuxt-img(src="/images/text-removebg-preview.png" alt="logo-tekst" class="w-2/5 h-full" format="webp")
            p(class='text-[#7f7d7e] text-2xl mt-2 leading-[2.6rem] font-medium') Business consultants provide management consulting to help businessses and organizations improove performance.
            div(class="w-full h-auto flex justify-start items-center gap-x-6 mt-[3rem]")    
                div(class="rounded-full p-4 border-[0.1rem] border-gray-400")
                    FacebookIcon(class="w-[1.2rem] h-[1.2rem] text-white")
                div(class="rounded-full  p-4 border-[0.1rem]  border-gray-400")
                    InstagramIcon(class="w-[1.2rem] h-[1.2rem] text-white")
                div(class="rounded-full p-4 border-[0.1rem]  border-gray-400")
                    TwitterIcon(class="w-[1.2rem] h-[1.2rem] text-white")
            
        div(class='flex flex-col w-[45%] lg:w-1/4 space-y-2  text-2xl  text-[#7f7d7e]')
            p(class="text-[#Fafafa] text-3xl font-bold mb-4") Company
            p About
            p Contact
            p FAQ's
            p Services
            p Latests Posts

        
        div(class='flex flex-col w-[45%] lg:w-1/4 text-2xl space-y-2   text-[#7f7d7e]')
            p(class="text-[#Fafafa] text-3xl font-bold mb-4") Our Services
            p House Cleaning
            p Kitchen Cleaning
            p Floor Cleaning
            p Bathroom Cleaning 
            p See More All Services
           
        div(class='flex flex-col w-[45%] lg:w-1/4 text-2xl space-y-2 text-[#7f7d7e] ')
            p(class="text-[#Fafafa] text-3xl font-bold mb-4") Contact info.
            p 008 009 0100
            p 008 009 0100
            p sara.cruz@example.com
            div
                p 35178 W. Gray St.Utica,
                p Pensylvania 57888
         
    div(class="px-[2rem] w-full py-[2rem] bg-[#181818] flex justify-between items-center text-lg  text-[#a1a1a1] font-medium")
        p(class="w-5/6") 2022 CreativePeoples . All Right reserved
        p(class="w-auto flex justify-end") Privacy policy 
        p(class="w-auto flex justify-end")  Cookie Policy

    

</template>

<script setup lang="ts">
import FacebookIcon from "~icons/ri/facebook-fill";
import InstagramIcon from "~icons/ri/instagram-fill";
import TwitterIcon from "~icons/ri/twitter-fill";
</script>

<style lang="scss"></style>
