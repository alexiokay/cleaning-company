<template lang="pug">
div(class="flex flex-col items-center justify-center  h-[48rem] lg:h-[83vh] relative px-2 lg:px-0 ")
    nuxt-img(src="images/login-bg2.png" format="webp" alt="login-bg" class="absolute top-0 w-full h-full object-cover object-bottom z-20 scale-[1.05]")
    div(class="w-full lg:w-[37.9375rem] h-auto bg-white bg-[rgba(255, 255, 255, 0.70)] rounded-xl z-50 flex flex-col px-[3rem] lg:px-[9.07rem] py-[3.5rem] lg:py-[4rem] backdrop-blur-[4px]")
        h1(class="text-[3rem] text-[#181526] font-bold text-center -mt-4") Log in
        div(class="flex flex-col gap-y-4 mt-10")
            div(clas="flex flex-col  w-full h-full")
                p(class="mb-2 font-bold text-base") Email or Phone Number
                input(v-model="email" type="email" placeholder="Email" class="border-[1px] border-[#64626E]  rounded-md py-2 px-4 w-full h-[2.75rem]")
            div(clas="flex flex-col  w-full h-full")
                p(class="mb-2 font-bold text-base") Password
                input(v-model="password" type="password" placeholder="Password" class="border-[1px] border-[#64626E] rounded-md py-2 px-4 w-full h-[2.75rem]")
            div(class="flex gap-x-3  items-center")
                input(v-model="rememberMe" type="checkbox" class="w-5 h-5 rounded-2xl")
                p(class="text-[1rem] font-normal leading-6") Remember me
                p(class="underline font-bold text-sm ml-auto") Forgot password
            div(class="flex flex-col gap-y-6 mt-4")
                button(@click="login" class="bg-[#4e37e3] text-white rounded-md p-2 ") Login
                div(class="w-full flex gap-x-6 items-center text-xs")
                    hr(class="w-full border-t-[1px] border-gray-300")
                    p OR 
                    hr(class="w-full border-t-[1px] border-gray-300")
                button(@click="login" class=" border-[1px] border-black rounded-md p-2 items-center flex justify-center gap-x-3 ") 
                    MingcuteGoogleLine(class="w-6 h-6")
                    span.font-bold Login with google
                p(class="text-start font-semibold") Don't have an account? 
                    nuxt-link(to="/sign-up" class="underline font-bold") Register
</template>

<script setup lang="ts"></script>

<style lang="scss"></style>
