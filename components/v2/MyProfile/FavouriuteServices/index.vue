<template lang="pug">
div(class="w-[100vw] -mx-[21.3%] flex flex-col py-16   items-center justify-center")
    h2.text-4xl.font-bold  Your Favourite Services
    div(class="pl-[15%] w-full")
        Swiper-Container(
            ref="swiperContainerRef"
            :modules="[]"
            :loop="false"
            :effect="'creative'"
            :space-between="2"
            :breakpoints="{ 1920: {slidesPerView: 5.2}, 1024: { slidesPerView: 4.2, spaceBetween: 2, }, 768: { slidesPerView: 3.2, spaceBetween: 2, }, 640: { slidesPerView: 2.2, spaceBetween: 2, }, }"
            :initialSlide="0"
            :autoplay="{delay: 8000, disableOnInteraction: true, }" class="w-full  swiper-container" v-if="isSwiperLoaded")
            //- <!-- :creative-effect="{ prev: {shadow: false, translate: ['-20%', 0, -1],}, next: {translate: ['100%', 0, 0],},}" -->
        
            Swiper-Slide(v-for="item in favServices" :key="item" class="pr-4 w-full  pt-[4rem] pb-[3rem]  ")
                V2MyProfileFavouriuteServicesItem(:service="item")
        p.underline.mr-auto See more providers in your area
</template>

<script setup lang="ts">
const isSwiperLoaded = ref(false);
const swiperContainerRef = ref(null);
const swiper = useSwiper(swiperContainerRef);

const favServices = [
  {
    name: "home",
    logo: "",
    description: "Lorem ipsum",
    rating: "4.5",
  },
  {
    name: "home",
    logo: "images/header7-steps/slider-item1.jpeg",
    description: "Lorem ipsum",
    rating: "4.5",
  },
  {
    name: "home",
    logo: "images/header7-steps/slider-item1.jpeg",
    description: "Lorem ipsum",
    rating: "4.5",
  },
  {
    name: "home",
    logo: "images/header7-steps/slider-item1.jpeg",
    description: "Lorem ipsum",
    rating: "4.5",
  },
  {
    name: "home",
    logo: "images/header7-steps/slider-item1.jpeg",
    description: "Lorem ipsum",
    rating: "4.5",
  },
  {
    name: "home",
    logo: "images/header7-steps/slider-item1.jpeg",
    description: "Lorem ipsum",
    rating: "4.5",
  },
];

const activeService = computed(() => {
  return favServices[0];
});

onMounted(() => {
  isSwiperLoaded.value = true;
  console.log("swiper loaded");
});
</script>

<style lang="scss"></style>
