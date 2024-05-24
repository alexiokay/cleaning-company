<template lang="pug">
LoginBase
    template(v-slot:all)
     
        h1(class="text-[3rem] text-[#181526] font-bold text-center -mt-4") Log in
        div(class="flex flex-col gap-y-4 mt-10")
            div(clas="flex flex-col  w-full h-full")
                p(class="mb-2 font-bold text-base") Email od Phone Number
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

<script setup lang="ts">
import MingcuteGoogleLine from "~icons/mingcute/google-line";
import { useUserStore } from "@/stores/User";

// set middleware
definePageMeta({
  middleware: "redirect-if-logged",
});

const config = useRuntimeConfig();

const userStore = useUserStore();
const router = useRouter();

const email = ref();
const password = ref();
const rememberMe = ref(false);

const login = async () => {
  const body = {
    username: "",
    email: `${email.value}`,
    password: `${password.value}`,
  };

  const url = `${config.public.API_URL}auth/login/`;
  console.log(url);

  await fetch(url, {
    method: "POST",
    headers: {
      "content-Type": "application/json",
      Host: `${config.FETCH_HOST}`,
    },
    body: JSON.stringify(body),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data.non_field_errors) {
        alert(data.non_field_errors[0]);
        return;
      }
      userStore.setUser(data);
      //console.log("saved: ", userStore.getUser);
      router.push("/my-profile");
    })
    .catch((err) => {
      console.log(err);
    });
};

onMounted(() => {
  const loginInput = document.querySelector(
    "input[type='email']"
  ) as HTMLInputElement;
  const passwordInput = document.querySelector(
    "input[type='password']"
  ) as HTMLInputElement;

  loginInput.focus();
  // on enter press
  loginInput.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      // focus password
      passwordInput.focus();
    }
  });

  passwordInput.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      login();
    }
  });
});
</script>

<style lang="scss"></style>
