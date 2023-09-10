<template lang="pug">
div(class="w-full relative h-auto flex flex-col text-center gap-y-6 pt-10 pb-14")
    p(class="font-bold text-3xl") Photo Gallery
    div.swiper-button-prev(class="absolute xl:ml-[16%] ml-0")
    div.swiper-button-next(class="absolute xl:mr-[16%] mr-0")
    Swiper(
            @slideChange="update"
            :modules="[SwiperAutoplay, SwiperPagination, SwiperNavigation]"
            :slides-per-view="2"
            :loop="true"
            :effect="'creative'"
            :centeredSlides="true"
            :initialSlide="1"
            :pagination="{ clickable: true }"
            :navigation="{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev', }"
            :autoplay="{delay: 8000, disableOnInteraction: true }" class="w-full swiper-container " v-show="isSwiperLoaded")
            <!-- :creative-effect="{ prev: {shadow: false, translate: ['-20%', 0, -1],}, next: {translate: ['100%', 0, 0],},}" -->
        
            SwiperSlide(v-for="step in images" :key="step" class="px-4 md:w-full ")

                    
                nuxt-img(:src="step" provider="ipx" class="")
        
</template>

<script setup lang="ts">
import type { Swiper } from "swiper";
import LoadingIcon from "~icons/eos-icons/loading";

const isSwiperLoaded = ref(false);

onMounted(() => {
  isSwiperLoaded.value = true;
});

const images = [
  "https://images.pexels.com/photos/9507284/pexels-photo-9507284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/1358900/pexels-photo-1358900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/5998138/pexels-photo-5998138.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/1910472/pexels-photo-1910472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];

const selectedImage = ref(images[1]);

const update = () => {
  const swiper = document.querySelector(".swiper-container").swiper;
  swiper.update();
};
</script>

<style lang="scss"></style>
