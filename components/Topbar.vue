<template lang="pug">
div(class="h-[var(--topbar-height)] w-full bg-[#Fbfafa] drop-shadow-md px-8 items-center justify-end flex gap-x-8")
  NuxtLink(class="flex  absolute left-2   items-center justify-start h-full " to="/")
      nuxt-img(alt="logo2"  src="/images/logo.png" class=" w-[3rem] md:w-[7rem]  h-auto aspect-square" format="webp" )
      p Fresh & Tidy
  NotificationIcon(class="w-7 h-7")
  MailIcon(class="w-7 h-7 ")
  UserInfo( @mouseenter="CookiesSettingsStore.setUserDropdown(true)" @mouseleave="CookiesSettingsStore.setUserDropdown(false)" class="w-auto ")
  UserDropdown(v-if="CookiesSettingsStore.isUserDropdown" @mouseenter="CookiesSettingsStore.setUserDropdown(true)" @mouseleave="CookiesSettingsStore.setUserDropdown(false)" class="w-auto mr-auto fixed right-10 top-[4.5rem] ")
</template>

<script setup lang="ts">
import MailIcon from "~icons/octicon/mail-24";
import NotificationIcon from "~icons/clarity/notification-line";

import { useCookiesStore } from "@/stores/CookiesSettings";
const CookiesSettingsStore = useCookiesStore();
</script>

<style lang="scss">
:root {
  --topbar-height: 5rem;
}
</style>
