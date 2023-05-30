<template lang="pug">
div(class="flex w-full h-[4rem] md:h-[10rem] bg-[#Fcf2ec] items-center md:px-[14%] px-2")
    
    div(class="nav hidden md:flex w-full h-[6rem]   justify-between ")
        
        div(class="flex w-1/4 items-center justify-start md:min-w-[14rem]")
            nuxt-img(alt="logo2"  src="/images/logo2.png" class="w-auto h-full" format="webp" )
            nuxt-img(src="/images/text-removebg-preview.png" alt="logo-tekst" class="w-auto h-full" format="webp")
        div#navigation(class="flex w-full font-semibold justify-center items-center space-x-4 md:space-x-12  text-xl md:text-3xl ")
            div(class="flex flex-col")
                NuxtLink(:class="route.name==='index'? 'text-[#124944]': 'text-[#7e7b74]'" class="nav-link" to="/services"  ) Home
                hr(:class="route.name==='index'? 'visible': 'hidden'" class="w-3/4 border-[#124944] border-[0.1rem] mt-1")
            NuxtLink(class="nav-link" to="/about") About Us
            NuxtLink(class="nav-link" to="/contact") Services
            NuxtLink(class="nav-link" to="/contact") Pricing
            NuxtLink(class="nav-link" to="/contact") Blog
            NuxtLink(class="nav-link" to="/contact") Contact
            NuxtLink(class="nav-link" to="/contact") Careers
        button(class=" min-w-[20rem] border-[#7e7b74] my-auto w-auto h-3/4 rounded-r-[1.5rem] rounded-bl-[1.5rem] py-2 px-6 border-[0.2rem] font-semibold text-2xl text-[#7e7b74]") Free Consultation

        
    
div#mobileNav(v-show="!isMobileMenu? '': 'hidden'" class="fixed flex flex-col h-screen w-full justify-start z-50 text-5xl items-center text-white space-y-3")
    div(class="flex flex-col")
            NuxtLink(:class="route.name==='index'? 'text-yellow-400': 'text-[#7e7b74]'" class="nav-link" to="/services"  ) Home
            hr(:class="route.name==='index'? 'visible': 'hidden'" class="w-3/4 border-yellow-400 border-1 md:border-[0.1rem] mt-1")
    NuxtLink(class="nav-link text-white" to="/about") About Us
    NuxtLink(class="nav-link text-white" to="/contact") Services
    NuxtLink(class="nav-link text-white" to="/contact") Pricing
    NuxtLink(class="nav-link text-white" to="/contact") Blog
    NuxtLink(class="nav-link text-white" to="/contact") Contact
    NuxtLink(class="nav-link text-white " to="/contact") Careers
    
div#overlay(:class="isMobileMenu ? '' : 'hidden-overlay'" class="fixed  items-center   overlaying top-0 left-0 w-full h-screen bg-black opacity-100 z-40 " )
div(class="fixed left-[1rem]  bottom-[1rem] rounded-full shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] bg-white flex items-center justify-center z-50 md:hidden")
    MenuIcon2#mobileNavToggler(class=" w-14 h-14 ml-auto   text-[#124944]" @click="isMobileMenu = !isMobileMenu")
            


    

    




</template>

<script setup lang="ts">
import MenuIcon2 from "~icons/jam/menu";

const route = useRoute();

const isMobileMenu = ref(false);
</script>

<style lang="scss"></style>
