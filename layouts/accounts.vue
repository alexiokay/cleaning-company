<template lang="pug">
div(id="accounts" style="" class=" h-auto flex flex-row bg-[#Fbfafa] justify-center items-start w-full  ")
    div#overlay(class="absolute overlaying top-0 left-0 w-full h-screen bg-black opacity-40 z-10 hidden-overlay")
    Topbar.topbar( class="hidden lg:flex w-full fixed top-0 left-0 h-[--topbar-height] bg-white z-50")
    .navigation(v-if="userStore.isLogged" class="  top-0 z-40")
     
      
    //Sidebar(class=" md:hidden" :is_sidebar_open="is_sidebar_open" :is_sidebar_clicked="is_sidebar_clicked" @toogleSidebar="is_sidebar_open = !is_sidebar_open")
    Sidebar2(class=" " :is_sidebar_open="true")

    div( :class="isNavbarOff === true? '': 'mt-[3rem] lg:mt-[4rem]', route.path!=='/login'  && route.path!=='/signup/carrier' && route.path!=='/signup/arrow' ? 'lg:px-8 py-7 lg:ml-[23rem]' : ''" class=" w-full  h-auto min-h-[calc(100vh-4rem)]  " )
      <slot class="" />
      <!-- Footer(v-if="route.path!=='/login' && route.path!=='/signup'" class="mt-12") -->
div(class="cursor cursor--small")

</template>

<script setup lang="ts">
import IconFb from "~icons/ic/baseline-facebook";
import IconPhone from "~icons/ic/baseline-phone";
import IconEmail from "~icons/material-symbols/alternate-email";
import { onBeforeMount } from "vue";
import { useUserStore } from "@/stores/User";

const userStore = useUserStore();
const router = useRouter();
const route = useRoute();

const is_sidebar_open = ref(false);
const is_sidebar_clicked = ref(false);

const isNavbarOff = computed(() => {
  return route.meta.isNavbarOff;
});
const sendEmail = () => {
  document.location = "mailto:graphicdesigner@gmail.com";
};

onMounted(() => {});
</script>

<style lang="sass" scoped>

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
