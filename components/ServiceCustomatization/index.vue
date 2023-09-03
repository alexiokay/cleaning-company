<template lang="pug">
div(class="w-full h-full flex flex-col items-center gap-y-4  font-robotolight pt-8 px-4")
    div(class="flex flex-col w-full gap-y-10 justify-center items-center    text-black")

        div(class="flex gap-y-4  flex-col")
            p.text-center(class="text-2xl md:text-3xl") How much will the service cost?
            div(class="flex gap-x-4  ")
                select(type="select" placeholder="Select service type" v-model="selectedServiceLink" class="w-3/5 md:w-[20rem] h-[4rem] border-[1px] border-gray-300  rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50")
                    option(value="" disabled) Select service type
                    option(v-bind:value="service.link" value="20" v-for="service in services" :key="service.title") {{ service.title }}
                button(@click="router.push(selectedServiceLink)" class="w-2/5 d:w-[10rem] h-[4rem]  bg-[#fa8c16] border-[1px] border-gray-300 rounded-md px-4 py-2 text-lg font-medium text-white hover:bg-[#f16e00]") Let's find out
            p.text-gray-300 free, no obligation estimates.
    div(class="flex flex-col text-center  py-6 w-full")
        h2(class="text-3xl  font-semibold ") Cleaning services
        div(class="flex flex-wrap  gap-x-2 md:gap-x-4 gap-y-6 w-full 3xl:px-[20rem] justify-between md:justify-center text-start  py-6")
            NuxtLink(:to="service.link" class="w-[calc(50%-0.3rem)] md:w-auto inline-flex flex-col border-[1px] shadow-md items-center gap-y-6 justify-center rounded-xl px-10 py-8 md:px-16 md:py-10 aspect-square bg-white hover:bg-[#f2f2f2]"  v-for="service in services" :key="service.title")
            
                nuxt-img(:src="service.icon" class="md:w-[6rem] md:h-[6rem] aspect-square object-cover")
                p.text-center.text-lg.font-semibold {{ service.title }}
      
</template>

<script setup lang="ts">
const router = useRouter();
const selectedServiceLink = ref("");

const services = [
  {
    title: "Kitchen",
    icon: "icons/icon_13.png",
    active: false,
    link: "/service-customatization/kitchen",
  },
  {
    // full house cleaning
    title: "Whole house",
    icon: "icons/icon_23.png",
    active: true,
    link: "/whole-house",
  },
  {
    title: "Bathroom",
    icon: "icons/icon_33.png",
    active: false,
    link: "/service-customatization/bathroom",
  },
  {
    title: "Bedroom",
    icon: "icons/icon_43.png",
    active: false,
    link: "/service-customatization/bedroom",
  },
  {
    title: "office",
    icon: "icons/icon_53.png",
    active: false,
    link: "/service-customatization/office",
  },
  {
    title: "Warehouse",
    icon: "icons/icon_53.png",
    active: false,
    link: "/service-customatization/warehouse",
  },
];
</script>

<style lang="scss"></style>
