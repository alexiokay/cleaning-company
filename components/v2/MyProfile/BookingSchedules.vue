import { index } from 'cheerio/lib/api/traversing'; import { index } from
'cheerio/lib/api/traversing';
<template lang="pug">
div(class="flex flex-col w-full  px-4 lg:px-[7rem] py-[2rem] lg:py-[5rem] items-center justify-center bg-white rounded-[24px] gap-y-16 ")
    h2.text-4xl.font-bold  Booking Schedules
    
    div(class="flex w-full flex-col max-h-[41.5vh] overflow-y-auto gap-y-8 px-6")
    
        V2MyProfileBookingSchedulesItem(v-for="(item, index) in orders" :key="item" :order="item" :class="index === 0 ? 'bg-[#F9F9FF]' : 'bg-[#ffffff]'")
</template>

<script setup lang="ts">
const props = defineProps<{
  orders: Array<any>;
}>();

const dateSortedOrders = computed(() => {
  return orders.value.sort((a, b) => {
    return new Date(a.date).getTime() - new Date(b.date).getTime();
  });
});
</script>

<style lang="scss"></style>
