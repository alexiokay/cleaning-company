<template lang="pug">
div#login-page(class="relative flex flex-col md:flex-row w-full h-full px-2 md:px-12 mt-9 items-center md:items-start gap-x-28 justify-center pt-2  pb-[20rem]" )
    LoginForm(@signIn="signIn"  @emailInput="email = $event" @loginInput="password = $event")
    div(class='w-full md:w-[29rem] h-auto')
        div(class="text-center md:w-[25rem] h-auto flex items-start justify-start flex-col mt-6")
            h2(class="mb-7 text-3xl font-itim ") Dont have an account?
            NuxtLink#register(to="/registration" class="w-full h-10 md:h-10 hover:bg-blue-600 smooth-color hover:text-white  rounded-full bg-white text-blue-600 border-[1px] border-blue-600 text-sm  flex items-center justify-center")
                p Zarejestruj się

            h3(class="mb-7 text-xl text-gray-800 text-start mt-8 font-itim ") Why is it worth to have an account in pinkiwoow?
            LoginWhy
        
            
    ButtonBack
                

        
    
        
</template>

<script setup lang="ts">
import { useUserStore } from "@/stores/User";
const userStore = useUserStore();

definePageMeta({
  middleware: "redirect-if-logged",
  NavbarColor: "#ffffff",
});

const email = ref("");
const password = ref("");
const config = useRuntimeConfig();
const router = useRouter();

const signIn = () => {
  const data = {
    username: "",
    email: `${email.value}`,
    password: `${password.value}`,
  };
  fetch(`${config.API_URL}auth/login/`, {
    method: "POST",
    headers: {
      "content-Type": "application/json",
      Host: "localhost",
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      if (res.status === 200) {
        res.json().then((data) => {
          userStore.setToken(data.key);
          userStore.setUsername(data.user.username);
          userStore.setEmail(data.user.email);
          userStore.setIsLogged(true);
          //userStore.setFavourites(data.user.favourites);
          //userStore.setShippings(data.user.shippings);
          console.log(data.user.favourites);
          console.log("data: ");
          console.log(data);
          router.push("/");
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
</script>

<style lang="sass"></style>
