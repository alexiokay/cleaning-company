<template lang="pug">
div(class="flex w-full h-[10rem] bg-[#Fcf2ec] items-center px-[14%]")
    div(class="nav flex w-full h-[6rem]   justify-between ")
        div(class="flex w-1/4 items-center justify-start min-w-[14rem]")
            nuxt-img(class="" alt="logo2"  src="/images/logo2.png" class="w-auto h-full" format="webp" )
            nuxt-img(src="/images/text-removebg-preview.png" alt="logo-tekst" class="w-auto h-full" format="webp")
        div#navigation(class="flex w-full font-semibold justify-center items-center space-x-12   text-3xl ")
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

    

    




</template>

<script setup lang="ts">
const route = useRoute();
</script>

<style lang="scss"></style>
