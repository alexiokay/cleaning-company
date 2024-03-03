<template lang="pug">
div(class="w-full flex px-8 py-2 rounded-[8px] gap-x-6 items-center")
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M52.5 10C51 10 43.5 13.75 30 13.75C16.75 13.75 8.75 10 7.5 10C6.25 10 5 11 5 12.5V47.5C5 49 6.25 50 7.5 50C9 50 16.25 46.25 30 46.25C43.5 46.25 51 50 52.5 50C53.75 50 55 49 55 47.5V12.5C55 11 53.75 10 52.5 10ZM50 44C45 42.5 38.5 41.25 30 41.25C21.5 41.25 15 42.5 10 44V16C16.5 17.75 23.25 18.75 30 18.75C38.5 18.75 45 17.5 50 16V44ZM23 27.5L13.75 38.5C18.75 37.75 24.25 37.5 30 37.5C35.75 37.5 41.25 37.75 46.25 38.5L35 25L28 33.5L23 27.5Z" fill="#64626E"/>
    </svg>


    p(class="text-[#181526] opacity-[0.75]") Example service name and service provider

    hr(class="w-[1px] h-[2.5rem] bg-[#B7B6BC] ")

    p(class="text-[#181526] opacity-[0.75]") Transfer  Date
        
    
    hr(class="w-[1px] h-[2.5rem] bg-[#B7B6BC] ")
    
    p(class="text-[#181526] opacity-[0.75]") Status:
        span(:class="''") {{ transaction.status }}
    
    div(class="flex gap-x-[2rem] ml-auto items-center")
        p(class="font-bold text-2xl") 240$
        
        button(class=" w-auto flex items-center  h-[3rem] border-[1px] rounded-[8px]  bg-transparent border-[#64626E] py-2 px-6 font-bold text-[#64626E] text-lg")
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.3335 13.3333H12.6668V12H3.3335M12.6668 6H10.0002V2H6.00016V6H3.3335L8.00016 10.6667L12.6668 6Z" fill="#64626E"/>
            </svg>

</template>

<script setup lang="ts">
defineProps({
  transaction: Object,
});
</script>

<style lang="scss"></style>
