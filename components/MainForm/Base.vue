<template lang="pug">
div(class="w-[100vw] lg:w-auto h-full bg-[#FAFAFA] rounded-[1.4rem] lg:rounded-[3rem] flex flex-col lg:flex-row  px-4 md:px-[4rem] py-[3rem] lg:py-[auto] gap-y-3 gap-x-[3.25rem] ")
    
  
      div(class="flex w-auto flex-col gap-y-3 lg:py-[4.5rem]")
          
          div(class="flex border-black  border-[1px] rounded-full w-[1/3] lg:w-[22rem] h-10 font-bold text-black items-center justify-center gap-x-4 py-4")
                  p Search 
                  ArrowIcon(class="rotate-[180deg]")
                  p Book & Pay
                  ArrowIcon(class="rotate-[180deg]")
                  p Relax
          h1(class="mt-[1rem] lg:mt-[3.94rem]  text-[1.7rem] lg:text-[3rem] font-bold") Find a cleaning service
              p(class="text-[#7863FA]") in your area
          p(class="mt-auto text-[1.7rem] ml-auto") Price: 
            span(class="font-semibold") {{ computedPrice }}&#8364
      div(class="flex w-full lg:w-[39rem] flex-col gap-y-3 justify-center")
         
          div(class="flex w-full h-auto gap-x-4 md:p-[2.5rem] md:bg-white rounded-[1.5rem] relative"  )
              
          
              div(class="w-full h-full flex flex-col gap-y-1 md:gap-y-3 " )
                  div(class="flex gap-x-2 w-[90%] md:absolute top-3 items-center text-xs md:text-sm truncate	")
                      GoBackIcon(@click="$emit('goBack')" class="w-6 h-6 text-[#181526] hover:cursor-pointer")
                      p(class="truncate") Chosen: 
                          span {{ bookFormStore.getSelectedString}}  Search in: {{ addres_display }}
                  //- div( v-if="!userStore.getIsLogged && !isBookNewService" class="flex w-auto flex-col gap-y-3 mt-8")
                  //-   p(class="text-[#181526] font-bold") Book again
                    
                  //-   Swiper(
                  //-       @slideChange="onSlideChange"
                  //-       :modules="[]"
                  //-       :loop="false"
                  //-       :effect="'creative'"
                  //-       :space-between="2"
                  //-       :breakpoints="{ 1920: {slidesPerView: 3.5}, 1024: { slidesPerView: 4.5, spaceBetween: 2, }, 768: { slidesPerView: 3.5, spaceBetween: 2, }, 470: { slidesPerView: 2.5, spaceBetween: 2, }, 100: { slidesPerView: 2.1, spaceBetween: 1, }, }"
                  //-       :initialSlide="selectedSlide"
                  //-       :autoplay="{delay: 8000, disableOnInteraction: true, }" class="w-full  swiper-container" v-if="isSwiperLoaded")
                  //-       <!-- :creative-effect="{ prev: {shadow: false, translate: ['-20%', 0, -1],}, next: {translate: ['100%', 0, 0],},}" -->
                  
                  //-       SwiperSlide(v-for="step in steps" :key="step" class="px-1 w-auto  ")
                  //-           div(class="w-full h-[3rem] hover:cursor-pointer hover:bg-blue-200 justify-center items-center text-center rounded-md relative overflow-hidden bg-white border-2 text-black px-2 py-1 "  @click="setServiceActive(step); onStepClick(steps.indexOf(step))")
                  //-               //- nuxt-img( class="w-full h-full object-cover" alt="step.title" title="step.title" format="webp")
                  //-               p VW Golf 4

                    
                    //- Teleport(to="#tp")
                    //-   p.mx-auto or
                    //-   div(class="flex flex-col w-full md:w-auto gap-y-2")
                    //-       button(@click="isBookNewService = true" class="w-auto  border-[1px]  bg-[#563CF9] rounded-[0.4375rem] px-[1.5rem] py-[0.5rem] text-white font-bold") Book a new service
                    
                  //- div( v-if="!userStore.getIsLogged && !isBookNewService" class="flex w-auto flex-col gap-y-3 mt-8")

                    
                  //-   Swiper(
                  //-       @slideChange="onSlideChange"
                  //-       :modules="[]"
                  //-       :loop="false"
                  //-       :effect="'creative'"
                  //-       :space-between="2"
                  //-       :breakpoints="{ 1920: {slidesPerView: 3.5}, 1024: { slidesPerView: 4.5, spaceBetween: 2, }, 768: { slidesPerView: 3.5, spaceBetween: 2, }, 470: { slidesPerView: 2.5, spaceBetween: 2, }, 100: { slidesPerView: 2.1, spaceBetween: 1, }, }"
                  //-       :initialSlide="selectedSlide"
                  //-       :autoplay="{delay: 8000, disableOnInteraction: true, }" class="w-full  swiper-container" v-if="isSwiperLoaded")
                  //-       <!-- :creative-effect="{ prev: {shadow: false, translate: ['-20%', 0, -1],}, next: {translate: ['100%', 0, 0],},}" -->
                  
                  //-       SwiperSlide(v-for="option in options" :key="step" class="px-1 w-auto  ")
                  //-           div(:class="option.active? 'bg-[#563CF9] text-white': ' bg-white'" class="w-full h-auto hover:cursor-pointer hover:bg-blue-200 justify-center items-center text-center rounded-md relative overflow-hidden border-[1px] border-[#181526] text-black px-2 py-1 "  @click="setOptionActive(option)")
                  //-               //- nuxt-img( class="w-full h-full object-cover" alt="step.title" title="step.title" format="webp")
                  //-               p {{ option.title }}
       
                  slot(name="content" ) //v-if="isBookNewService"
                  slot(name="footer")
                  div#tp(class="flex flex-col gap-y-3 mt-2")
                  
                        
                      


</template>

<script setup lang="ts">
import type { Swiper } from "swiper";

import ArrowIcon from "~icons/ion/arrow-back";
import GoBackIcon from "~icons/iconamoon/arrow-left-2-bold";

import { useUserStore } from "~/stores/User";
import { useBookFormStore } from "@/stores/BookForm";
import { storeToRefs } from "pinia";

const userStore = useUserStore();
const {
  startDay,
  additionalServices,
  houseNumber,
  frequency,
  approxSqM,
  addres_display,
} = storeToRefs(useBookFormStore());

const computedPrice = computed(() => {
  return useBookFormStore().computedPrice;
});

const bookFormStore = useBookFormStore();

const isSwiperLoaded = ref(false);
const activeService = computed(() => {
  return steps[0];
});

const setOptionActive = (option: any) => {
  option.active = !option.active;
  console.log(option.active);
  console.log(options.value);
};

const emit = defineEmits(["next"]);

const next = () => {
  if (
    bookFormStore.frequency === "" ||
    bookFormStore.approxSqM === "" ||
    bookFormStore.houseNumber === "" ||
    bookFormStore.additionalServices === "" ||
    bookFormStore.startDay === ""
  ) {
    alert("Please fill the forms to continue");
  } else {
    emit("next");
  }
};

const interiorAddServices = ref([]);
const exteriorAddServices = ref([]);

const options = ref([
  { title: "leather", active: false },
  { title: "wood", active: false },
  { title: "polishing", active: false },
]);

const steps = [
  { title: "House Cleaning", active: true },
  { title: "Car Cleaning", active: false },
  { title: "Pool Cleaning", active: false },
  { title: "Office Cleaning", active: false },
  { title: "Construction Cleaning", active: false },
  { title: "Production Cleaning", active: false },
];

const onSlideChange = (swiper: Swiper) => {
  steps.forEach((step, index) => {
    if (index === swiper.activeIndex) {
      step.active = true;
    } else {
      step.active = false;
    }
  });
};

onMounted(() => {
  isSwiperLoaded.value = true;
  console.log("swiper loaded");
});

const isBookNewService = ref(false);
</script>

<style lang="scss">
select {
  -webkit-appearance: none !important;
  -moz-appearance: none !important;
  background-color: #fafafa;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAMAAACtdX32AAAAdVBMVEUAAAD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAhMdQaAAAAJ3RSTlMAAAECAwQGBwsOFBwkJTg5RUZ4eYCHkJefpaytrsXGy8zW3+Do8vNn0bsyAAAAYElEQVR42tXROwJDQAAA0Ymw1p9kiT+L5P5HVEi3qJn2lcPjtIuzUIJ/rhIGy762N3XaThqMN1ZPALsZPEzG1x8LrFL77DHBnEMxBewz0fJ6LyFHTPL7xhwzWYrJ9z22AqmQBV757MHfAAAAAElFTkSuQmCC);
  background-position: 100%;
  background-repeat: no-repeat;
  padding: 0.5rem;
  border-radius: 0;
}
.select-wrapper::after {
  content: "▼";
  font-size: 1rem;
  top: 6px;
  right: 10px;
  position: absolute;
}
</style>
