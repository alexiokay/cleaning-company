<template lang="pug">
div(class="w-full h-full flex flex-col items-center gap-y-4  ")
    div(v-show="isHintOpen" class="text-start px-6 py-4 bg-[#Fff6d9] w-full -mb-4 flex items-center gap-x-4")
        BulbIcon(class="w-8 h-8")
        p We use AI to find the best fitting service provider for you from our huge database
        CloseIcon(@click="isHintOpen = false" class="ml-auto text-2xl hover:cursor-pointer") 
    div(class="w-full relative h-auto flex items-center justify-center bg-slate-100 py-12")
        Searchbar(class="w-3/5 h-[5rem]")
    h1 Find best service provider
    Process(:steps='["General", "Location", "Timing", "category"]' )
    Swiper(
        :modules="[SwiperAutoplay]"
        :slides-per-view="1"
        :loop="false"
        :effect="'creative'"
        :autoplay="{delay: 8000, disableOnInteraction: true,}"  class="w-3/5")
        <!-- :creative-effect="{ prev: {shadow: false, translate: ['-20%', 0, -1],}, next: {translate: ['100%', 0, 0],},}" -->
        
      
        SwiperSlide(v-for="slide in 2" :key="slide" class="w-full")
            strong {{ slide }}
                div(class=" w-full h-auto py-12 flex flex-wrap gap-y-4  mt-2")
                    
                    div.services__category(class=" flex flex-col items-center w-1/6 font-semibold gap-y-2" v-for="i in 12")
                        nuxt-img(src="icons/icon_23.png" width="500" height="500" class="object-cover  aspect-square w-[6rem]" alt="icon" title="icon" format="webp")
                        p(class="text-xl") Kitchen
                    div.services__category(class=" flex flex-col items-center w-1/6 font-semibold gap-y-2")
                        nuxt-img(src="icons/icon_33.png" width="500" height="500" class="object-cover  aspect-square w-[6rem]" alt="icon" title="icon" format="webp")
                        p(class="text-xl") Bathroom
    div(class="w-full xl:px-[25%] relative h-auto flex flex-col items-center justify-center bg-slate-100 py-8 gap-y-8")
        p(class="text-4xl font-flamabook w-full") We found 12 service providers for you
        div(class="w-full relative h-[20rem] flex bg-white px-10 py-8 rounded-2xl gap-x-12" v-for="contractor in foundContractors")
            div(class="aspect-square w-[8rem] rounded-full absolute -left-[12rem] text-xl bg-yellow-200 font-bold flex items-center justify-center border-[1px] drop-shadow-md") BEST!
            div(class="flex flex-col w-auto h-full gap-y-4 text-center")
                Rating(class="w-full h-auto" :rated="contractor.rating")
                div(class="bg-black w-[10rem] h-[10rem] px-4 rounded-full")
                    nuxt-img(:src="contractor.logo" format='webp' class="  w-full h-full aspect-square object-scale-down")

            div(class="w-4/5 h-full flex flex-col gap-y-3")
                p(class="text-3xl") {{contractor.name}}
                p(class="text-lg") {{contractor.description}}
                div(class="flex gap-x-3 items-center mt-auto")
                    WebsiteIcon(class="w-6 h-6 hover:cursor-pointer hover:text-yellow-500 ")
                    NuxtLink(:to="contractor.website") {{ contractor.website }}
                button(class="w-full h-[3rem] bg-slate-100 rounded-xl text-2xl font-flamabold mt-auto hover:bg-slate-200 ") Book now
            divc(class="w-1/5 flex flex-col gap-y-3")
                div(class="w-full flex gap-x-6")
                    TimeslotIcon(class="w-8 h-8")
                    p :
                    CorrectIcon(class="w-8 h-8 text-green-600")
                div(class="w-full flex gap-x-6")
                    ServiceIcon(class="w-8 h-8 ")
                    p :
                    NotFoundIcon(class="w-8 h-8 text-red-600")
                div(class="w-full flex gap-x-6")
                    LocationsIcon(class="w-8 h-8 ")
                    p :
                    CorrectIcon(class="w-8 h-8 text-green-600")
                
</template>

<script setup lang="ts">
import BulbIcon from "~icons/openmoji/light-bulb";
import CloseIcon from "~icons/ic/round-close";
import TimeslotIcon from "~icons/fluent-mdl2/date-time-12";
import ServiceIcon from "~icons/fluent-mdl2/repair";
import CorrectIcon from "~icons/icon-park-twotone/correct";
import NotFoundIcon from "~icons/zondicons/close-outline";
import LocationsIcon from "~icons/carbon/location";

import WebsiteIcon from "~icons/feather/external-link";
const isHintOpen = ref(true);

const foundContractors = ref([
  {
    name: "carcleaningdokter",
    rating: 5,
    logo: "https://www.carcleaningdokter.nl/wp-content/uploads/2020/12/CCDr.-logo-wit-transparant-1.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    website: "https://www.carcleaningdokter.nl/",
  },
]);
</script>

<style lang="scss"></style>
