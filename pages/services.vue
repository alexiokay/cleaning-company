<template lang="pug">
div(class="w-full h-full flex flex-col items-center gap-y-4 ")
    ModalApproved(:isOpen="isBooking" @confirm="isBooking = false" @close="isBooking = false" class="w-full h-full")
    div(v-show="isHintOpen" class="text-start px-6 py-4 bg-[#Fff6d9] w-full -mb-4 flex items-center gap-x-4")
        BulbIcon(class="w-8 h-8")
        p We use AI to find the best fitting service provider for you from our huge database
        CloseIcon(@click="isHintOpen = false" class="ml-auto text-2xl hover:cursor-pointer") 
    
    h1(class="mt-4") Find best service provider
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
      
        SwiperSlide(v-for="step in steps" :key="step" class="px-4 md:w-full ")
            // category  
            div(v-show="step.name === 'category'" class=" w-full h-auto  py-4 md:py-12 flex flex-wrap gap-y-4  mt-2")
              
                div.services__category(class=" flex flex-col items-center w-1/3 md:w-1/6 md:font-semibold gap-y-2" v-for="i in 12")
                    nuxt-img(src="icons/icon_23.png" width="500" height="500" class="object-cover   aspect-square w-[5rem] md:w-[6rem]" alt="icon" title="icon" format="webp")
                    p(class="text-lg md:text-xl") Kitchen
            // timing      
            div(v-show="step.name === 'timing'" class=" w-full h-auto py-12 flex flex-wrap gap-y-4  mt-2")
                
                div.services__category(class=" flex flex-col items-center w-1/4 md:w-1/6 md:font-semibold gap-y-2" v-for="i in 12")
                    nuxt-img(src="icons/icon_23.png" width="500" height="500" class="object-cover  aspect-square w-[5rem] md:w-[6rem]" alt="icon" title="icon" format="webp")
                    p(class="text-lg md:text-xl") Kitchen
            // general
            div(v-show="step.name === 'general'" class=" w-full h-auto py-12 flex flex-wrap gap-y-4  mt-2 justify-between")
                div()
                div(@click="setServiceActive(service); onStepClick(1)" :class="{'bg-blue-500 text-white': service.active === true}" class="flex w-[calc(50%-1rem)] items-center border-[1px] py-1 px-3 rounded-md drop-shadow-md gap-x-3 hover:cursor-pointer" v-for="service in customization.general")
                    component(:is="service.icon" class="w-12 h-12")
                    p(class="w-full text-lg md:text-xl") {{service.title}}
                    input(type="checkbox" class="ml-auto w-6 h-6" v-model="service.active")
            // location        
            div(v-show="step.name === 'location'" class=" w-full h-auto py-12 flex flex-wrap gap-y-4  mt-2")
                
                div.services__category(class=" flex flex-col items-center w-1/4 md:w-1/6 md:font-semibold gap-y-2" v-for="i in 12")
                    nuxt-img(src="icons/icon_23.png" width="500" height="500" class="object-cover  aspect-square w-[5rem] md:w-[6rem]" alt="icon" title="icon" format="webp")
                    p(class="text-lg md:text-xl") Kitchen
        
                

    div(v-else class=" w-3/5  flex h-[40rem]  gap-y-4 items-center justify-center")
        LoadingIcon(class="w-24 h-24 text-yellow-500 mb-[7rem]")
    div(class="w-full relative h-auto flex items-center justify-center bg-slate-100 py-8 md:py-12 px-4 md:px-0 -mb-4")
        Searchbar(class="w-full  md:w-3/5 h-[5rem]" @search="onSearch" @clear="onClear")
    div(class="w-full md px-4 xl:px-[17%] 3xl:px-[0%] relative h-auto flex flex-col items-center justify-center bg-slate-100 py-8 gap-y-8")
        p(class="text-4xl font-flamabook w-full text-center") We found {{ found }} service providers for you
        Pagination(:pages="searchQuery !== ''? 1: pages"  :page="page" @change="page = $event" class="w-full flex items-center justify-center gap-x-4 mt-6")
        div(class="3xl:w-[80rem] w-full relative gap-y-6 h-auto md:h-[20rem] flex flex-wrap md:flex-nowrap bg-white px-10 py-8 rounded-2xl gap-x-12" v-for="(contractor, index) in filteredContractors")
            div(v-if="index===0" class="aspect-square w-[8rem] rounded-full absolute -left-[12rem] text-xl bg-yellow-200 font-bold flex items-center justify-center border-[1px] drop-shadow-md") BEST!
            div(class="flex flex-col w-[calc(36%-1.5rem)] md:w-auto h-full gap-y-4 text-center")
                ClientOnly
                    Rating(class="w-full h-auto" :rated="convertRatingToNormalizedScale(contractor.rating)")
                    p {{ contractor.rating }}
                div(class="bg-white w-[10rem] h-[10rem] px-4 rounded-full")
                    nuxt-img(:src="contractor.logoUrl? contractor.logoUrl: 'https://cdn-icons-png.flaticon.com/512/5345/5345937.png'" format='webp' class="  w-[6rem] md:w-full md:h-full aspect-square object-scale-down")

            div(class="w-[calc(64%-1.5rem)] md:w-full h-full flex flex-col gap-y-3")
                p(class="text-xl lg:text-3xl") {{contractor.title}}
                p(class="text-lg") {{contractor.description}}
                div(class="flex gap-x-4 items-center")
                    PhoneIcon(class="w-6 h-6 hover:cursor-pointer hover:text-yellow-500")
                    p(:class="{'blur-sm': contractor.isPhoneNumberHidden }" class="text-lg ") {{contractor.phoneNumber}}
                    
                    button(@click="contractor.isPhoneNumberHidden = !contractor.isPhoneNumberHidden" class=" px-2 py-1 border-[1px] drop-shadow-md rounded-full") show phone number
                div(class="flex gap-x-4 items-center")
                    EmailIcon(class="w-6 h-6 hover:cursor-pointer hover:text-yellow-500")
                    p(class="text-lg") {{contractor.email}}
                
                p(class="text-lg") {{contractor.palceUrl}}
                div(class="flex gap-x-3 items-center mt-auto")
                    WebsiteIcon(class="w-6 h-6 hover:cursor-pointer hover:text-yellow-500 ")
                    NuxtLink(:to="contractor.website") {{ contractor.website }}
                button(@click="isBooking = true" class="w-full h-[3rem] bg-slate-100 rounded-xl text-xl md:text-2xl font-flamabold mt-auto hover:bg-slate-200 ") Book now
            div(class="w-full md:w-1/5 flex md:flex-col gap-y-3 gap-x-8 md:gap-x-0")
                div(class="w-auto md:w-full flex gap-x-2 md:gap-x-6")
                    TimeslotIcon(class="w-6 md:w-8 h-8")
                    p :
                    CorrectIcon(class="w-6 md:w-8 h-8 text-green-600")
                div(class="w-auto md:w-full flex gap-x-2 md:gap-x-6")
                    ServiceIcon(class="w-6 md:w-8 h-8 ")
                    p :
                    NotFoundIcon(class="w-6 md:w-8 h-8 text-red-600")
                div(class="w-auto md:w-full flex gap-x-2 md:gap-x-6")
                    LocationsIcon(class="w-6 md:w-8 h-8 ")
                    p :
                    CorrectIcon(class="w-6 md:w-8 h-8 text-green-600")
        
        Pagination(:pages="searchQuery !== ''? 1: pages" :page="page" @change="page = $event" class="w-full flex items-center justify-center gap-x-4")
       


        
                
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
import PhoneIcon from "~icons/carbon/phone-voice";
import EmailIcon from "~icons/entypo/email";

import CarIcon from "~icons/raphael/car";
import HouseIcon from "~icons/bi/house";

import type { Swiper } from "swiper";
const isHintOpen = ref(true);
const isSwiperLoaded = ref(false);
const isBooking = ref(false);
const searchQuery = ref("");

const customization = ref({
  general: [
    {
      title: "car cleaning",
      icon: CarIcon,
      active: false,
    },
    {
      title: "house cleaning",
      icon: HouseIcon,
      active: false,
    },
  ],
});

const setServiceActive = (service) => {
  customization.value.general.forEach((service) => (service.active = false));
  service.active = true;
};
function convertRatingToNormalizedScale(rating: string) {
  const normalizedRating = parseFloat(rating.replace(",", ".")) * 2;
  return Math.min(9, Math.floor(normalizedRating));
}

const onSearch = async (value) => {
  console.log("searching: " + value);
  searchQuery.value = value;

  if (searchQuery.value === "") {
    data.value = await getScrappedContractorsFetch(page.value);
  } else {
    page.value = 1;
    data.value = await getScrappedContractorsFetch(page.value, total.value);
  }

  contractors.value = data.value.results;
  total.value = data.value.count;
  pages.value = Math.ceil(total.value / 10);
};
const filteredContractors = computed(() => {
  console.log(searchQuery.value);
  if (searchQuery.value === "") {
    return contractors.value;
  }

  const _filteredContractors = contractors.value.filter((contractor) =>
    contractor.title.toLowerCase().startsWith(searchQuery.value.toLowerCase())
  );

  found.value =
    searchQuery.value !== "" ? _filteredContractors.length : total.value;

  return _filteredContractors;
});

const onClear = () => {
  searchQuery.value = "";
};

const onSlideChange = (swiper: Swiper) => {
  steps.value.forEach((step, index) => {
    if (index === swiper.activeIndex) {
      step.active = true;
    } else {
      step.active = false;
    }
  });
};

const onStepClick = (index: any) => {
  const swiperContainer = document.querySelector(".swiper-container");
  const swiper = swiperContainer.swiper as Swiper;
  swiper.slideTo(index);
};

const steps = ref([
  {
    name: "general",
    active: true,
    done: true,
  },
  {
    name: "category",
    active: false,
    done: false,
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

const getScrappedContractorsFetch = async (page = 1, pageSize = 10) => {
  const config = useRuntimeConfig();

  console.log;
  const options = {
    method: "GET",
    headers: {
      Host: `${config.public.FETCH_HOST}`,
    },
  } as any;

  const contractors = await fetch(
    `${config.public.API_URL}api/v1/contractors-scrapped/?page=${page}&page_size=${pageSize}`,
    options
  )
    .then((res) => res.json())
    .then((data) => {
      return data;
    });

  return await contractors;
};

const page = ref(1);
const data = ref(await getScrappedContractorsFetch(page.value));
const contractors = ref(data.value.results);
const total = ref(data.value.count);
const found = ref(
  searchQuery.value !== "" ? filteredContractors.value.length : total.value
);
const pages = ref(Math.ceil(total.value / 10));

console.log(total.value);

// watch page and fetch new data
watch(page, async (newPage) => {
  data.value = await getScrappedContractorsFetch(newPage);
  contractors.value = data.value.results;
  total.value = data.value.count;

  pages.value = Math.ceil(total.value / 10);
});

onMounted(() => {
  isSwiperLoaded.value = true;
});
</script>

<style lang="scss"></style>
