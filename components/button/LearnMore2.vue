<template lang="pug">
nuxtLink(:to="to" class="w-[12rem]  gap-y-1 gap-x-2 bg-[#4E37E3] font-bold rounded-[0.5rem] items-center text-white justify-center flex  px-[1.5rem] py-[1rem] text-center text-semibold ")
    <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.625 2.25C8.91793 2.25 10.1579 2.76361 11.0721 3.67785C11.9864 4.59209 12.5 5.83207 12.5 7.125C12.5 8.3325 12.0575 9.4425 11.33 10.2975L11.5325 10.5H12.125L15.875 14.25L14.75 15.375L11 11.625V11.0325L10.7975 10.83C9.9425 11.5575 8.8325 12 7.625 12C6.33207 12 5.09209 11.4864 4.17785 10.5721C3.26361 9.65791 2.75 8.41793 2.75 7.125C2.75 5.83207 3.26361 4.59209 4.17785 3.67785C5.09209 2.76361 6.33207 2.25 7.625 2.25ZM7.625 3.75C5.75 3.75 4.25 5.25 4.25 7.125C4.25 9 5.75 10.5 7.625 10.5C9.5 10.5 11 9 11 7.125C11 5.25 9.5 3.75 7.625 3.75Z" fill="#E8E8E9"/>
    </svg>

    p  Learn More
</template>

<script setup lang="ts">
defineProps({
  to: String,
});
</script>

<style lang="scss"></style>
