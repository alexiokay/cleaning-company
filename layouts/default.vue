script
<template lang="pug">
div(id="default" style="" class=" h-auto flex flex-col bg-[#Ffffff] justify-center items-start w-full  font   overflow-clip ")
    div#overlay(class="fixed overlaying top-0 left-0 w-full h-full bg-black opacity-40 z-10 hidden-overlay")
    CookieBanner(v-if="!necessaryStore.isCookiesSet" class="fixed top-0 left-0 z-50" :isOpen="true")
    div#localization(class="fixed top-2 left-2 md:top-[3.5rem] md:left-[2rem] px-5 py-2 z-40 rounded-full bg-[#Fcf2ec] text-[#124944]  text-2xl items-center justify-center flex font-semibold hover:cursor-pointer") 
      IconLocation(class="mr-2")
      p Venlo

    Chat(class="fixed bottom-[1rem] right-[1rem] z-40")
    
  
    .navigation(class=" top-0 z-30 w-full  ")
      div(class=" hidden w-full h-[4rem] bg-white shadow-sm fixed top-0 z-10")
      Sidebar(class="z-50 ")
      Navbar
      
          
    
    div(class=" w-full h-auto min-h-screen  lg:mt-0   ")
      <slot class="" />
      Footer(class="md:mt-[10rem]")
div(class="cursor cursor--small")

</template>

<script setup lang="ts">
import IconFb from "~icons/ic/baseline-facebook";
import IconPhone from "~icons/ic/baseline-phone";
import IconEmail from "~icons/material-symbols/alternate-email";
import IconLocation from "~icons/mingcute/location-2-line";

const isPageRendered = ref(false);

import { useNecessaryStore } from "~/stores/Necessary";
import { useUserStore } from "@/stores/User";

const necessaryStore = useNecessaryStore();

const userStore = useUserStore();
const router = useRouter();
const route = useRoute();

onMounted(() => {});
</script>

<style lang="sass">

*
    scroll-snap-type: y mandatory

body
    overflow-x: hidden


.app-container

    z-index: 10
    display: flex
    flex-direction: column
    justify-content: center



.panel
    margin-top: 60px
    text-align: center
    margin: 0 auto
    scroll-snap-align: center

    width: 90%
    p.title

        font-style: normal
        font-size: 5vh
        line-height: 0%
        align-self: center
        letter-spacing: 0.18em





.cursor
  position: fixed
  left: 0
  top: 0
  pointer-events: none

.cursor--small
  width: 5px
  height: 5px
  left: -2.5px
  top: -2.5px
  border-radius: 50%
  z-index: 11000
  background: var(--color-text)

.cursor--canvas
  width: 100vw
  height: 100vh
  z-index: 12000

.hidden-overlay
  visibility: hidden
  opacity: 0

.visible-overlay
  visibility: visible
  opacity: 0.4
</style>
