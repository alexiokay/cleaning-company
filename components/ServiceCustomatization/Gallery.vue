<template lang="pug">
div(class="w-full relative h-auto flex flex-col text-center gap-y-6 pt-10 pb-14")
    p(class="font-bold text-3xl") Photo Gallery
    div.swiper-button-prev(class="absolute xl:ml-[16%] ml-0")
    div.swiper-button-next(class="absolute xl:mr-[16%] mr-0")
    Swiper(
            @slideChange="update"
            :modules="[SwiperAutoplay, SwiperPagination, SwiperNavigation]"
         
            :loop="true"
            :effect="'creative'"

            :initialSlide="1"
            :pagination="{ clickable: true }"
            :breakpoints="{'640': {slidesPerView: 1, spaceBetween: 0,}, '768': {slidesPerView: 2, spaceBetween: 0,}, '1024': {slidesPerView: 3, spaceBetween: 30, centeredSlides: true},}"

            :navigation="{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev', }"
            :autoplay="{delay: 8000, disableOnInteraction: true }" class="w-full swiper-container " v-show="isSwiperLoaded")
            <!-- :creative-effect="{ prev: {shadow: false, translate: ['-20%', 0, -1],}, next: {translate: ['100%', 0, 0],},}" -->
        
            SwiperSlide(v-for="step in images" :key="step" class="px-4  md:w-full ")

                    
                nuxt-img(:src="step" provider="ipx" class="")
        
</template>

<script setup lang="ts">
import type { Swiper } from "swiper";
import LoadingIcon from "~icons/eos-icons/loading";

const props = defineProps({
  images: {
    type: Array,
    required: true,
  },
});
const isSwiperLoaded = ref(false);

onMounted(() => {
  isSwiperLoaded.value = true;
});

const selectedImage = ref(props.images[1]);

const update = () => {
  const swiper = document.querySelector(".swiper-container").swiper;
  swiper.update();
};
</script>

<style lang="scss"></style>
