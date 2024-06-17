<template lang="pug">
div(class="w-full h-full  flex flex-col justify-center items-center font-intern  pb-6 gap-y-6  ")
    div(class="w-full h-[15rem] relative flex flex-col items-center justify-center")
        //- nuxt-img(src="images/shop/header.webp" class="absolute z-10 top-0 left-0 w-full h-full object-cover")
        div(class="w-full h-full z-20 absolute top-0 header-background ")
        div(class="w-auto h-auto flex flex-col justify-center items-center z-30 gap-y-6  px-[2rem] py-[3rem] rounded-xl")
            h1(class="text-3xl lg:text-[5rem] text-center text-white") Shop
            p(class="text-center  text-lg lg:text-[2rem] mt-4 text-white") Elevate your cleaning results.

    div(class="w-full h-auto gap-x-[5rem] flex flex-col items-start justify-center px-[6rem]")
        p(class="text-xl mb-4 font-semibold") Categories
        div(class="w-full h-auto gap-x-[5rem] flex items-center justify-start")
            div(class="hover:cursor-pointer w-1/3 h-[15rem] rounded-lg overflow-hidden  relative flex flex-col items-center justify-center px-4 py-6")
                nuxt-img(src="images/shop/detailing-header.webp" class="w-full absolute z-10 top-0 left-0 h-full object-cover")
                div(class="w-full h-full z-20 absolute  top-0 left-0  gradient ")

                p(class="z-50 text-white text-4xl") Car Detailing
            div(class="hover:cursor-pointer w-1/3 h-[15rem] rounded-lg overflow-hidden  relative flex flex-col items-center justify-center px-4 py-6")
                nuxt-img(src="images/shop/gardening-header.webp" class="w-full absolute z-10 top-0 left-0 h-full object-cover")
                div(class="w-full h-full z-20 absolute  top-0 left-0  gardening-gradient ")

                p(class="z-50 text-white text-4xl") Gardening
            div(class="hover:cursor-pointer w-1/3 h-[15rem] rounded-lg overflow-hidden  relative flex flex-col items-center justify-center px-4 py-6")
                nuxt-img(src="images/shop/industrial-header.webp" class="w-full absolute z-10 top-0 left-0 h-full object-cover")
                div(class="w-full h-full z-20 absolute  top-0 left-0  industrial-gradient ")

                p(class="z-50 text-white text-4xl") Industrial

    //- section for most popular procutc list
    
        }
        

</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.gradient {
  background: linear-gradient(180deg, rgba(38, 57, 134, 0) 0%, #263986 70.02%);
}
.gardening-gradient {
  background: linear-gradient(
    180deg,
    rgba(165, 248, 206, 0) 0%,
    rgba(63, 111, 33, 0) 0.01%,
    #3f6f21 70.02%
  );
}
.industrial-gradient {
  background: linear-gradient(
    180deg,
    rgba(165, 248, 206, 0) 0%,
    rgba(63, 111, 33, 0) 0.01%,
    #f2a03d 70.02%
  );
}
</style>
