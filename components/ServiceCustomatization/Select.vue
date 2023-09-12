<template lang="pug">
div(class="flex gap-y-4 w-auto md:w-auto flex-col md:px-0")
    p.text-center(class="text-lg md:text-2xl") What is your ZIP Code?
    div(class="flex gap-x-4  ")
        select(type="select" placeholder="Select service type" v-model="selectedServiceLink" class="w-full md:w-[20rem] h-[4rem] border-[1px] border-gray-300  rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50")
            option(value="" disabled) Select service type
            option(v-bind:value="service.link" value="20" v-for="service in services" :key="service.name") {{ service.name }}
        button(@click="router.push(selectedServiceLink)" class="w-2/5 d:w-[10rem] h-[4rem]  bg-[#fa8c16] border-[1px] border-gray-300 rounded-md px-4 py-2 text-base md:text-lg font-medium text-white hover:bg-[#f16e00]") Let's find out
    p.text-gray-300.text-lg free, no obligation estimates.
</template>

<script setup lang="ts">
const router = useRouter();
const selectedServiceLink = ref("");

const services = await getServices();
console.log(services);
</script>

<style lang="scss"></style>
