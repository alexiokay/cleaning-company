<template lang="pug">
div(class="flex gap-x-2")
    button(@click="emit('next')" class="w-full md:w-[16rem] py-2 text-white bg-[#563CF9] rounded-[0.4375rem]  items-center flex justify-center gap-x-3") 
        <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.25 3L9.125 7.125L13.25 9L9.125 10.875L7.25 15L5.375 10.875L1.25 9L5.375 7.125L7.25 3ZM7.25 6.6225L6.5 8.25L4.8725 9L6.5 9.75L7.25 11.3775L8 9.75L9.6275 9L8 8.25L7.25 6.6225ZM14.75 6.75L13.805 4.695L11.75 3.75L13.805 2.8125L14.75 0.75L15.6875 2.8125L17.75 3.75L15.6875 4.695L14.75 6.75ZM14.75 17.25L13.805 15.195L11.75 14.25L13.805 13.3125L14.75 11.25L15.6875 13.3125L17.75 14.25L15.6875 15.195L14.75 17.25Z" fill="#E8E8E9"/>
        </svg>
        p Next
</template>

<script setup lang="ts">
const emit = defineEmits(["next"]);
</script>

<style lang="scss"></style>
