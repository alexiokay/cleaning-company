<template lang="pug">
div(class="w-full min-h-screen flex flex-col bg-fixed bg-top-0   bg-no-repeat bg-cover  bg-right md:bg-center  " style="background-image:url('https://uploads-ssl.webflow.com/60ff934f6ded2d17563ab9dd/63c6de6ee5753441a08d5616_01.17.23-CLEAN-OFFICE-BLOG.jpg');")
    div.pricing__header(class=" w-full h-[13rem] md:h-[18rem] flex justify-center items-center backdrop-brightness-50 px-[30%]  ")
        div(class="text-white gap-y-4 flex flex-col items-start text-start w-full  font-flamabook")
            p(class="text-5xl font-bold ") Pricing
            p Home / 
                span(class="text-blue-400") Pricing
    div(class="min-h-screen bg-white w-full flex flex-col items-center gap-y-4 py-12  px-4 lg:px-[20%]")
        h1(class="text-3xl text-center lg:text-4xl font-bold ") Deep clean / Move Out Cleaning
        div.pricing__content(class="flex w-full mt-6 gap-x-8 gap-y-12 bg-white items-center md:justify-center justify-around mx-auto flex-wrap md:flex-nowrap")
            div.pricing_content_tab(class="w-full md:w-1/4 border-[1px] h-auto shadow-sm bg-white items-center flex flex-col pb-8" v-for="i in 4")
                div(class="w-full h-[8rem] bg-[#Fcf2ec] flex items-center justify-center")
                    p(class="text-2xl font-bold") 1 Bedroom
                div.pricing_content_tab_request(class="w-full h-auto py-4 pb-8 gap-y-2 items-center justify-center flex flex-col")
                    p(class="text-sm -mb-2 ") Starting at
                    p(class="text-4xl font-bold") Request
                    p(class="font-medium text-gray-600  ") please inquire first
            
                div.pricing_content_tab_item(class="py-4 text-center h-auto bg-slate-100 border-y-[1px] w-full" )
                    p dsds
                div.pricing_content_tab_item(class="py-4 text-center h-auto border-b-[1px] w-full" v-for="i in 7")
                    p dsds
                button.pricing_content_tab_button(class="w-4/5 mx-auto h-[3rem] bg-blue-400 text-white font-semibold text-lg rounded-md hover:bg-blue-500 mt-8") Get a Quote
    
</template>

<script setup lang="ts">
definePageMeta({
  NavbarColor: "#ffffff",
});
</script>

<style lang="scss"></style>
