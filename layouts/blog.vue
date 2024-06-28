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
        div(class=" w-full h-auto min-h-full  shrink-0 lg:mt-0   ")

               div( class="w-full h-full  flex flex-col items-center  justify-start   bg-white  gap-y-8 ")
                    
                    div#blog__header(v-if="getCurrentPageMeta !== 'article'" class="w-full flex flex-col relative py-4 md:py-12 lg:px-24 h-[25rem] md:h-[20rem] text-xl lg:text-3xl xl:text-4xl px-4 md:text-center text-white rounded-3xl bg-[#F5f5f5] items-center justify-center")
                        nuxt-img(src="images/blog/header.webp" class="absolute z-10 top-0 left-0 w-full h-full object-cover object-center ")
                        div(class="w-full h-full z-20 absolute top-0 header-background ")
                        h1(class="tracking-[0.1rem]  text-5xl  leading-[4rem] md:leading-0 font-bold z-40") Fresh&Tidy Blog
                        h2(class="flex gap-x-2 mt-6 flex-wrap items-center text-base 2xl:text-lg justify-center z-40") The latest industry news, interviews, technologies, and resources


                    div(:class="getCurrentPageMeta === 'article'? 'items-center ': 'blx:flex-row items-start '" class="flex flex-col  min-h-[40vw] w-full xl:w-[78rem]  justify-start  px-3 sm:px-[1.5rem] md:px-[3rem] lg:px-[7.4rem] xl:px-0  pt-1 pb-8 gap-x-[2rem] gap-y-6")
                        V2BlogNav( v-if="getCurrentPageMeta !== 'article'")
                        <slot class=""  />
       
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

const isPathLongerThanBlog = computed(() => {
  const pathSegments = route.path.split("/");
  // Check if the path has more than one segment after "blog"
  return pathSegments.length > 2 && pathSegments[2] === "blog*";
});

const getCurrentPageMeta = computed(() => {
  return route.meta.type;
});

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
