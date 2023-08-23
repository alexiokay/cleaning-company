<template lang="pug">
div(class="w-full h-full flex flex-col items-center gap-y-4  min-h-screen font-robotolight")
    div(class="flex flex-col w-full gap-y-10 justify-center items-center  pb-[9.7rem] text-black")
        
        h1.text-center.text-4xl.font-semibold Hi I'am fresh and tidy.
            p Your cleaning service customization helper
        
        div(class="flex gap-y-4  flex-col")
            p.text-3xl.text-center How much will the service cost?
            div(class="flex gap-x-4 ")
                select(type="select" placeholder="Select service type" v-model="selectedServiceLink" class="w-[20rem] h-[3rem] border-[1px] border-gray-300 rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50")
                    option(value="" disabled) Select service type
                    option(v-bind:value="service.link" value="20" v-for="service in services" :key="service.title") {{ service.title }}
                button(@click="router.push(selectedServiceLink)" class="w-[10rem] h-[3rem]  bg-white border-[1px] border-gray-300 rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50") Let's find out
            p.text-gray-300 free, no obligation estimates.
    div(class="flex flex-wrap  gap-x-4 gap-y-6 w-full px-[30rem] justify-center text-start")
        NuxtLink(:to="service.link" class="inline-flex flex-col  shadow-md items-center gap-y-6 justify-center rounded-xl px-16 py-12 aspect-square"  v-for="service in services" :key="service.title")
          
            nuxt-img(:src="service.icon" class="w-[7rem] h-[7rem] aspect-square object-cover")
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
        link: "/service-customatization/whole-house",
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
