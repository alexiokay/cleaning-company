<template lang="pug">
div(class="w-full h-full flex flex-col justify-center items-center font-intern ")
    div(class="w-full  h-auto overflow-hidden relative flex flex-col items-center py-[10rem]   ")
        nuxt-img.header-img(src="images/v2/headerV2.jpeg" provider="ipx"  format="webp" class="w-full h-full object-cover absolute top-0 left-0 z-10  img-filters  ")
        div(class="w-full h-full z-20 absolute top-0 header-background ")
        div(class="w-[130rem] h-[42.75rem]  flex flex-col items-center  z-20 gap-y-6 py-[3rem]  ")
            //- div(class="flex border-white border-[1px] rounded-full w-auto h-10 text-white items-center justify-center gap-x-4 px-6 py-4")
            //-     p Search 
            //-     ArrowIcon(class="rotate-[180deg]")
            //-     p Book & Pay
            //-     ArrowIcon(class="rotate-[180deg]")
            //-     p Relax

            //- h1(class=" text-[3rem] font-semibold text-white flex flex-col items-center ") Professional Cleaning Services
            //-     span for your Home
           
          
            V2HeaderFormV2(@next="step = step+1" v-show="step === 1")
            V2HeaderFormV2-step2(@next="step = step+1" @goBack="step = step-1" v-show="step === 2")
            V2HeaderFormV2-step3(@book="step = step+1" @goBack="step = step-1" v-show="step === 3")
            V2Inquiry(v-show="step === 4" @done="step = 1")
    <!-- Person, details -->
    div(class="flex w-[95%] relative h-10 z-50")
    
        div(class="absolute -top-32 right-[21rem] w-auto rounded-full bg-white py-3 px-5 z-50") 
            p Hey, Let's talk about details!
        div(class="absolute right-72 -top-24 w-auto")
            
            nuxt-img(src="images/v2/hero.png" width="150px")


    <!-- header 3 -->
    div(class="flex flex-col w-full   items-center  pt-[1rem] pb-[12rem]")
            div(class="flex  w-auto relative flex-col text-[3rem] items-center font-bold")
                //- nuxt-img(src="images/v2/star.png" width="60px" class=" absolute -top-[2rem] -right-[2rem]")
                //- nuxt-img(src="images/v2/star1.png" width="50px" class=" absolute top-[0rem] -right-[6rem]")
                //- nuxt-img(src="images/v2/star.png" width="40px" class=" absolute top-[2rem] -left-[3rem]")
                p(class="w-auto flex gap-x-3") Live Life Doing What  
                    span(class="text-[#7863FA]") You Enjoy, 

                p(class=" w-auto flex ") Not Cleaning

            p(class="mt-8 w-[38rem] font-[0.8125rem] text-center leading-[150%]") For over 1 year, customers have welcomed the trusted cleaning proffesionals from locally owned and operated businesses into their homes.

            div(class="flex mt-28 gap-x-[8.5rem] w-3/5")
                div(class="flex flex-col items-center w-1/3 text-center ")
                    <svg width="65" height="64" viewBox="0 0 65 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M32.5002 46.6667C38.7135 46.6667 43.9668 42.7734 46.1268 37.3334H18.8735C21.0068 42.7734 26.2868 46.6667 32.5002 46.6667ZM23.1668 29.3334C24.2277 29.3334 25.2451 28.9119 25.9953 28.1618C26.7454 27.4117 27.1668 26.3942 27.1668 25.3334C27.1668 24.2725 26.7454 23.2551 25.9953 22.5049C25.2451 21.7548 24.2277 21.3334 23.1668 21.3334C22.106 21.3334 21.0885 21.7548 20.3384 22.5049C19.5883 23.2551 19.1668 24.2725 19.1668 25.3334C19.1668 26.3942 19.5883 27.4117 20.3384 28.1618C21.0885 28.9119 22.106 29.3334 23.1668 29.3334ZM41.8335 29.3334C42.8944 29.3334 43.9118 28.9119 44.6619 28.1618C45.4121 27.4117 45.8335 26.3942 45.8335 25.3334C45.8335 24.2725 45.4121 23.2551 44.6619 22.5049C43.9118 21.7548 42.8944 21.3334 41.8335 21.3334C40.7726 21.3334 39.7552 21.7548 39.0051 22.5049C38.2549 23.2551 37.8335 24.2725 37.8335 25.3334C37.8335 26.3942 38.2549 27.4117 39.0051 28.1618C39.7552 28.9119 40.7726 29.3334 41.8335 29.3334ZM32.5002 53.3334C26.8422 53.3334 21.416 51.0858 17.4152 47.085C13.4144 43.0842 11.1668 37.658 11.1668 32C11.1668 26.3421 13.4144 20.9159 17.4152 16.9151C21.416 12.9143 26.8422 10.6667 32.5002 10.6667C38.1581 10.6667 43.5843 12.9143 47.5851 16.9151C51.5859 20.9159 53.8335 26.3421 53.8335 32C53.8335 37.658 51.5859 43.0842 47.5851 47.085C43.5843 51.0858 38.1581 53.3334 32.5002 53.3334ZM32.5002 5.33337C17.7535 5.33337 5.8335 17.3334 5.8335 32C5.8335 39.0725 8.64301 45.8553 13.644 50.8562C16.1202 53.3325 19.0599 55.2967 22.2953 56.6368C25.5306 57.977 28.9982 58.6667 32.5002 58.6667C39.5726 58.6667 46.3554 55.8572 51.3563 50.8562C56.3573 45.8553 59.1668 39.0725 59.1668 32C59.1668 28.4981 58.4771 25.0305 57.137 21.7951C55.7968 18.5598 53.8326 15.6201 51.3563 13.1439C48.8801 10.6676 45.9404 8.70338 42.7051 7.36325C39.4697 6.02313 36.0021 5.33337 32.5002 5.33337Z" fill="#181526"/>
                    </svg>

                    p(class="text-[2.0625rem] font-bold mt-[1.56rem]") 100% Satisfaction Guarantee
                    p(class="mt-[1rem] px-[5.1rem]") Trought Our Connected Content Approach, We Unite Communications, Digital Experiences, And Performance Marketing 
                V2Header2Item
                    template(v-slot:icon)
                        <svg width="65" height="64" viewBox="0 0 65 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M35.3535 27.76C36.9733 25.4967 37.8443 22.7832 37.8443 20C37.8443 17.2167 36.9733 14.5033 35.3535 12.24C36.8695 11.2052 38.6647 10.6564 40.5002 10.6666C42.9755 10.6666 45.3495 11.65 47.0998 13.4003C48.8502 15.1507 49.8335 17.5246 49.8335 20C49.8335 22.4753 48.8502 24.8493 47.0998 26.5996C45.3495 28.35 42.9755 29.3333 40.5002 29.3333C38.6647 29.3435 36.8695 28.7948 35.3535 27.76ZM15.1668 20C15.1668 18.154 15.7142 16.3495 16.7398 14.8147C17.7653 13.2798 19.223 12.0835 20.9285 11.3771C22.6339 10.6707 24.5105 10.4859 26.321 10.846C28.1315 11.2061 29.7945 12.095 31.0998 13.4003C32.4051 14.7056 33.294 16.3686 33.6542 18.1791C34.0143 19.9896 33.8295 21.8662 33.123 23.5717C32.4166 25.2771 31.2203 26.7348 29.6855 27.7604C28.1506 28.7859 26.3461 29.3333 24.5002 29.3333C22.0248 29.3333 19.6508 28.35 17.9005 26.5996C16.1502 24.8493 15.1668 22.4753 15.1668 20ZM20.5002 20C20.5002 20.7911 20.7348 21.5645 21.1743 22.2223C21.6138 22.8801 22.2385 23.3927 22.9694 23.6955C23.7003 23.9982 24.5046 24.0775 25.2805 23.9231C26.0564 23.7688 26.7692 23.3878 27.3286 22.8284C27.888 22.269 28.269 21.5563 28.4233 20.7803C28.5776 20.0044 28.4984 19.2001 28.1957 18.4692C27.8929 17.7383 27.3802 17.1136 26.7224 16.6741C26.0646 16.2346 25.2913 16 24.5002 16C23.4393 16 22.4219 16.4214 21.6717 17.1715C20.9216 17.9217 20.5002 18.9391 20.5002 20ZM43.1668 45.3333V50.6666H5.8335V45.3333C5.8335 45.3333 5.8335 34.6666 24.5002 34.6666C43.1668 34.6666 43.1668 45.3333 43.1668 45.3333ZM37.8335 45.3333C37.4602 43.2533 34.2868 40 24.5002 40C14.7135 40 11.3535 43.4933 11.1668 45.3333M43.0335 34.6666C44.6679 35.9379 46.0042 37.5516 46.9486 39.3943C47.893 41.237 48.4226 43.2641 48.5002 45.3333V50.6666H59.1668V45.3333C59.1668 45.3333 59.1668 35.6533 43.0068 34.6666H43.0335Z" fill="#181526"/>
                        </svg>


                    template(v-slot:title) Expert & Experienced Cleaning Staff
                    template(v-slot:subtitle) Trought Our Connected Content Approach, We Unite Communications, Digital Experiences, And Performance Marketing 

                V2Header2Item
                    template(v-slot:icon)
                        <svg width="54" height="53" viewBox="0 0 54 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M47.6435 35.5365C50.161 29.786 50.161 23.1875 47.6435 17.4635L40.3825 20.7495C41.9725 24.4065 41.9725 28.567 40.409 32.2505L47.6435 35.5365ZM36.063 5.8565C30.3125 3.339 23.714 3.339 17.9635 5.8565L21.2495 13.091C24.933 11.5275 29.0935 11.5275 32.777 13.1175L36.063 5.8565ZM6.3565 17.437C3.839 23.214 3.839 29.786 6.3565 35.563L13.6175 32.2505C12.0275 28.5935 12.0275 24.4065 13.6175 20.723L6.3565 17.437ZM17.9635 47.1435C23.714 49.661 30.3125 49.661 36.063 47.117L32.777 39.8825C29.12 41.4725 24.933 41.4725 21.276 39.909L17.9635 47.1435ZM27 0C30.48 0 33.926 0.685443 37.1411 2.01719C40.3562 3.34894 43.2776 5.30092 45.7383 7.76167C48.1991 10.2224 50.1511 13.1438 51.4828 16.3589C52.8146 19.574 53.5 23.02 53.5 26.5C53.5 33.5282 50.708 40.2686 45.7383 45.2383C40.7686 50.208 34.0282 53 27 53C23.52 53 20.074 52.3146 16.8589 50.9828C13.6438 49.6511 10.7224 47.6991 8.26167 45.2383C3.29196 40.2686 0.5 33.5282 0.5 26.5C0.5 19.4718 3.29196 12.7314 8.26167 7.76167C13.2314 2.79196 19.9718 0 27 0ZM27 15.9C24.1887 15.9 21.4926 17.0168 19.5047 19.0047C17.5168 20.9926 16.4 23.6887 16.4 26.5C16.4 29.3113 17.5168 32.0074 19.5047 33.9953C21.4926 35.9832 24.1887 37.1 27 37.1C29.8113 37.1 32.5074 35.9832 34.4953 33.9953C36.4832 32.0074 37.6 29.3113 37.6 26.5C37.6 23.6887 36.4832 20.9926 34.4953 19.0047C32.5074 17.0168 29.8113 15.9 27 15.9Z" fill="#181526"/>
                        </svg>



                    template(v-slot:title) 
                        p Free lifetime
                        p Support
                    template(v-slot:subtitle) Trought Our Connected Content Approach, We Unite Communications, Digital Experiences, And Performance Marketing 
                
           
            div(class="flex flex-col gap-y-[2rem] mt-[5rem] items-center")
                p(class="text-[1rem] font-bold tracking-wide") Find Your Local Maid Brigade
                button(class="w-[12rem]  gap-y-1 gap-x-2 bg-[#4E37E3] font-bold border-[1px] rounded-[0.4375rem] items-center text-white justify-center flex  px-[1.5rem] py-[1rem] text-center text-semibold ")
                    <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.625 2.25C8.91793 2.25 10.1579 2.76361 11.0721 3.67785C11.9864 4.59209 12.5 5.83207 12.5 7.125C12.5 8.3325 12.0575 9.4425 11.33 10.2975L11.5325 10.5H12.125L15.875 14.25L14.75 15.375L11 11.625V11.0325L10.7975 10.83C9.9425 11.5575 8.8325 12 7.625 12C6.33207 12 5.09209 11.4864 4.17785 10.5721C3.26361 9.65791 2.75 8.41793 2.75 7.125C2.75 5.83207 3.26361 4.59209 4.17785 3.67785C5.09209 2.76361 6.33207 2.25 7.625 2.25ZM7.625 3.75C5.75 3.75 4.25 5.25 4.25 7.125C4.25 9 5.75 10.5 7.625 10.5C9.5 10.5 11 9 11 7.125C11 5.25 9.5 3.75 7.625 3.75Z" fill="#E8E8E9"/>
                    </svg>

                    p  Learn More


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
                  
                

   

    <!-- header 4 -->
    div(class="flex flex-col w-full  h-[60rem] items-center  py-[20rem]")

       
        
</template>

<script setup lang="ts">
import ArrowIcon from "~icons/ion/arrow-back";

const step = ref(1);
</script>

<style lang="scss">
.header-background {
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(151, 71, 255, 0.4) 0%,
    rgba(36, 25, 105, 0.4) 100%
  );
}
.h2-gradient {
  background: linear-gradient(
    180deg,
    #fff 10.36%,
    rgba(233, 235, 248, 0.26) 100%
  );
}

.img-filters {
  object-position: 35% 45%;
  transform: scale(1.1);
  filter: brightness(50%) blur(2px);
}
</style>
