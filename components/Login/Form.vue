<template lang="pug">
form(class="bg-white w-full md:w-2/5 h-auto  shadow-[0px_0px_2px_1px_rgb(0,0,0,0.15)] rounded-xl px-8 pt-6 pb-3 mb-4 ")
        h1(class="mb-7 text-3xl  font-itim -ml-2") Login
        input#username(@keyup.enter="$emit('signIn')" class="focus:outline-none focus:shadow-outline shadow appearance-none border rounded-full  w-full py-2 px-3 text-gray-700 leading-tight" type="email", v-model="email" placeholder="E-mail or login")
        p(class="text-xs text-red-700 mt-2 mb-2") Podaj login lub email
        input#password.shadow.appearance-none.border.border-red-500.rounded-full.w-full.py-2.px-3.text-gray-700.leading-tight(@keyup.enter="$emit('signIn')" class="mt-3 focus:outline-none focus:shadow-outline" type="password", v-model="password" placeholder="Password")
        p(class="text-xs text-red-700 mt-2") Wpisz hasło. Pole nie może być puste
        p(class="text-xs text-red-700 mt-1") Sprawdź, czy adres e-mail i hasło są poprawne
            div(class="flex items-center justify-between mt-4")
            div(class="flex items-center space-x-2 text-black")
                input#remember-me(type="checkbox" class="hover:cursor-pointer")
                label(for="remember-me") Remember me
            NuxtLink(to="/forgot-password" class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 hover:cursor:pointer") Forgot Password?
        button.bg-blue-500(@click="$emit('signIn')" class="hover:bg-blue-700 mt-4 text-white font-base text-sm py-[0.6rem] w-full px-4 rounded-full focus:outline-none focus:shadow-outline" type="button")
            p Sign In
        div(class="w-min mx-auto")
          GoogleSignInButton(@success="handleSignInSuccess").mt-3
      
</template>

<script setup lang="ts">
import { watch, ref } from "vue";
import type { CredentialResponse } from "vue3-google-signin";
import { GoogleSignInButton, decodeCredential } from "vue3-google-signin";
import { useUserStore } from "@/stores/User";

const userStore = useUserStore();
const config = useRuntimeConfig();
const router = useRouter();

const handleSignInSuccess = (response: CredentialResponse) => {
  //console.log(response);
  const { credential } = response;
  const decodedCredential = decodeCredential(credential);
  //console.log("User:", decodedCredential);

  sendTokenToBackend(response.credential, response.clientId);
};

const sendTokenToBackend = async (token: string, clientId: string) => {
  const data = {
    access_token: clientId,
    id_token: token,
  };

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(data),
  };

  const response = fetch(config.public.API_URL + "auth/google/", options).then(
    (res) => {
      if (res.status === 200) {
        res.json().then(async (data) => {
          console.log(data);
          await userStore.setUser(data.user, data.key);
          router.push({ path: "/account" });
        });
      } else {
        console.log("error");
      }
    }
  );
};

const email = ref("");
const password = ref("");
const emits = defineEmits(["signIn", "emailInput", "loginInput"]);

watch(email, (value) => {
  emits("emailInput", value);
});

watch(password, (value) => {
  emits("loginInput", value);
});
</script>

<style lang="sass"></style>
