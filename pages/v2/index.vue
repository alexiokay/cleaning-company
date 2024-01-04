<template lang="pug">
div(class="w-full h-full flex flex-col justify-center items-center font-intern ")
    div(class="w-full  h-auto overflow-hidden relative flex flex-col items-center py-[10rem]  ")
        nuxt-img.header-img(src="images/v2/headerV2.jpeg" provider="ipx"  format="webp" class="w-full h-full object-cover absolute top-0 left-0 z-10  header-background ")
        div(class="w-[130rem] h-auto flex flex-col items-center  z-20 gap-y-6 py-[3rem] ")
            //- div(class="flex border-white border-[1px] rounded-full w-auto h-10 text-white items-center justify-center gap-x-4 px-6 py-4")
            //-     p Search 
            //-     ArrowIcon(class="rotate-[180deg]")
            //-     p Book & Pay
            //-     ArrowIcon(class="rotate-[180deg]")
            //-     p Relax

            //- h1(class=" text-[3rem] font-semibold text-white flex flex-col items-center ") Professional Cleaning Services
            //-     span for your Home
           
          
            V2HeaderFormV2
    <!-- Person, details -->
    div(class="flex w-[95%] relative h-40 z-50")
    
        div(class="absolute -top-32 right-[21rem] w-auto rounded-full bg-white py-3 px-5 z-50") 
            p Hey, Let's talk about details!
        div(class="absolute right-72 -top-24 w-auto")
            
            nuxt-img(src="images/v2/hero.png" width="150px")


    <!-- header 2 -->
    div(class="flex w-[65%] relative py-[5rem] pb-[11rem] z-40 items-center justify-center ")
        div(class=" flex flex-col gap-y-3 w-[42%]")
            h2(class="text-[3rem] font-bold tracking-[150%] text-[#464451]") Commercial Cleaning
            p(class="w-2/3 tracking-wide") Your premier destination for top-notch commercial cleaning services. We specialize in maintaining pristine office spaces, retail establishments, medical facilities, and more.
            button(class="mt-[2.5rem] rounded-xl w-[11rem] bg-[#4E37E3] py-[1rem] px-[1.5rem] gap-x-2 flex items-center justify-center text-white")
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_197_5)">
                    <path d="M5.99984 2.66675L7.6665 6.33341L11.3332 8.00008L7.6665 9.66675L5.99984 13.3334L4.33317 9.66675L0.666504 8.00008L4.33317 6.33341L5.99984 2.66675ZM5.99984 5.88675L5.33317 7.33341L3.8865 8.00008L5.33317 8.66675L5.99984 10.1134L6.6665 8.66675L8.11317 8.00008L6.6665 7.33341L5.99984 5.88675ZM12.6665 6.00008L11.8265 4.17341L9.99984 3.33341L11.8265 2.50008L12.6665 0.666748L13.4998 2.50008L15.3332 3.33341L13.4998 4.17341L12.6665 6.00008ZM12.6665 15.3334L11.8265 13.5067L9.99984 12.6667L11.8265 11.8334L12.6665 10.0001L13.4998 11.8334L15.3332 12.6667L13.4998 13.5067L12.6665 15.3334Z" fill="#E8E8E9"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_197_5">
                            <rect width="16" height="16" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
                
                p(class="tracking-[150%] font-[0.8125rem] ") Book Now!
        div(class=" w-1/2 relative ")
            div(class="absolute -bottom-[22rem] right-[10rem] ")
                nuxt-img(src="images/v2/header2 ft.png" width="650px" )
                div(class="absolute bottom-[5rem] -left-[5rem] rounded-3xl px-6 py-5 flex flex-col bg-[#EEECFE] text-[#3D2BB1]")
                    p.w-auto.flex(class=" font-bold  text-lg") Over 1500
                    p.w-auto.flex Online offers
                div(class="absolute -bottom-[3rem] -right-[5rem] rounded-3xl py-[1.5rem] px-[1rem] text-[1rem] flex flex-col bg-[#E1FF01] ")
                    p.w-auto.flex(class="text-[#3D2BB1]") Interested in
                    p.w-auto.flex(class="text-[1.4375rem] font-bold tracking-wide text-[#3D2BB1]") Commercial Cleaning?
                div(class="absolute top-[5rem] -right-[5rem] rounded-3xl px-6 py-5 flex flex-col bg-[#FAFAFA] text-[#3D2BB1] font-bold text-[1.1875rem] tracking-wide")
                    p.w-auto Find offers today
                  
                

    <!-- header 3 -->
    div(class="flex flex-col w-full   items-center h2-gradient pt-[23rem] pb-[12rem]")
            div(class="flex  w-auto relative flex-col text-[3rem] items-center font-bold")
                nuxt-img(src="images/v2/star.png" width="60px" class=" absolute -top-[2rem] -right-[2rem]")
                nuxt-img(src="images/v2/star1.png" width="50px" class=" absolute top-[0rem] -right-[6rem]")
                nuxt-img(src="images/v2/star.png" width="40px" class=" absolute top-[2rem] -left-[3rem]")
                p(class="w-auto flex ") We Are Providing
                p(class="text-[#7863FA] w-auto flex ") Best Cleaning Services

            p(class="mt-8 w-[38rem] font-[0.8125rem] text-center leading-[150%]") For over 1 year, customers have welcomed the trusted cleaning proffesionals from locally owned and operated businesses into their homes.

            div(class="flex mt-28 gap-x-[8.5rem] w-3/5")
                div(class="flex flex-col items-center w-1/3 text-center ")
                    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M32.0002 46.6666C38.2135 46.6666 43.4668 42.7733 45.6268 37.3333H18.3735C20.5068 42.7733 25.7868 46.6666 32.0002 46.6666ZM22.6668 29.3333C23.7277 29.3333 24.7451 28.9118 25.4953 28.1617C26.2454 27.4115 26.6668 26.3941 26.6668 25.3333C26.6668 24.2724 26.2454 23.255 25.4953 22.5048C24.7451 21.7547 23.7277 21.3333 22.6668 21.3333C21.606 21.3333 20.5885 21.7547 19.8384 22.5048C19.0883 23.255 18.6668 24.2724 18.6668 25.3333C18.6668 26.3941 19.0883 27.4115 19.8384 28.1617C20.5885 28.9118 21.606 29.3333 22.6668 29.3333ZM41.3335 29.3333C42.3944 29.3333 43.4118 28.9118 44.1619 28.1617C44.9121 27.4115 45.3335 26.3941 45.3335 25.3333C45.3335 24.2724 44.9121 23.255 44.1619 22.5048C43.4118 21.7547 42.3944 21.3333 41.3335 21.3333C40.2726 21.3333 39.2552 21.7547 38.5051 22.5048C37.7549 23.255 37.3335 24.2724 37.3335 25.3333C37.3335 26.3941 37.7549 27.4115 38.5051 28.1617C39.2552 28.9118 40.2726 29.3333 41.3335 29.3333ZM32.0002 53.3333C26.3422 53.3333 20.916 51.0856 16.9152 47.0849C12.9144 43.0841 10.6668 37.6579 10.6668 31.9999C10.6668 26.342 12.9144 20.9158 16.9152 16.915C20.916 12.9142 26.3422 10.6666 32.0002 10.6666C37.6581 10.6666 43.0843 12.9142 47.0851 16.915C51.0859 20.9158 53.3335 26.342 53.3335 31.9999C53.3335 37.6579 51.0859 43.0841 47.0851 47.0849C43.0843 51.0856 37.6581 53.3333 32.0002 53.3333ZM32.0002 5.33325C17.2535 5.33325 5.3335 17.3333 5.3335 31.9999C5.3335 39.0724 8.14301 45.8551 13.144 50.8561C15.6202 53.3323 18.5599 55.2966 21.7953 56.6367C25.0306 57.9768 28.4982 58.6666 32.0002 58.6666C39.0726 58.6666 45.8554 55.8571 50.8563 50.8561C55.8573 45.8551 58.6668 39.0724 58.6668 31.9999C58.6668 28.498 57.9771 25.0304 56.637 21.795C55.2968 18.5597 53.3326 15.62 50.8563 13.1437C48.3801 10.6675 45.4404 8.70326 42.2051 7.36313C38.9697 6.02301 35.5021 5.33325 32.0002 5.33325Z" fill="#7863FA"/>
                    </svg>
                    p(class="text-[2.0625rem] font-bold mt-[1.56rem]") 100% Satisfaction Guarantee
                    p(class="mt-[1rem]") Trought Our Connected Content Approach, We Unite Communications, Digital Experiences, And Performance Marketing 
                V2Header2Item
                    template(v-slot:icon)
                        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M34.8535 27.76C36.4733 25.4967 37.3443 22.7832 37.3443 20C37.3443 17.2167 36.4733 14.5033 34.8535 12.24C36.3695 11.2052 38.1647 10.6564 40.0002 10.6666C42.4755 10.6666 44.8495 11.65 46.5998 13.4003C48.3502 15.1507 49.3335 17.5246 49.3335 20C49.3335 22.4753 48.3502 24.8493 46.5998 26.5996C44.8495 28.35 42.4755 29.3333 40.0002 29.3333C38.1647 29.3435 36.3695 28.7948 34.8535 27.76ZM14.6668 20C14.6668 18.154 15.2142 16.3495 16.2398 14.8147C17.2653 13.2798 18.723 12.0835 20.4285 11.3771C22.1339 10.6707 24.0105 10.4859 25.821 10.846C27.6315 11.2061 29.2945 12.095 30.5998 13.4003C31.9051 14.7056 32.794 16.3686 33.1542 18.1791C33.5143 19.9896 33.3295 21.8662 32.623 23.5717C31.9166 25.2771 30.7203 26.7348 29.1855 27.7604C27.6506 28.7859 25.8461 29.3333 24.0002 29.3333C21.5248 29.3333 19.1508 28.35 17.4005 26.5996C15.6502 24.8493 14.6668 22.4753 14.6668 20ZM20.0002 20C20.0002 20.7911 20.2348 21.5645 20.6743 22.2223C21.1138 22.8801 21.7385 23.3927 22.4694 23.6955C23.2003 23.9982 24.0046 24.0775 24.7805 23.9231C25.5564 23.7688 26.2692 23.3878 26.8286 22.8284C27.388 22.269 27.769 21.5563 27.9233 20.7803C28.0776 20.0044 27.9984 19.2001 27.6957 18.4692C27.3929 17.7383 26.8802 17.1136 26.2224 16.6741C25.5646 16.2346 24.7913 16 24.0002 16C22.9393 16 21.9219 16.4214 21.1717 17.1715C20.4216 17.9217 20.0002 18.9391 20.0002 20ZM42.6668 45.3333V50.6666H5.3335V45.3333C5.3335 45.3333 5.3335 34.6666 24.0002 34.6666C42.6668 34.6666 42.6668 45.3333 42.6668 45.3333ZM37.3335 45.3333C36.9602 43.2533 33.7868 40 24.0002 40C14.2135 40 10.8535 43.4933 10.6668 45.3333M42.5335 34.6666C44.1679 35.9379 45.5042 37.5516 46.4486 39.3943C47.393 41.237 47.9226 43.2641 48.0002 45.3333V50.6666H58.6668V45.3333C58.6668 45.3333 58.6668 35.6533 42.5068 34.6666H42.5335Z" fill="#7863FA"/>
                        </svg>

                    template(v-slot:title) Expert & Experienced Cleaning Staff
                    template(v-slot:subtitle) Trought Our Connected Content Approach, We Unite Communications, Digital Experiences, And Performance Marketing 

                V2Header2Item
                    template(v-slot:icon)
                        <svg width="54" height="53" viewBox="0 0 54 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M47.6435 35.5365C50.161 29.786 50.161 23.1875 47.6435 17.4635L40.3825 20.7495C41.9725 24.4065 41.9725 28.567 40.409 32.2505L47.6435 35.5365ZM36.063 5.8565C30.3125 3.339 23.714 3.339 17.9635 5.8565L21.2495 13.091C24.933 11.5275 29.0935 11.5275 32.777 13.1175L36.063 5.8565ZM6.3565 17.437C3.839 23.214 3.839 29.786 6.3565 35.563L13.6175 32.2505C12.0275 28.5935 12.0275 24.4065 13.6175 20.723L6.3565 17.437ZM17.9635 47.1435C23.714 49.661 30.3125 49.661 36.063 47.117L32.777 39.8825C29.12 41.4725 24.933 41.4725 21.276 39.909L17.9635 47.1435ZM27 0C30.48 0 33.926 0.685443 37.1411 2.01719C40.3562 3.34894 43.2776 5.30092 45.7383 7.76167C48.1991 10.2224 50.1511 13.1438 51.4828 16.3589C52.8146 19.574 53.5 23.02 53.5 26.5C53.5 33.5282 50.708 40.2686 45.7383 45.2383C40.7686 50.208 34.0282 53 27 53C23.52 53 20.074 52.3146 16.8589 50.9828C13.6438 49.6511 10.7224 47.6991 8.26167 45.2383C3.29196 40.2686 0.5 33.5282 0.5 26.5C0.5 19.4718 3.29196 12.7314 8.26167 7.76167C13.2314 2.79196 19.9718 0 27 0ZM27 15.9C24.1887 15.9 21.4926 17.0168 19.5047 19.0047C17.5168 20.9926 16.4 23.6887 16.4 26.5C16.4 29.3113 17.5168 32.0074 19.5047 33.9953C21.4926 35.9832 24.1887 37.1 27 37.1C29.8113 37.1 32.5074 35.9832 34.4953 33.9953C36.4832 32.0074 37.6 29.3113 37.6 26.5C37.6 23.6887 36.4832 20.9926 34.4953 19.0047C32.5074 17.0168 29.8113 15.9 27 15.9Z" fill="#7863FA"/>
                        </svg>


                    template(v-slot:title) 
                        p Free lifetime
                        p Support
                    template(v-slot:subtitle) Trought Our Connected Content Approach, We Unite Communications, Digital Experiences, And Performance Marketing 



    <!-- header 4 -->
    div(class="flex flex-col w-full  h-[60rem] items-center  py-[20rem]")

       
        
</template>

<script setup lang="ts">
import ArrowIcon from "~icons/ion/arrow-back";
</script>

<style lang="scss">
.header-background {
  background:
    url("images/v2/header2.jpeg"),
    lightgray 50% / cover no-repeat;
  filter: blur(4.400000095367432px);
}
.h2-gradient {
  background: linear-gradient(
    180deg,
    #fff 10.36%,
    rgba(233, 235, 248, 0.26) 100%
  );
}
</style>
