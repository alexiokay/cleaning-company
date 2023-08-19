<template lang="pug">
div(class="flex flex-col ")
    LazyProcess(:steps="props.steps" @slideTo="onStepClick")
    
    Swiper(
        @slideChange="onSlideChange"
        :modules="[]"
        :slides-per-view="1"
        :loop="false"
        :effect="'creative'"
        :initialSlide="selectedSlide"
        :autoplay="{delay: 8000, disableOnInteraction: true, }" class="w-full md:w-3/5  swiper-container" v-if="isSwiperLoaded")
        <!-- :creative-effect="{ prev: {shadow: false, translate: ['-20%', 0, -1],}, next: {translate: ['100%', 0, 0],},}" -->
      
        SwiperSlide(v-for="step in steps" :key="step" class="px-4 md:w-full ")
            // category  
            div(v-show="step.name === 'category'" class=" w-full h-auto  py-4 md:py-12 flex flex-wrap gap-y-4  mt-2")
              
                div.services__category(class=" flex flex-col items-center w-1/3 md:w-1/6 md:font-semibold gap-y-2" v-for="category in activeService?.title==='house cleaning'? props.customization.house_categories: props.customization.car_categories")
                    nuxt-img(:src="category.icon" width="500" height="500" class="object-cover   aspect-square w-[5rem] md:w-[6rem] hover:cursor-pointer" alt="icon" title="icon" format="webp")
                    p(class="text-lg md:text-xl") {{category.title}}
            // timing      
            div(v-show="step.name === 'timing'" class=" w-full h-auto py-12 flex flex-wrap gap-y-4  mt-2")
                
            
                SmallCalendar
            // general
            div(v-show="step.name === 'general'" class=" w-full h-auto py-12 flex flex-wrap gap-y-4  mt-2 justify-between")
                div()
                div(@click="setServiceActive(service); onStepClick(1)" :class="{'bg-blue-500 text-white': service.active === true}" class="flex w-full md:w-[calc(50%-1rem)] items-center border-[1px] py-1 px-3 rounded-md drop-shadow-md gap-x-3 hover:cursor-pointer" v-for="service in props.customization.general")
                    component(:is="service.icon" class="w-12 h-12")
                    p(class="w-full text-lg md:text-xl") {{service.title}}
                  
            // location        
            div(v-show="step.name === 'location'" class=" w-full h-auto py-12 flex flex-wrap gap-y-4  mt-2")
                
                div.services__category(class=" flex flex-col items-center w-1/4 md:w-1/6 md:font-semibold gap-y-2" v-for="i in 12")
                    nuxt-img(src="icons/icon_23.png" width="500" height="500" class="object-cover  aspect-square w-[5rem] md:w-[6rem]" alt="icon" title="icon" format="webp")
                    p(class="text-lg md:text-xl") Kitchen
        
                

    div(v-else class=" w-3/5 mx-auto  flex h-[40rem]  gap-y-4 items-center justify-center")
        LoadingIcon(class="w-24 h-24 text-yellow-500 mb-[7rem]")
</template>

<script setup lang="ts">
import type { Swiper } from "swiper";
import LoadingIcon from "~icons/eos-icons/loading";

const props = defineProps({
  customization: {
    type: Object,
    required: true,
  },
  steps: {
    type: Array,
    required: true,
  },
});

const isSwiperLoaded = ref(false);

const activeService = computed(() => {
  return props.customization.general.find((service) => service.active);
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
  return props.steps.findIndex((step) => step.active);
});

onMounted(() => {
  isSwiperLoaded.value = true;
  console.log("swiper loaded");
});
</script>

<style lang="scss"></style>
