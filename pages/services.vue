<template lang="pug">
div(class="w-full h-full flex flex-col items-center md:gap-y-4 ")
    ModalApproved(:isOpen="isBooking" @confirm="isBooking = false" @close="isBooking = false" class="w-full h-full")
    div(v-show="isHintOpen" class="text-start h-auto px-6 py-1 md:py-4 bg-[#Fff6d9] w-full  flex items-center gap-x-4")
        BulbIcon(class="w-8 h-8")
        p We use AI to find the best fitting service provider for you from our huge database
        CloseIcon(@click="isHintOpen = false" class="ml-auto text-2xl hover:cursor-pointer w-12 md:w-auto h-12 md:h-auto") 
    
    
    // ServiceCustomizerBeta(:customization="customization" :steps="steps" class="w-full " )
    
    div(class="w-full relative h-auto flex flex-col items-center justify-center bg-slate-100 py-2 md:py-4 px-4 xl:px-0 -mb-4")
        h1(class=" mb-4 text-xl") Find best service provider
        Searchbar(class="w-full  lg:w-4/5 2xl:w-3/5 h-[4rem] md:h-[5rem]" @search="onSearch" @clear="onClear" :regions="regions")
          
        ServiceSearchFilters(class=" mx-auto w-full lg:w-4/5 2xl:w-3/5" :customization="customization" :regions="regions")
    div(class="w-full md px-4 xl:px-[17%] 3xl:px-[0%] relative h-auto flex flex-col items-center justify-center bg-slate-100 md:py-8 gap-y-4 md:gap-y-8")
        p(class="text-2xl md:text-4xl font-flamabook w-full md:text-center") We found {{ found }} service providers for you
        Pagination(:pages="searchQuery !== ''? 1: pages"  :page="page" @change="page = $event" class="w-full flex items-center justify-center gap-x-4 mt-6")
        div(class="3xl:w-[80rem] w-full relative gap-y-6 h-auto md:h-[20rem] flex    md:flex-nowrap bg-white px-4 md:px-10 py-8 rounded-2xl justify-between gap-x-4 md:gap-x-12" v-for="(contractor, index) in filteredContractors")
            div(v-if="index===0" class="aspect-square w-[8rem] rounded-full absolute -left-[12rem] text-xl bg-yellow-200 font-bold flex items-center justify-center border-[1px] drop-shadow-md") BEST!
            div(class="flex flex-col w-1/3 md:w-auto h-full gap-y-4 text-center")
                ClientOnly 
                    Rating(class="w-full h-auto" :rated="convertRatingToNormalizedScale(contractor.rating)")
                    p {{ contractor.rating }}
                div(class="bg-white w-auto h-[10rem] px-4 rounded-full")
                    nuxt-img(:src="contractor.logoUrl? contractor.logoUrl: 'https://cdn-icons-png.flaticon.com/512/5345/5345937.png'" format='webp' provider="ipx" class="  w-full md:h-full aspect-square object-scale-down")

            div(class="w-full md:w-full h-full flex flex-col gap-y-3")
                p(class="text-xl lg:text-3xl") {{contractor.title}}
                p(class="text-lg") {{contractor.description}}
                div(class="flex gap-x-4 items-center")
                    PhoneIcon(class="w-6 h-6 hover:cursor-pointer hover:text-yellow-500")
                    p(:class="{'blur-sm': contractor.isPhoneNumberHidden }" class="text-base md:text-lg ") {{contractor.phoneNumber}}
                    
                    button(@click="contractor.isPhoneNumberHidden = !contractor.isPhoneNumberHidden" class=" hidden px-2 py-1 border-[1px] drop-shadow-md rounded-full") show phone number
                div(class="flex gap-x-4 items-center")
                    EmailIcon(class="w-6 h-6 hover:cursor-pointer hover:text-yellow-500")
                    p(class="text-base md:text-lg") {{contractor.email}}
                
                p(class="text-lg") {{contractor.palceUrl}}
                div(class="flex gap-x-3 items-center mt-auto")
                    WebsiteIcon(class="w-6 h-6 hover:cursor-pointer hover:text-yellow-500 ")
                    NuxtLink(:to="contractor.website") {{ contractor.website }}
                button(@click="isBooking = true" class="-ml-[8.2rem] w-[calc(100vw-4rem)] md:w-auto h-[3rem] bg-slate-100 rounded-xl text-xl md:text-2xl font-flamabold mt-auto hover:bg-slate-200 ") Book now
            div(class="w-full md:w-1/5 hidden md:flex md:flex-col gap-y-3 gap-x-8 md:gap-x-0 ")
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

const regions = ref(await getLocalizations());

const isHintOpen = ref(true);
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
      active: true,
    },
  ],

  house_categories: [
    {
      title: "Kitchen",
      icon: "icons/icon_13.png",
      active: false,
    },
    {
      // full house cleaning
      title: "Whole house",
      icon: "icons/icon_23.png",
      active: true,
    },
    {
      title: "Bathroom",
      icon: "icons/icon_33.png",
      active: false,
    },
    {
      title: "Bedroom",
      icon: "icons/icon_43.png",
      active: false,
    },
    {
      title: "Living room",
      icon: "icons/icon_53.png",
      active: false,
    },
  ],
  car_categories: [
    {
      title: "Interior",
      icon: "icons/icon_23.png",
      active: false,
    },
    {
      title: "Exterior",
      icon: "icons/icon_23.png",
      active: false,
    },
  ],
});

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
</script>

<style lang="scss"></style>
