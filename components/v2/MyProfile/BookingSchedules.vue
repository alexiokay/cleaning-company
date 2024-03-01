<template lang="pug">
div(class="flex flex-col w-full px-[5rem] py-[5rem] items-center justify-center bg-white rounded-[24px] gap-y-8")
    h2.text-4xl.font-bold  Booking Schedules
    
    div(class="flex flex-col")

    div(class="w-full flex px-8 py-6 border-[1px] bg-[#F9F9FF] border-[#8E7CFB] rounded-[8px] gap-x-6 items-center")
        <svg width="74" height="74" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M64.7498 12.3333C62.8998 12.3333 53.6498 16.9583 36.9998 16.9583C20.6582 16.9583 10.7915 12.3333 9.24984 12.3333C7.70817 12.3333 6.1665 13.5666 6.1665 15.4166V58.5833C6.1665 60.4333 7.70817 61.6666 9.24984 61.6666C11.0998 61.6666 20.0415 57.0416 36.9998 57.0416C53.6498 57.0416 62.8998 61.6666 64.7498 61.6666C66.2915 61.6666 67.8332 60.4333 67.8332 58.5833V15.4166C67.8332 13.5666 66.2915 12.3333 64.7498 12.3333ZM61.6665 54.2666C55.4998 52.4166 47.4832 50.8749 36.9998 50.8749C26.5165 50.8749 18.4998 52.4166 12.3332 54.2666V19.7333C20.3498 21.8916 28.6748 23.1249 36.9998 23.1249C47.4832 23.1249 55.4998 21.5833 61.6665 19.7333V54.2666ZM28.3665 33.9166L16.9582 47.4832C23.1248 46.5583 29.9082 46.2499 36.9998 46.2499C44.0915 46.2499 50.8748 46.5583 57.0415 47.4832L43.1665 30.8333L34.5332 41.3166L28.3665 33.9166Z" fill="#64626E"/>
        </svg>
        div(class="flex flex-col gap-y-1")
            p(class="text-[#181526] opacity-[0.75]") Date
            p(class="text-[#181526] font-bold") 24-06-23

        hr(class="w-[1px] h-[2.5rem] bg-[#B7B6BC] ")

        div(class="flex gap-x-4 items-center")
            div(class="flex flex-col gap-y-1")
                p(class="text-[#181526] opacity-[0.75]") Start
                p(class="text-[#181526] font-bold") 05:00 pm
            hr(class="w-[1.1rem] h-[0.15rem] bg-[#181526]")
            div(class="flex flex-col gap-y-1")
                p(class="text-[#181526] opacity-[0.75]") End
                p(class="text-[#181526] font-bold") 06:00 pm
        
        hr(class="w-[1px] h-[2.5rem] bg-[#B7B6BC] ")

        

        
        button(class=" ml-auto w-auto  h-[3rem] border-[1px] rounded-[8px]  bg-transparent border-[#4E37E3] py-2 px-6 font-bold text-[#4E37E3] text-lg") Contact the Provider

</template>

<script setup lang="ts"></script>

<style lang="scss"></style>
