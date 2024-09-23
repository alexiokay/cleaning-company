script
<template lang="pug">
  
div(id="default"  style="" class=" h-auto flex flex-col bg-[#fafafa] justify-center items-start w-full  font   overflow-clip font-intern ")
    //div#overlay(class="fixed overlaying top-0 left-0 w-full h-full bg-black opacity-40 z-10 hidden-overlay")
    CookieBanner(v-if="!cookiesStore.isCookiesSet" class="fixed top-0 left-0 z-50" :isOpen="true")


    //- Chat(class="fixed bottom-[1rem] right-[1rem] z-50")
    ClientOnly
      buttonWhatsapp(class="fixed bottom-[1rem] right-[1rem] z-50 ")   
    
  
    .navigation(:class="route.name ==='blog'? '': 'lg:static'" class="sticky  top-0  z-50 w-full  ")
   

      V2Navbar( class="" @toogleSidebar="is_sidebar_open = !is_sidebar_open, is_sidebar_clicked = true")
       
      //- Sidebar(class=" md:hidden" :is_sidebar_open="is_sidebar_open" :is_sidebar_clicked="is_sidebar_clicked" @toogleSidebar="is_sidebar_open = !is_sidebar_open")
      //- BottomBar
          
    
    div(class=" w-full h-auto min-h-full  shrink-0 lg:mt-0   ")
      <slot class="" />
      V2Footer(class="")
div(class="cursor cursor--small")

</template>

<script setup lang="ts">
import IconFb from "~icons/ic/baseline-facebook";
import IconPhone from "~icons/ic/baseline-phone";
import IconEmail from "~icons/material-symbols/alternate-email";
import IconLocation from "~icons/mingcute/location-2-line";

const is_sidebar_open = ref(false);
const is_sidebar_clicked = ref(false);
const isPageRendered = ref(false);

import { useCookiesStore } from "~/stores/CookiesSettings";
import { useUserStore } from "@/stores/User";

const cookiesStore = useCookiesStore();

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

html, body

  height: 100dvh




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
