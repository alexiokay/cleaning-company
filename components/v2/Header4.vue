<template lang="pug">
div(class="w-full flex flex-col gap-y-4 px-[5%] pt-[4.75rem] text-[#181526] ")
    h2(class="text-center text-[2.5rem] font-semibold ") How it works?
    p.text-center.flex.flex-col Our inteligent matching algorithm will connect you with the best-suited
        span.text-center cleaning services in your area.
    div(class="flex flex-col md:flex-row flex-wrap gap-x-4 gap-y-4 mt-[2rem] justify-center w-full  lg:w-[80%] 4xl:px-[6rem] mx-auto")
        div(class="flex flex-col image-1 gap-y-[1rem]  w-full shrink-0 md:w-[45%] px-[10.56rem] pt-[4.56rem] pb-[7.75rem]  text-center  rounded-[1rem] aspect-[16/14] " )
            h3(class="text-[1.75rem] font-bold") We will find the best 
                span cleaning team for you.
            p.flex.flex-col First, tell us what service 
                span you are looking for.
            button(class="bg-[#4e37e3] text-white px-[1.5rem] mt-auto rounded-xl py-[1rem] text-[1.1875rem] mx-auto w-auto font-bold flex items-center gap-x-2 justify-center") 
                <svg width="20" height="20" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 14.6437L5.0625 12.5812L5.04 12.5662C4.605 12.1237 4.605 11.4112 5.04 10.9762L8.595 7.42125L11.775 10.6012L8.22 14.1562C7.7925 14.5912 7.095 14.5912 6.6525 14.1712L6.18 14.6437H3ZM11.9325 4.07625C12.375 3.64125 13.0875 3.64125 13.5225 4.07625L15.12 5.66625C15.555 6.10875 15.555 6.82125 15.12 7.26375L12.645 9.73125L9.465 6.55125L11.9325 4.07625Z" fill="white"/>
                </svg>
                p Fill in The Form
        div(class="flex flex-col image-2 gap-y-[1rem]  w-full md:w-[45%] px-[10.56rem] pt-[4.56rem] pb-[7.75rem]  text-center  rounded-[1rem] aspect-[16/14] " )
            h3(class="text-[1.75rem] font-bold") Personalized list
                span of service providers
            p.flex.flex-col After creating an account,
                span your smart assistant will prepare
                span a detailed list of cleaning teams for you.
        div(class="flex flex-col image-3 gap-y-[1rem]  w-full md:w-[45%] px-[10.56rem] pt-[4.56rem] pb-[7.75rem]  text-center  rounded-[1rem] aspect-[16/14] " )
            h3(class="text-[1.75rem] font-bold") You can relax now
            p.flex.flex-col Sit back and choose
                span the right contractors.
                span AND THAT'S ALL!
        div(class="flex flex-col image-4 gap-y-[1rem]  w-full md:w-[45%] px-[10.56rem] pt-[4.56rem] pb-[7.75rem]  text-center  rounded-[1rem] aspect-[16/14] " )
            h3(class="text-[1.75rem] font-bold") We'll let you know!
            p.flex.flex-col The cleaning team will call you back
                span with an attractive offer.
</template>

<script setup lang="ts"></script>

<style lang="scss">
.image-1 {
  background:
    url("/images/how-it-works/img1.jpg"),
    lightgray 50% / cover no-repeat;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center -40px;
}
.image-2 {
  background:
    url("/images/how-it-works/img2.jpg"),
    lightgray 50% / cover no-repeat;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center -40px;
}
.image-3 {
  background:
    url("/images/how-it-works/img3.jpg"),
    lightgray 50% / cover no-repeat;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center -40px;
}
.image-4 {
  background:
    url("/images/how-it-works/img4.jpg"),
    lightgray 50% / cover no-repeat;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center -40px;
}
</style>
