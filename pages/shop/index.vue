<template lang="pug">
div(class="w-full h-full  flex flex-col items-center  justify-start   bg-[#fafafa]   gap-y-8 ")

    div(class="flex flex-col  min-h-[40vw] w-full xl:w-[88rem]  items-center justify-start  px-[1rem] sm:px-[1.5rem] md:px-[3rem] lg:px-[7.4rem] xl:px-0  py-8 gap-x-[2rem] gap-y-8")
        div#shop_header(class="w-[100%] h-[18.85rem] relative flex flex-col items-center justify-center rounded-xl overflow-hidden")
            nuxt-img(src="images/shop/detailing-header.webp" class="w-full absolute z-10 top-0 left-0 h-full object-cover")

            div(class="w-full h-full z-20 absolute top-0 left-0 gardening-gradient ")
            div(class="w-full h-auto flex flex-col justify-center items-start z-30 gap-y-2  px-[2rem] py-[3rem] rounded-xl gap-y-3")
                h1(class="text-xl lg:text-[1.7rem] text-center text-white") Shop
                p(class="text-center  text-lg lg:text-lg text-white") Elevate your cleaning results.
                button(class="w-[10rem] h-[2.5rem] bg-[#4E37E3] text-white font-bold rounded-[0.5rem] focus:outline-none") Shop Now
        div#shop_distinguished-products(class="flex items-start lg:justify-center w-full h-auto overflow-x-auto py-3")
            div(v-for="product in categories" class="flex flex-col px-4 lg:px-8 pt-6 pb-2 min-w-[12rem] max-w-[12rem]   text-center h-auto w-auto gap-y-3 justify-start items-center hover:shadow-md cursor-pointer")
                nuxt-img(:src="product.image" class="w-auto  object-cover   h-[4rem]")
                p(class="w-full") {{product.name}}

        Swiper-Container(
          ref="swiperContainerRef"
          @slideChange="onSlideChange"
          :loopedSlides ="2"
          class="w-full  swiper-container" v-if="isSwiperLoaded")
          <!-- :creative-effect="{ prev: {shadow: false, translate: ['-20%', 0, -1],}, next: {translate: ['100%', 0, 0],},}" -->

          .swiper-edges
          Swiper-Slide(v-for="step in servicesWindows" :key="step" class="px-1 sm:px-4 w-full md:w-3/4 custom-slide ")
              div(class="w-[100%] aspect-[16/12]  rounded-[24px] relative overflow-hidden text-white " :style="{'border-color': step.color}" @click="setServiceActive(step); onStepClick(steps.indexOf(step))")
                  //- nuxt-img( class="w-full h-full object-cover" alt="step.title" title="step.title" format="webp")
                  nuxt-img(:src="step.image" width="500" height="500" format="webp" alt="logo" class=" w-full h-full object-cover")
                  div(class="w-full h-full  shrink-0 absolute top-0 left-0 flex flex-col px-8 py-6 gap-y-4 justify-end" :style="{'background': step.griadent}")
                      
                      h4.text-xl.font-bold {{ step.title }}
                      p {{ step.description}}
                      button(class="bg-white rounded-[8px] py-[10px] lg:py-[16px] px-[24px]  ml-auto w-auto text-[#4E37E3] font-bold") GET
</template>

<script setup lang="ts">
import servicesWindows from "@/utils/servicesWindows.json";
import { on } from "events";

const isSwiperLoaded = ref(false);

const selectedSlide = ref(1);

const swiperContainerRef = ref(null);
const swiper = useSwiper(swiperContainerRef, {
  loop: true,
  modules: [],
  effect: "creative",
  spaceBetween: -15,
  centeredSlides: false,
  // loopedSlides: 2,
  breakpoints: {
    1920: { slidesPerView: 2.4 },
    1024: { slidesPerView: 2.8, spaceBetween: 2 },
    768: { slidesPerView: 2.5, spaceBetween: 2 },
    470: { slidesPerView: 1.5, spaceBetween: 2 },
    100: { slidesPerView: 1.1, spaceBetween: 1 },
  },
  initialSlide: selectedSlide.value,
  autoplay: { delay: 8000, disableOnInteraction: true },
});

const categories = ref([
  {
    name: "Car Interior ",
    image:
      "https://banner2.cleanpng.com/20181204/pxe/kisspng-car-wash-auto-detailing-upholstery-cleaning-interior-cleaning-svg-png-icon-free-download-159-5c063498d698a7.020739741543910552879.jpg",
  },
  {
    name: "Car Exterior ",
    image:
      "https://i.pinimg.com/originals/71/0b/ab/710babab1c55b3242c27bf34e0d1c874.png",
  },
  {
    name: "Home Cleaning",
    image: "https://static.thenounproject.com/png/1510763-200.png",
  },
  {
    name: "Gardening",
    image:
      "https://cdn1.iconfinder.com/data/icons/landscaping-and-horticulture/262/landscaping-015-512.png",
  },
  {
    name: "Tools",
    image:
      "https://cdn.icon-icons.com/icons2/2248/PNG/512/tools_icon_137091.png",
  },
]);

const distinguishedProducts = ref([
  {
    name: "Santoemma Sabrina",
    image:
      "https://images.prom.ua/2523643627_w640_h640_ekstraktor-dlya-himchistki.jpg",
  },
  {
    name: "Dri-Pod",
    image:
      "https://millelacssteamway.com/wp-content/uploads/2021/02/Dri-Pod_Full_10.png",
  },
  {
    name: "Bosch Drill",
    image:
      "https://www.tooled-up.com/artwork/prodzoom/Bosch-06039D4170-UniversalImpact-18-18v-Cordless-Combi-Drill.jpg?w=1600&h=1600",
  },
  {
    name: "Drill Brush Set",
    image:
      "https://www.supercheapauto.co.nz/dw/image/v2/BBRV_PRD/on/demandware.static/-/Sites-srg-internal-master-catalog/default/dw7f5c20bc/images/614051/SCA_614051_hi-res.jpg?sw=1000&sh=1000&sm=fit&q=70",
  },
  {
    name: "Cleanfix S07 Plus",
    image:
      "https://cdn.webshopapp.com/shops/95698/files/52862636/cleanfix-stofzuiger-s-07-plus.jpg",
  },
  {
    name: "Tornador Black",
    image:
      "https://www.waxit.com.au/cdn/shop/files/TornadorMax.jpg?v=1712538809",
  },
  {
    name: "Sapphire extractor head",
    image:
      "https://www.worldofclean.co.uk/wp-content/uploads/2019/05/clear-head-upholstery-hand-tool-1a-450x450.jpg.webp",
  },
]);

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

onMounted(() => {
  isSwiperLoaded.value = true;
  console.log("swiper loaded");
});

definePageMeta({
  middleware: "404",
});
</script>

<style lang="scss" scoped>
// change horizontal scroll height
#shop_distinguished-products::-webkit-scrollbar {
  width: 11px;
  height: 5px;
  background-color: transparent;
  border-radius: 8px;
}

.gardening-gradient {
  background: linear-gradient(
    180deg,
    rgba(165, 248, 206, 0) 0%,
    rgba(63, 111, 33, 0) 0.01%,
    #11139e7a 80.02%
  );
}

@media screen and (min-width: 726px) {
  .custom-slide:first-of-type {
    margin-left: calc(
      (100% - (100% / 2.4)) / 7
    ); /* Adjust this value to control the margin */
  }
  .swiper-edges {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 40;
    pointer-events: none;
    background: linear-gradient(
      to right,
      rgba(250, 250, 250, 0.7) 0%,
      rgba(255, 255, 255, 0) 6%,
      rgba(255, 255, 255, 0) 94%,
      rgba(250, 250, 250, 0.7) 100%
    );
  }
}

// .custom-slide:last-of-type {
//   margin-right: calc(
//     (100% - (100% / 2.8)) / 3.4
//   ); /* Adjust this value to control the margin */
// }
</style>
