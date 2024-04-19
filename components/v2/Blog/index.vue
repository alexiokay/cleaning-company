<template lang="pug">
div(class="flex flex-col items-center justify-center w-full lg:pl-[10%]  md:px-0 px-[1rem]")
 
  div(class="relative flex w-[7.5rem] h-[5.5rem] ")
      nuxt-img(src="images/star1.png" width="70px" height="70px" class="absolute top-0 left-0 rotate-[210deg]")
      nuxt-img(src="images/star2.png" width="50px" height="50px" class="absolute -top-4 right-0 rotate-[150deg]" )
  h2.flex.flex-col.text-center.font-bold(class="text-[1.8rem] lg:text-4xl lg:gap-y-3") Latest 
      span News & Articles

  Swiper(
        @slideChange="onSlideChange"
        :modules="[]"
        :loop="false"
        :effect="'creative'"
        :space-between="2"
        :breakpoints="{ 1920: {slidesPerView: 4.5}, 1024: { slidesPerView: 3.5, spaceBetween: 2, }, 768: { slidesPerView: 2.5, spaceBetween: 2, }, 470: { slidesPerView: 1.5, spaceBetween: 2, }, 100: { slidesPerView: 1.1, spaceBetween: 1, }, }"
        :initialSlide="0"
        :autoplay="{delay: 8000, disableOnInteraction: true, }" class="w-full  swiper-container" v-if="isSwiperLoaded")
        <!-- :creative-effect="{ prev: {shadow: false, translate: ['-20%', 0, -1],}, next: {translate: ['100%', 0, 0],},}" -->
      
        SwiperSlide(v-for="article in articles" :key="article.uuid" class="px-1 sm:px-4 w-full md:w-3/4 lg:py-[4rem] ")
          div(class="flex flex-col lg:flex-row w-full justify-start h-auto items-start  gap-y-12 gap-x-[2.5rem]   ")
        
            V2BlogItem(:article="article")
                template(v-slot:image)
                  
                    nuxt-img(:src="'https:' + article.content.image"  :alt="article.content.title" provider="storyblok"  format="webp" width="500" height="400" class="w-full h-full  object-cover  hover:cursor-pointer ")
      

                  
</template>

<script setup lang="ts">
import ArrowIcon from "~icons/ph/arrow-right";
import type { Swiper } from "swiper";
import LoadingIcon from "~icons/eos-icons/loading";

const isSwiperLoaded = ref(false);

defineProps({
  blok: {
    type: Object,
    required: false,
  },
});
const articles = ref(null);

const storyblokApi = useStoryblokApi();
const { data } = await storyblokApi.get("cdn/stories", {
  version: useRoute().query._storyblok ? "draft" : "published",
  starts_with: "blog",
  is_startpage: false,
});
articles.value = data.stories.slice(0, 6);

const activeService = computed(() => {
  return steps[0];
});

const setServiceActive = (service) => {
  props.customization.general.forEach((service) => (service.active = false));
  service.active = true;
};

const onStepClick = (index: any) => {
  const swiperContainer = document.querySelector(".swiper-container");
  const swiper = swiperContainer.swiper as Swiper;
  swiper.slideTo(index);
};

const onSlideChange = (swiper: Swiper) => {
  props.steps.forEach((step, index) => {
    if (index === swiper.activeIndex) {
      step.active = true;
    } else {
      step.active = false;
    }
  });
};

const selectedSlide = computed(() => {
  return steps.findIndex((step) => step.active);
});

onMounted(() => {
  isSwiperLoaded.value = true;
  console.log("swiper loaded");
  console.log(articles.value);
});
</script>

<style lang="scss"></style>
