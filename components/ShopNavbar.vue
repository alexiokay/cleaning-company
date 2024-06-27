<template lang="pug">
nav(:class="routeNow=='shop'? 'shadow-lg':'lg:shadow-none'" class="flex  w-[100vw] -mx-2 px-4 2xl:px-[6%] py-2 border-y-[1px] border-gray-200 bg-[#fafafa]  justify-between items-center h-[4.5rem] lg:h-auto  shadow-md " )

    div#navbar_search_button(@click="isSearchOpen = true" class=" flex items-center gap-x-2 hover:cursor-pointer group hover:bg-[#4e37e396] border-[#4E37E3]  border-[1px] text-white rounded-md px-4  py-[0.55rem]")
        CarbonSearch(class="w-6 h-6 text-[#4E37E3] group-hover:text-white")
        p(class="text-[0.9rem] text-[#4E37E3] group-hover:text-white") Search
    
    div#navbar_cart(@click="$emit('openCart')" class=" flex gap-x-2 items-center hover:cursor-pointer group hover:bg-[#4e37e396] border-[#4E37E3]  border-[1px] text-white rounded-md px-4  py-[0.55rem]")
        IonCartOutline(class="w-6 h-6 text-[#4E37E3] group-hover:text-white ")

LazySearchNavBar(:isSearchOpen="isSearchOpen" @close="isSearchOpen = false")

</template>

<script setup lang="ts">
import CarbonSearch from "~icons/carbon/search";
import IonCartOutline from "~icons/ion/cart-outline";

const isSearchOpen = ref(false);
</script>

<style lang="scss"></style>
