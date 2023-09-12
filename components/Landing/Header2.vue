<template lang="pug">
div(class=" w-full h-auto flex flex-col md:flex-row gap-y-6 px-4 md:px-0 3xl:pl-[19rem] lg:pl-[8rem]  md:pl-6 pl-4  justify-center bg-[#Fcf2ec]")
    div(class="w-auto md:gap-y-[2rem]  flex flex-col md:mt-[4rem]") 
        h1(class="text-3xl md:text-7xl  lg:w-full font-bold text-[#124944]") Professional 
            span.text-black Cleaning
            p.text-black services for your home
        nuxt-img(format="webp" src="images/pani_12.png" alt="an image of person" class="md:hidden h-full max-h-[75vh] mt-2 w-auto object-contain sticky"  height="2060" width="1940")
        
            
        div(class=" w-full lg:text-3xl 3xl:text-5xl text-lg h-auto gap-x-4 md:gap-x-8 mt-[2rem] md:my-auto flex")
            ServiceCustomatizationSelect(class=" mx-auto md:w-auto w-full" :isBg="false")

        div(class="flex flex-col mt-[1.5rem] md:mt-[3rem] gap-y-4 mb-[2rem]")
            div(class='flex  flex-col md:flex-row flex-wrap gap-x-10 items-start  md:items-center gap-y-4  ')
                Button(to="/services" text="I'm looking for a cleaner" class="bg-[#fad613] order-0 md:order-0 md:first-letter:h-auto h-[4rem] w-full md:w-auto md:h-[4.4rem] text-xl md:text-2xl")
                    template(v-slot:icon)
                        ArrowLeftIcon(class="ml-2 w-[1.5rem] h-[1.5rem] text-[#02374b] rotate-90")
                
                
                Button(text="I'am looking for job" to="/careers" class="order-0 bg-[#124944] order-1 text-white md:order-0 md:first-letter  h-[4rem] w-full md:w-auto  md:h-[4.4rem] text-xl md:text-2xl")
                    template(v-slot:icon)
                        ArrowLeftIcon(class="ml-2 w-[1.5rem] h-[1.5rem] text-white rotate-90")
                        
    nuxt-img(src="images/pani_12.webp" class="hidden md:flex max-h-[55vh] mb-auto w-auto object-contain" format="webp" height="2060" width="1940")

    Watch(:isOpen="isVideoOpen" class=" " @close="isVideoOpen = false" )

</template>

<script setup lang="ts">
import PhoneIcon from "~icons/carbon/phone-voice-filled";
import SearchIcon from "~icons/iconamoon/search-light";
import ArrowLeftIcon from "~icons/ph/arrow-up-left";

const isVideoOpen = ref(false);

const callUs = () => {
  window.location.href = "tel:+31857603963";
};
</script>

<style lang="scss">
.vr {
  border-left: 2px dotted #fad613;
}
</style>
