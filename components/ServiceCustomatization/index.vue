<template lang="pug">
div(class="w-full h-full flex flex-col items-center gap-y-4  font-robotolight pt-8 px-4")
    div(class="flex flex-col w-full gap-y-10 justify-center items-center    text-black")

        //ServiceCustomatizationSelect
    div(class="flex flex-col text-center  py-6 w-full")
        h2(class="text-3xl  font-semibold ") Cleaning services
        div(class="flex flex-wrap  gap-x-2 md:gap-x-4 gap-y-6 w-full 3xl:px-[20rem] justify-between md:justify-center text-start  py-6")
            NuxtLink(:to="service.link" class="w-[calc(50%-0.3rem)] md:w-auto inline-flex flex-col border-[1px] shadow-md items-center gap-y-6 justify-center rounded-xl px-10 py-8 md:px-16 md:py-10 aspect-square bg-white hover:bg-[#f2f2f2]"  v-for="service in services" :key="service.name")
            
                nuxt-img(:src="service.icon" class="md:w-[6rem] md:h-[6rem] aspect-square object-cover")
                p.text-center.text-lg.font-semibold {{ service.name }}
      
</template>

<script setup lang="ts">
const router = useRouter();
const selectedServiceLink = ref("");

const services = await getServices();
</script>

<style lang="scss"></style>
