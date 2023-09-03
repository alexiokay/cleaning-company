<template lang="pug">
div(class="w-full relative h-auto flex flex-col text-center gap-y-6 pt-10 pb-14 bg-[#f5f6feff]")
    p(class="font-bold text-3xl") What People Are Saying
    div.swiper-button-prev(class="absolute xl:ml-[16%] ml-0")
    div.swiper-button-next(class="absolute xl:mr-[16%] mr-0")
    Swiper(
            @slideChange=""
            :modules="[SwiperAutoplay, SwiperPagination, SwiperNavigation]"
            :slides-per-view="3"
            :loop="true"
            :effect="'creative'"
            :centeredSlides="true"
            :spaceBetween="30"
            :initialSlide="1"
            :pagination="{ clickable: true }"
            :navigation="{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev', }"
            :autoplay="{delay: 8000, disableOnInteraction: true }" class="w-full xl:w-2/4   " v-show="isSwiperLoaded")
            <!-- :creative-effect="{ prev: {shadow: false, translate: ['-20%', 0, -1],}, next: {translate: ['100%', 0, 0],},}" -->
        
            SwiperSlide(v-for="step in images" :key="step" class="px-4 md:w-full  py-2")

                    
                div(:src="step" provider="ipx" class="h-[30rem] rounded-xl bg-white flex flex-col text-center py-10 px-10 justif-center items-center gap-y-6 shadow-lg")
                    nuxt-img(src="https://www.homebuddy.com/static/shared1/user.svg" provider="ipx")
                    p.font-semibold Richard  R.
                    Rating(:editable="false" size="small" :rated="9" class=" ")
                    p "I was very pleased with the service. The cleaners were very professional and did a great job. I would definitely recommend them to my friends and family."
                    p(class="text-blue-600 mt-auto text-sm") Quality Craftsmen



        
</template>

<script setup lang="ts">
import type { Swiper } from "swiper";
import LoadingIcon from "~icons/eos-icons/loading";

const isSwiperLoaded = ref(false);

onMounted(() => {
  isSwiperLoaded.value = true;
});

const images = [
  "https://www.homebuddy.com/static/roofing/gallery/9-desktop.webp",
  "https://www.homebuddy.com/static/roofing/gallery/10-desktop.webp",
  "https://www.homebuddy.com/static/roofing/gallery/8-desktop.webp",
  "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?cs=srgb&dl=pexels-binyamin-mellish-106399.jpg&fm=jpg",
  "https://www.homebuddy.com/static/roofing/gallery/8-desktop.webp",
  "https://www.homebuddy.com/static/roofing/gallery/8-desktop.webp",
];

const selectedImage = ref(images[1]);
</script>

<style lang="scss"></style>
