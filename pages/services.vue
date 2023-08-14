<template lang="pug">
div(class="w-full h-full flex flex-col items-center gap-y-4 ")
    div(v-show="isHintOpen" class="text-start px-6 py-4 bg-[#Fff6d9] w-full -mb-4 flex items-center gap-x-4")
        BulbIcon(class="w-8 h-8")
        p We use AI to find the best fitting service provider for you from our huge database
        CloseIcon(@click="isHintOpen = false" class="ml-auto text-2xl hover:cursor-pointer") 
    div(class="w-full relative h-auto flex items-center justify-center bg-slate-100 py-12 px-4 md:px-0")
        Searchbar(class="w-full  md:w-3/5 h-[5rem]")
    h1 Find best service provider
    LazyProcess(:steps="steps" @slideTo="onStepClick")
    
    Swiper(
        @slideChange="onSlideChange"
        :modules="[]"
        :slides-per-view="1"
        :loop="false"
        :effect="'creative'"
        :initialSlide="selectedSlide"
        :autoplay="{delay: 8000, disableOnInteraction: true, }" class="w-full md:w-3/5 swiper-container" v-if="isSwiperLoaded")
        <!-- :creative-effect="{ prev: {shadow: false, translate: ['-20%', 0, -1],}, next: {translate: ['100%', 0, 0],},}" -->
      
        SwiperSlide(v-for="step in steps" :key="step" class="w-full")
            div(v-show="step.name === 'category'" class=" w-full h-[40rem] py-12 flex flex-wrap gap-y-4  mt-2")
                
                div.services__category(class=" flex flex-col items-center w-1/6 font-semibold gap-y-2" v-for="i in 12")
                    nuxt-img(src="icons/icon_23.png" width="500" height="500" class="object-cover  aspect-square w-[6rem]" alt="icon" title="icon" format="webp")
                    p(class="text-xl") Kitchen
                div.services__category(class=" flex flex-col items-center w-1/6 font-semibold gap-y-2")
                    nuxt-img(src="icons/icon_33.png" width="500" height="500" class="object-cover  aspect-square w-[6rem]" alt="icon" title="icon" format="webp")
                    p(class="text-xl") Bathroom
            div(v-show="step.name === 'timing'" class=" w-full h-[40rem] py-12 flex flex-wrap gap-y-4  mt-2")
                
                div.services__category(class=" flex flex-col items-center w-1/6 font-semibold gap-y-2" v-for="i in 12")
                    nuxt-img(src="icons/icon_23.png" width="500" height="500" class="object-cover  aspect-square w-[6rem]" alt="icon" title="icon" format="webp")
                    p(class="text-xl") Kitchen
                div.services__category(class=" flex flex-col items-center w-1/6 font-semibold gap-y-2")
                    nuxt-img(src="icons/icon_33.png" width="500" height="500" class="object-cover  aspect-square w-[6rem]" alt="icon" title="icon" format="webp")
                    p(class="text-xl") Bathroom

    div(v-else class=" w-3/5  flex h-[40rem]  gap-y-4 items-center justify-center")
        LoadingIcon(class="w-24 h-24 text-yellow-500 mb-[7rem]")
    div(class="w-full xl:px-[25%] relative h-auto flex flex-col items-center justify-center bg-slate-100 py-8 gap-y-8")
        p(class="text-4xl font-flamabook w-full") We found 12 service providers for you
        Pagination(:pages="pages" :page="page" @change="page = $event" class="w-full flex items-center justify-center gap-x-4")
        div(class="w-full relative h-[20rem] flex bg-white px-10 py-8 rounded-2xl gap-x-12" v-for="(contractor, index) in contractors")
            div(v-if="index===0" class="aspect-square w-[8rem] rounded-full absolute -left-[12rem] text-xl bg-yellow-200 font-bold flex items-center justify-center border-[1px] drop-shadow-md") BEST!
            div(class="flex flex-col w-auto h-full gap-y-4 text-center")
                ClientOnly
                    Rating(class="w-full h-auto" :rated="convertRatingToNormalizedScale(contractor.rating)")
                    p {{ contractor.rating }}
                div(class="bg-white w-[10rem] h-[10rem] px-4 rounded-full")
                    nuxt-img(:src="contractor.logoUrl? contractor.logoUrl: 'https://cdn-icons-png.flaticon.com/512/5345/5345937.png'" format='webp' class="  w-full h-full aspect-square object-scale-down")

            div(class="w-4/5 h-full flex flex-col gap-y-3")
                p(class="text-3xl") {{contractor.title}}
                p(class="text-lg") {{contractor.description}}
                p(class="text-lg") {{contractor.phoneNumber}}
                p(class="text-lg") {{contractor.email}}
                p(class="text-lg") {{contractor.palceUrl}}
                div(class="flex gap-x-3 items-center mt-auto")
                    WebsiteIcon(class="w-6 h-6 hover:cursor-pointer hover:text-yellow-500 ")
                    NuxtLink(:to="contractor.website") {{ contractor.website }}
                button(class="w-full h-[3rem] bg-slate-100 rounded-xl text-2xl font-flamabold mt-auto hover:bg-slate-200 ") Book now
            div(class="w-1/5 flex flex-col gap-y-3")
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

        Pagination(:pages="pages" :page="page" @change="page = $event" class="w-full flex items-center justify-center gap-x-4")


        
                
</template>

<script setup lang="ts">
import BulbIcon from "~icons/openmoji/light-bulb";
import CloseIcon from "~icons/ic/round-close";
import TimeslotIcon from "~icons/fluent-mdl2/date-time-12";
import ServiceIcon from "~icons/fluent-mdl2/repair";
import CorrectIcon from "~icons/icon-park-twotone/correct";
import NotFoundIcon from "~icons/zondicons/close-outline";
import LocationsIcon from "~icons/carbon/location";
import LoadingIcon from "~icons/eos-icons/loading";
import WebsiteIcon from "~icons/feather/external-link";

const isHintOpen = ref(true);
const isSwiperLoaded = ref(false);

function convertRatingToNormalizedScale(rating) {
  const normalizedRating = parseFloat(rating.replace(",", ".")) * 2;
  return Math.min(9, Math.floor(normalizedRating));
}

const onSlideChange = (swiper) => {
  steps.value.forEach((step, index) => {
    if (index === swiper.activeIndex) {
      step.active = true;
    } else {
      step.active = false;
    }
  });
};

const onStepClick = (index) => {
  const swiper = document.querySelector(".swiper-container").swiper;
  swiper.slideTo(index);
};

const steps = ref([
  {
    name: "general",
    active: false,
    done: true,
  },
  {
    name: "location",
    active: false,
    done: false,
  },
  {
    name: "timing",
    active: false,
    done: false,
  },
  {
    name: "category",
    active: true,
    done: false,
  },
]);

const selectedSlide = computed(() => {
  return steps.value.findIndex((step) => step.active);
});

const getScrappedContractors2 = async (page = 1, pageSize = 10) => {
  const config = useRuntimeConfig();

  console.log;
  const options = {
    method: "GET",
    headers: {
      Host: `${config.public.FETCH_HOST}`,
    },
  } as any;

  const contractors = await useFetch(
    `${config.public.API_URL}api/v1/contractors-scrapped/?page=${page}&page_size=${pageSize}`,
    options
  ).then((res) => {
    const data: any = res.data.value;
    const error = res.error.value;

    if (error) {
      // Handle error
      console.log(error);
      return [];
    } else {
      return data;
    }
  });

  return await contractors;
};

const page = ref(1);
const data = ref(await getScrappedContractors2(page.value));
const contractors = ref(data.value.results);
const total = ref(data.value.count);

const pages = ref(Math.ceil(total.value / 10));

console.log(total.value);

// watch page and fetch new data
watch(page, async (newPage) => {
  data.value = await getScrappedContractors2(newPage);
  contractors.value = data.value.results;
  total.value = data.value.count;
  pages.value = Math.ceil(total.value / 10);
});

onMounted(() => {
  isSwiperLoaded.value = true;
});
</script>

<style lang="scss"></style>
