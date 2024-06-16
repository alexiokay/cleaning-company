<template lang="pug">
LoginBase
    template(v-slot:all)
     
        h1(class="text-[3rem] text-[#181526] font-bold text-center -mt-4") Sign up
        div(class="flex flex-col gap-y-4 mt-10")
            div(class="flex flex-col  w-full h-full")
                p(class="mb-2 font-bold text-base") Name
                input(v-model="username" type="fname" placeholder="Your Name" class="border-[1px] border-[#64626E]  rounded-md py-2 px-4 w-full h-[2.75rem]")
            div(clas="flex flex-col  w-full h-full")
                p(class="mb-2 font-bold text-base") Email
                input(v-model="email" type="email" placeholder="Email" class="border-[1px] border-[#64626E]  rounded-md py-2 px-4 w-full h-[2.75rem]")
            div(clas="flex flex-col  w-full h-full")
                p(class="mb-2 font-bold text-base") Phone Number
                input(v-model="phoneNumber" type="phone" placeholder="Email" class="border-[1px] border-[#64626E]  rounded-md py-2 px-4 w-full h-[2.75rem]")
            div(clas="flex flex-col  w-full h-full")
                p(class="mb-2 font-bold text-base") Password
                input(v-model="password1" type="password" placeholder="Password" class="border-[1px] border-[#64626E] rounded-md py-2 px-4 w-full h-[2.75rem]")
            div(class="flex flex-col gap-y-6 mt-2")
                button(@click="signUp" class="bg-[#4e37e3] text-white rounded-md p-2 ") Create my FREE account
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
import { useUserStore } from "@/stores/User";
import Phone from "~/components/small/Phone.vue";

definePageMeta({
  middleware: "redirect-if-logged",
});

useSeoMeta({
  title: "Sign up | Fresh and Tidy",
  description: "Sign up to Fresh and Tidy",
  keywords: "Sign up, Registration, Register, Fresh and Tidy, Fresh&Tidy",
});

const userStore = useUserStore();

const router = useRouter();
const config = useRuntimeConfig();

const username = ref();
const email = ref();
const phoneNumber = ref();
const password1 = ref();

const moveToLogin = () => {
  router.push("/login");
};

const signUp = async () => {
  await fetch(`${config.public.API_URL}auth/registration/customer`, {
    method: "POST",
    headers: {
      "content-Type": "application/json",
      Host: `${config.FETCH_HOST}`,
    },
    body: JSON.stringify({
      username: `${username.value}`,
      Phone: `${phoneNumber.value}`,
      email: `${email.value}`,
      password1: `${password1.value}`,
      password2: `${password1.value}`,

      //   Last_Name: `${lastName.value}`,
      //   First_Name: `${firstName.value}`,
      //   User_Phone: `${userPhone.value}`,
    }),
  })
    .then((res) => {
      if (!res.ok) {
        // full response object
        console.log(res);
      }
      return res.json();
    })
    .then((data) => {
      if (data.non_field_errors) {
        alert(data.non_field_errors[0]);
        return;
      }
      if (data.email) {
        alert(data.email[0]);
        return;
      }
      console.log(data);
      userStore.setUser(data);

      router.push("/");
      //console.log("saved: ", userStore.getUser);
    })
    .catch((err) => {
      console.log(err);
    });
};
</script>

<style lang="scss"></style>
