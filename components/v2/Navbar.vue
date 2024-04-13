<template lang="pug">
nav(class="flex  w-full px-4 xl:px-[10%] py-4 bg-[#fafafa]  justify-between items-center h-[4.5rem] lg:h-[6rem]  shadow-md lg:shadow-none")
    div(class="hidden lg:flex w-3/4  gap-x-8 items-center font-semibold")
        nuxtLink(to="/")
            nuxt-img(src="images/logoFTTextCrop.png" class="" alt="logo" width="90" height="80")
        
        div(class="flex gap-x-2 items-center ml-6")
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.66 20L13.87 3.81C13.5 2.97 12.93 2.29 12.16 1.77C11.4 1.26 10.55 1 9.61 1C8.77 1 8 1.21 7.3 1.63C6.6 2.05 6.04 2.62 5.63 3.32C5.22 4.02 5 4.8 5 5.64L5.03 9H2.03V14.45C2.65 14.17 3.31 14.03 4 14.03V11.03H9C9.57 11.03 10.04 11.23 10.43 11.62C10.82 12 11 12.47 11 13V20.03H8.91C8.76 20.75 8.44 21.41 7.97 22H13V13C13 12.28 12.8 11.62 12.45 11C12.1 10.38 11.61 9.91 11 9.56C10.42 9.2 9.75 9 9 9H7V5.64C7 4.92 7.25 4.31 7.76 3.79C8.27 3.27 8.89 3 9.61 3C10.14 3 10.63 3.16 11.06 3.46C11.49 3.76 11.81 4.14 12 4.61L18.46 20L16 20.03V22H23V20.03L20.66 20ZM4 18C4.55 18 5 18.45 5 19C5 19.55 4.55 20 4 20C3.45 20 3 19.55 3 19C3 18.45 3.45 18 4 18ZM4 16C2.34 16 1 17.34 1 19C1 20.66 2.34 22 4 22C5.66 22 7 20.66 7 19C7 17.34 5.66 16 4 16Z" fill="#181526"/>
            </svg>
            p Services
        
        div(class="flex gap-x-2 items-center")
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.5 3C11.2239 3 12.8772 3.68482 14.0962 4.90381C15.3152 6.12279 16 7.77609 16 9.5C16 11.11 15.41 12.59 14.44 13.73L14.71 14H15.5L20.5 19L19 20.5L14 15.5V14.71L13.73 14.44C12.59 15.41 11.11 16 9.5 16C7.77609 16 6.12279 15.3152 4.90381 14.0962C3.68482 12.8772 3 11.2239 3 9.5C3 7.77609 3.68482 6.12279 4.90381 4.90381C6.12279 3.68482 7.77609 3 9.5 3ZM9.5 5C7 5 5 7 5 9.5C5 12 7 14 9.5 14C12 14 14 12 14 9.5C14 7 12 5 9.5 5Z" fill="#181526"/>
            </svg>
            p Search Cleaners

        div(class="flex gap-x-2 items-center")
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6C20.58 6 21.05 6.2 21.42 6.59C21.8 7 22 7.45 22 8V19C22 19.55 21.8 20 21.42 20.41C21.05 20.8 20.58 21 20 21H4C3.42 21 2.95 20.8 2.58 20.41C2.2 20 2 19.55 2 19V8C2 7.45 2.2 7 2.58 6.59C2.95 6.2 3.42 6 4 6H8V4C8 3.42 8.2 2.95 8.58 2.58C8.95 2.2 9.42 2 10 2H14C14.58 2 15.05 2.2 15.42 2.58C15.8 2.95 16 3.42 16 4V6H20ZM4 8V19H20V8H4ZM14 6V4H10V6H14Z" fill="#181526"/>
            </svg>
            p Become A cleaner

        div(class="flex gap-x-2 items-center")
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 15H16V17H18M18 11H16V13H18M20 19H12V17H14V15H12V13H14V11H12V9H20M10 7H8V5H10M10 11H8V9H10M10 15H8V13H10M10 19H8V17H10M6 7H4V5H6M6 11H4V9H6M6 15H4V13H6M6 19H4V17H6M12 7V3H2V21H22V7H12Z" fill="#181526"/>
            </svg>
            p Commercial Cleaning
    div(class="w-1/4 hidden lg:flex  gap-x-8 items-center justify-end" )

        
        button(class="flex gap-x-1 " @click="login" v-if="!userStore.getIsLogged")
            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.5 3.5H5.5C4.39 3.5 3.5 4.39 3.5 5.5V9.5H5.5V5.5H19.5V19.5H5.5V15.5H3.5V19.5C3.5 20.0304 3.71071 20.5391 4.08579 20.9142C4.46086 21.2893 4.96957 21.5 5.5 21.5H19.5C20.0304 21.5 20.5391 21.2893 20.9142 20.9142C21.2893 20.5391 21.5 20.0304 21.5 19.5V5.5C21.5 4.39 20.6 3.5 19.5 3.5ZM10.58 16.08L12 17.5L17 12.5L12 7.5L10.58 8.91L13.17 11.5H3.5V13.5H13.17L10.58 16.08Z" fill="#161323"/>
            </svg>
            p.font-semibold Log in

        button(class="flex gap-x-1 " v-if="userStore.getIsLogged" @click="logOut")
            SolarLogoutOutline(class="w-6 h-6")
            p.font-semibold Logout

        button(class="flex px-5 py-2  border-[#4E37E3] border-[1px] text-[#4E37E3] rounded-md font-semibold text-lg" @click="getStarted" v-if="!userStore.getIsLogged") Get Started
        nuxtLink(to="/my-profile"  class="flex px-5 py-2 items-center gap-x-2  border-[#4E37E3] border-[1px] text-[#4E37E3] rounded-md font-semibold text-lg" v-if="userStore.getIsLogged" ) 
            GgProfile(class="w-6 h-6")
            p My Profile

    div(class="flex  items-center w-full lg:hidden ")
        nuxtLink(to="/")
            nuxt-img(src="images/logoFTTextCrop.png" class="" alt="logo" width="70" height="60")
        PepiconsPrintMenuCircle(class="w-10 h-10 ml-auto")
</template>

<script setup lang="ts">
import GgProfile from "~icons/gg/profile";
import SolarLogoutOutline from "~icons/solar/logout-outline";
import PepiconsPrintMenuCircle from "~icons/pepicons-print/menu-circle";

import { useUserStore } from "~/stores/User";

const userStore = useUserStore();

const router = useRouter();

const login = () => {
  router.push("/login");
};

const logOut = async () => {
  await userStore.logout();
  router.push("/");
};

const getStarted = () => {
  router.push("/sign-up");
};
</script>

<style lang="scss"></style>
