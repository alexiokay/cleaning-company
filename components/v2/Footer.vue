<template lang="pug">
div(class="w-auto py-[4rem] px-[5%] 2xl:pl-[25vw] shrink-0  h-auto bg-[#181526] text-white gap-y-10 flex flex-col")
    nuxtLink(to="/")
            nuxt-img(src="images/logoFT.png" class="w-[5rem] h-[5rem]" alt="logo" width="90" height="90")
    div(class="flex flex-col md:flex-row gap-y-6 w-auto gap-x-20")
        div(class="flex flex-col w-auto gap-y-2")
            p(class="text-2xl font-semibold") Subscribe Our Newsletter
            p(class="flex flex-col text-[#95939B] text-lg font-medium") Enter your details to get business inspiration, trending
                span solutions, and consulting tips delivered to your inbox
        div(class="flex flex-col gap-y-2")
            input(v-model="email" class="w-auto  h-[3rem] border-[1px] rounded-[7px]  bg-transparent border-[#7863FA] py-2 px-6 focus:outline-none text-white text-lg" placeholder="Enter your email address")
            button(@click="subscribe" class="bg-[#4E37E3] text-white rounded-[7px] py-2 px-6 h-[3rem]  w-auto font-bold text-center") Subscribe
    hr(class="2xl:w-[60rem] h-[1px] border-[#E8E8E9] ")
    
    div(class="flex w-auto justify-start gap-x-[4rem] lg:gap-x-[7rem] items-start shrink-0")
        div(class="flex flex-col w-auto gap-y-2")
            p(class="text-2xl font-semibold text-[#95939B]") Services
            p(class="flex flex-col text-[#E8E8E9] text-lg ") Residential Cleaning 
            p(class="flex flex-col text-[#E8E8E9] text-lg ") House Cleaning 
            p(class="flex flex-col text-[#E8E8E9] text-lg ") Car Cleaning
            p(class="flex flex-col text-[#E8E8E9] text-lg ") Swimming Pool Cleaning
            p(class="flex flex-col text-[#E8E8E9] text-lg ") Garden Cleaning
            p(class="flex flex-col text-[#E8E8E9] text-lg ") Commercial Cleaning
        div(class="flex flex-col gap-y-2 w-auto ")
            p(class="text-2xl font-semibold text-[#95939B]") Company
            p(class="flex flex-col text-[#E8E8E9] text-lg ") About 
            NuxtLink(to="/contact") 
                p(class="flex flex-col text-[#E8E8E9] text-lg ") Contact
            p(class="flex flex-col text-[#E8E8E9] text-lg ") FAQ's
            p(class="flex flex-col text-[#E8E8E9] text-lg ") Privacy Policy
            p(class="flex flex-col text-[#E8E8E9] text-lg ") Terms & Conditions
    
    div(class="flex flex-col lg:flex-row gap-y-6 w-auto justify-start items-center mt-2  gap-x-20")
        div(class="flex flex-col w-auto gap-y-2")
            p(class="text-2xl font-semibold") Follow Us
            p(class="flex flex-col text-[#95939B] text-lg font-medium") Stay connected with us on social media
        div(class="flex gap-x-4")
            a(href="https://www.facebook.com/profile.php?id=61550758577323" target="_blank")
                RiFacebookFill(class="w-6 md:w-8 h-6 md:h-8 text-[#95939B]")
            NuxtLink(to="/")
                IconoirInstagram(class="w-6 md:w-8 h-6 md:h-8 text-[#95939B]")
            NuxtLink(to="/")
                RiTwitterXFill(class="w-6 md:w-8 h-6 md:h-8 text-[#95939B]")
            MdiLinkedin(class="w-6 md:w-8 h-6 md:h-8 text-[#95939B]")
</template>

<script setup lang="ts">
import RiFacebookFill from "~icons/ri/facebook-fill";
import IconoirInstagram from "~icons/iconoir/instagram";
import RiTwitterXFill from "~icons/ri/twitter-x-fill";
import MdiLinkedin from "~icons/mdi/linkedin";

const email = ref<string>("");

const subscribe = async () => {
  //TODO: Send to api and use processing to stop spam and add captcha to stop bots. ask chat gpt fr best soliutong
};
</script>

<style lang="scss" scoped>
::-ms-input-placeholder {
  /* Edge 12 -18 */
  color: #eeecfe;
}

::placeholder {
  color: #eeecfe;
  opacity: 1; /* Firefox */
  font-weight: 400;
}
</style>
