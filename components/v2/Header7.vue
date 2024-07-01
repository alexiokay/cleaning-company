<template lang="pug">
div(class="w-full lg:pl-[10%] px-4 lg:px-0")
    Swiper(
        @slideChange="onSlideChange"
        :modules="[]"
        :loop="false"
        :effect="'creative'"
        :space-between="2"
        :breakpoints="{ 1920: {slidesPerView: 4.5}, 1280: { slidesPerView: 3.5, spaceBetween: 2, }, 768: { slidesPerView: 2.5, spaceBetween: 2, }, 470: { slidesPerView: 1.5, spaceBetween: 2, }, 100: { slidesPerView: 1.1, spaceBetween: 1, }, }"
        :initialSlide="selectedSlide"
        :autoplay="{delay: 8000, disableOnInteraction: true, }" class="w-full  swiper-container" v-if="isSwiperLoaded")
        <!-- :creative-effect="{ prev: {shadow: false, translate: ['-20%', 0, -1],}, next: {translate: ['100%', 0, 0],},}" -->
      
        SwiperSlide(v-for="step in servicesWindows" :key="step" class="px-1 sm:px-4 w-full md:w-3/4 py-[4rem] ")
            //?- Old Version
            
            //- div(class="w-[100%] aspect-[13/16]  rounded-[24px] border-[9px] relative overflow-hidden text-white " :style="{'border-color': step.color}" @click="setServiceActive(step); onStepClick(steps.indexOf(step))")
            //-     //- nuxt-img( class="w-full h-full object-cover" alt="step.title" title="step.title" format="webp")
            //-     nuxt-img(:src="step.image" width="500" height="500" format="webp" alt="logo" class=" w-full h-full object-cover")
            //-     div(class="w-full h-full  shrink-0 absolute top-0 left-0 flex flex-col px-8 py-6 gap-y-4 justify-end" :style="{'background': step.griadent}")
                    
            //-         h4.text-xl.font-bold {{ step.title }}
            //-         p {{ step.description}}
            //-         button(class="bg-white rounded-[8px] py-[10px] lg:py-[16px] px-[24px]  ml-auto w-auto text-[#4E37E3] font-bold") GET
            
            //*- New Version

            div(class="w-[100%]  aspect-[13/19] md:aspect-[13/21] lg:aspect-[13/18] gap-y-4 rounded-[2rem] border-[9px] border-white bg-white shadow-lg relative overflow-hidden text-black "  @click="setServiceActive(step); onStepClick(steps.indexOf(step))")
                //- nuxt-img( class="w-full h-full object-cover" alt="step.title" title="step.title" format="webp")
                div(class="rounded-b-[20px] w-full h-1/2 lg:h-[55%] overflow-hidden relative")
                  nuxt-img(:src="step.image" width="500" height="500" format="webp" alt="logo" class=" w object-cover  ")
                  //- div(class="absolute top-0 left-0 w-full h-full" :style="{'background': step.griadent}")
                div(class="w-full h-1/2 lg:h-[45%] shrink-0  flex flex-col px-4 lg:px-5 3xl:px-8 py-3 lg:py-3 4xl:py-6 gap-y-2 3xl:gap-y-3 justify-start")
                    
                    h4.text-xl.font-bold {{ step.title }}
                    p.text-slate-700 {{ step.description}}
                    button(class="bg-[#7763fa] rounded-[8px] py-[10px] lg:py-3 px-[3rem]  ml-auto w-auto text-white font-bold mt-auto") GET
    div(class="gap-y-1 text-[1.3rem] lg:text-2xl md:font-bold flex flex-col")
        p Explore and see our services.
        p Choose the offer most suitable for your home.

    div(class="flex gap-x-4 lg:pr-[10%] mt-[6rem] text-white flex-col lg:flex-row gap-y-6")
        div(class="w-full lg:w-1/2 px-4 py-6 lg:py-0 lg:px-[10rem] aspect-[16/10] rounded-[24px] justify-center items-start flex flex-col bg-[#241969] gap-y-[1.5rem]")
            p.flex.flex-col.font-bold(class="text-[1.5rem] lg:text-4xl lg:gap-y-3") How can we
                span take care of you?
            p.flex.flex-col(class="text-[#FFF]") Get a personalized list of the best market prices
                span available without the need for an on-site
                span consultation—tailored specifically for you.
        div(class="relative w-full lg:w-1/2 px-4 py-6 lg:px-[10rem] aspect-[16/10] overflow-hidden rounded-[24px] justify-center items-center flex flex-col  bg-[#B1A5FC] gap-y-[1.5rem]")
            nuxt-img(src="images/get-in-touch2.webp" class="absolute z-10 top-0 left-0 object-cover h-full w-full "  format="webp")
            div(class="w-full h-full z-20 absolute top-0 griadent ")
            p.flex.flex-col.font-bold(class="text-[1.6rem] lg:text-4xl lg:gap-y-3 z-20 text-center") Get in touch
                span with us!
            button(class="z-20 bg-[#4E37E3] rounded-[8px] py-[16px] px-[24px]  w-auto text-white font-bold flex gap-x-2 items-center") 
                <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.5 11.625C14.6 11.625 13.625 11.475 12.8 11.175H12.575C12.35 11.175 12.2 11.25 12.05 11.4L10.4 13.05C8.3 11.925 6.5 10.2 5.45 8.1L7.1 6.45C7.325 6.225 7.4 5.925 7.25 5.7C7.025 4.875 6.875 3.9 6.875 3C6.875 2.625 6.5 2.25 6.125 2.25H3.5C3.125 2.25 2.75 2.625 2.75 3C2.75 10.05 8.45 15.75 15.5 15.75C15.875 15.75 16.25 15.375 16.25 15V12.375C16.25 12 15.875 11.625 15.5 11.625ZM4.25 3.75H5.375C5.45 4.425 5.6 5.1 5.75 5.7L4.85 6.6C4.55 5.7 4.325 4.725 4.25 3.75ZM14.75 14.25C13.775 14.175 12.8 13.95 11.9 13.65L12.8 12.75C13.4 12.9 14.075 13.05 14.75 13.05V14.25ZM11.75 9H13.25C13.25 8.00544 12.8549 7.05161 12.1517 6.34835C11.4484 5.64509 10.4946 5.25 9.5 5.25V6.75C10.0967 6.75 10.669 6.98705 11.091 7.40901C11.5129 7.83097 11.75 8.40326 11.75 9ZM14.75 9H16.25C16.25 5.25 13.2275 2.25 9.5 2.25V3.75C12.395 3.75 14.75 6.0975 14.75 9Z" fill="#E8E8E9"/>
                </svg>
                p Free Consultation


</template>

<script setup lang="ts">
import type { Swiper } from "swiper";
import LoadingIcon from "~icons/eos-icons/loading";
import servicesWindows from "@/utils/servicesWindows.json";

const steps = [
  {
    name: "home",
    active: true,
    color: "#8E7CFB",
    title: "Home Cleaning",
    image: "images/header7-steps/slider-item1.jpeg",
    griadent:
      "linear-gradient(180deg, rgba(142, 124, 251, 0) 0%, #8E7CFB 70.02%)",
  },
  {
    name: "gardening",
    active: false,
    color: "#D74A7F",
    title: "Gardening",
    image: "images/header7-steps/slider-item2.jpeg",
    griadent:
      "linear-gradient(180deg, rgba(215, 74, 127, 0.00) 0%, #D74A7F 70.02%)",
  },
  {
    name: "car",
    active: false,
    color: "#3F6F21",
    title: "Car Cleaning",
    image: "images/header7-steps/slider-item3.jpeg",
    griadent:
      "linear-gradient(180deg, rgba(165, 248, 206, 0.00) 0%, rgba(63, 111, 33, 0.00) 0.01%, #3F6F21 70.02%)",
  },
  {
    name: "office",
    active: false,
    color: "#263986",
    title: "Office Cleaning",
    image: "images/header7-steps/slider-item4.jpeg",
    griadent:
      "linear-gradient(180deg, rgba(38, 57, 134, 0.00) 0%, #263986 70.02%)",
  },
  {
    name: "other",
    active: false,
    color: "#F2A03D",
    title: "Other",
    image: "images/header7-steps/slider-item1.jpeg",
  },
];

const isSwiperLoaded = ref(false);

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
});
</script>

<style lang="scss" scoped>
.griadent {
  background: linear-gradient(
    180deg,
    rgba(142, 124, 251, 0) 0%,
    #8e7cfb 70.02%
  );
}
</style>
