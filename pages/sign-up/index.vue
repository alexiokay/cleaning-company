<template lang="pug">
LoginBase
    template(v-slot:all)
     
        h1(class="text-[3rem] text-[#181526] font-bold text-center -mt-4") Sign up
        form(class="flex flex-col gap-y-4 mt-10")
            div(clas="flex flex-col  w-full h-full")
                p(class="mb-2 font-bold text-base") Name
                input(v-model="name" type="name" placeholder="Email" class="border-[1px] border-[#64626E]  rounded-md py-2 px-4 w-full h-[2.75rem]")
            div(clas="flex flex-col  w-full h-full")
                p(class="mb-2 font-bold text-base") Email od Phone Number
                input(v-model="email" type="email" placeholder="Email" class="border-[1px] border-[#64626E]  rounded-md py-2 px-4 w-full h-[2.75rem]")
            div(clas="flex flex-col  w-full h-full")
                p(class="mb-2 font-bold text-base") Password
                input(v-model="password" type="password" placeholder="Password" class="border-[1px] border-[#64626E] rounded-md py-2 px-4 w-full h-[2.75rem]")
            div(class="flex flex-col gap-y-6 mt-2")
                button(@click="login" class="bg-[#4e37e3] text-white rounded-md p-2 ") Create my FREE account
                div(class="w-full flex gap-x-6 items-center text-xs")
                    hr(class="w-full border-t-[1px] border-gray-300")
                    p OR 
                    hr(class="w-full border-t-[1px] border-gray-300")
                button(@click="login" class=" border-[1px] border-black rounded-md p-2 items-center flex justify-center gap-x-3 ") 
                    MingcuteGoogleLine(class="w-6 h-6")
                    span.font-bold Sign up with google
                p(class="text-start font-semibold lg:w-[calc(100%+10rem)]  lg:-translate-x-12 ") By signing up, I agree to Fresh and Tidy’s Terms&Conditions.
                p(class="text-center font-semibold ") Already have an account?
                    nuxt-link(to="/login" class="underline font-bold")  Log in.
        
   
</template>

<script setup lang="ts">
import MingcuteGoogleLine from "~icons/mingcute/google-line";
const router = useRouter();

const moveToLogin = () => {
  router.push("/login");
};
</script>

<style lang="scss"></style>
