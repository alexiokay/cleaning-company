<template lang="pug">
div(class="w-full h-full  flex flex-col justify-center items-center font-intern ")
    div(class="w-full bg-[#fafafa] h-auto overflow-hidden relative flex flex-col items-center py-[3rem] lg:py-[7.1rem]   ")
        nuxt-img.header-img(src="images/become-cleaner/young-woman.png" provider="ipx"   format="webp" class="object-cover h-[95%] absolute bottom-0 left-2/4 z-40  ")
   
        div(class="lg:px-0 2xl:w-[130rem] lg:h-auto  flex flex-col ml-[40%] z-30 gap-y-6 pb-[3rem] lg:pb-0  ")
            div(class="w-full lg:w-[37.9375rem] h-full bg-white bg-[rgba(255, 255, 255, 0.70)] rounded-3xl z-50 flex flex-col px-[3rem] lg:px-[9.07rem] py-[3.5rem] lg:py-[2rem] backdrop-blur-[4px]")
                div(class="w-full lg:w-[37.9375rem] lg:-mx-[9rem] text-center flex flex-col gap-y-4")
                    h2(class="text-[3rem] text-center  ") We Are A Team.
                    h1(class="text-[3rem] text-[#181526] font-bold -mt-4") Come Join Us
                div(class="flex flex-col gap-y-4 mt-10")
                    div(clas="flex flex-col  w-full h-full")
                        p(class="mb-2 font-bold text-base") Name
                        input(v-model="name" type="name" placeholder="Enter Your Name" class="border-[1px] border-[#64626E]  rounded-md py-2 px-4 w-full h-[2.75rem]")
                    div(clas="flex flex-col  w-full h-full")
                        p(class="mb-2 font-bold text-base") Email or Phone Number
                        input(v-model="email" type="email" placeholder="Enter Your Email or Phone Number" class="border-[1px] border-[#64626E]  rounded-md py-2 px-4 w-full h-[2.75rem]")
                    div(clas="flex flex-col  w-full h-full")
                        p(class="mb-2 font-bold text-base") Password
                        input(v-model="password" type="password" placeholder="At least 8 characters" class="border-[1px] border-[#64626E] rounded-md py-2 px-4 w-full h-[2.75rem]")
                   
                    div(class="flex flex-col gap-y-6 mt-4")
                        button(@click="login" class="bg-[#4e37e3] text-white rounded-md p-2 ") Create my FREE account
                        div(class="w-full flex gap-x-6 items-center text-xs")
                            hr(class="w-full border-t-[1px] border-gray-300")
                            p OR 
                            hr(class="w-full border-t-[1px] border-gray-300")
                        button(@click="login" class=" border-[1px] border-black rounded-md p-2 items-center flex justify-center gap-x-3 ") 
                            MingcuteGoogleLine(class="w-6 h-6")
                            span.font-bold Sign up with Google

                        p(class="text-start font-semibold lg:w-[37.9375rem] lg:-mx-[4rem]") By signing up, I agree to Fresh and Tidy’s 
                            nuxt-link(to="/terms-and-conditions" class="underline font-bold") Terms&Conditions.
                        p(class="text-center font-semibold w-full") Don't have an account? 
                            nuxt-link(to="/sign-up" class="underline font-bold") Register
    V2Header3BecomeCleaner
                

</template>

<script setup lang="ts">
import MingcuteGoogleLine from "~icons/mingcute/google-line";
</script>

<style lang="scss"></style>
