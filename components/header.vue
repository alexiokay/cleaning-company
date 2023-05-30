<template lang="pug">
div(class="relative w-full h-auto flex flex-col md:flex-row gap-y-6 xl:px-[19rem] lg:px-[8rem]  md:px-6 px-4  justify-center bg-[#Fcf2ec]")
    div(class="w-full gap-y-[1rem]  flex flex-col md:mt-[6rem]") 
        h1(class="text-5xl md:text-[5.3rem] font-bold text-[#124944]") Proffesional 
            span.text-black Cleaning
            p.text-black service for your home
        p(class="text-[#5e595a] text-xl md:text-2xl font-medium mt-4 md:mt-0") With, Reliable, Friendly and Trustfull being our company values, we are present ourselves with the most complete and up to date cleaning services.
        div(class='flex flex-col md:flex-row gap-x-10 items-start gap-y-4 md:gap-y-0 md:items-center mt-[1.5rem] md:mt-[5rem] mb-8 md:mb-[7rem]')
            Button(text="Book A Service" class="order-0 md:order-0 md:first-letter:h-auto h-[4rem] md:h-[4.4rem] text-xl md:text-2xl")
                template(v-slot:icon)
                    ArrowLeftIcon(class="ml-2 w-[1.5rem] h-[1.5rem] text-[#02374b] rotate-90")
            buttonWatch(class="md:h-[5rem] mr-auto order-1 md:order-0 text-xl md:text-5xl" text=" Watch our Service") 
        div(class="flex w-full  h-auto gap-x-8 mb-2 md:mb-[6rem] lg:mb-[10rem]")
            div(class="flex flex-col space-y-4")
                p(class="text-3xl md:text-5xl text-[#124944] font-bold flex items-center gap-x-2") 2760
                    span(class="text-black text-2xl font-extrabold") +
                p(class="text-[#5e595a] text-2xl font-semibold") Total Customer
            .vr(class="h-[4rem]")
            div(class="flex flex-col space-y-4")
                p(class="text-3xl md:text-5xl text-[#124944] font-bold flex items-center gap-x-2") 2760
                    span(class="text-black text-2xl font-extrabold") +
                p(class="text-[#5e595a] text-2xl font-semibold") Total Customer
            .vr(class="h-[4rem]")
            div(class="flex flex-col space-y-4 ")
                p(class="text-3xl md:text-5xl text-[#124944] font-bold flex items-center gap-x-2") 2760
                    span(class="text-black text-2xl font-extrabold") +
                p(class="text-[#5e595a] text-2xl font-semibold") Total Customer
        
    nuxt-img(src="images/pani_12.png" class="h-full max-h-[75vh] mt-auto w-auto object-contain" format="webp" height="2060" width="1940")

</template>

<script setup lang="ts">
import SearchIcon from "~icons/iconamoon/search-light";
import ArrowLeftIcon from "~icons/ph/arrow-up-left";
</script>

<style lang="scss">
.vr {
  border-left: 5px dotted #fad613;
}
</style>
