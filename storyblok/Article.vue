<template lang="pug">
div(class="w-auto h-auto flex flex-col items-center justify-center lg:pt-[2rem]")
    div(v-editable="blok" class="w-full items-center justify-center flex flex-col gap-y-6 text-start")
        div(class="flex flex-col items-start justify-center w-full h-auto  lg:h-[19rem] lg:bg-[#764abc] relative py-4 lg:py-[4rem]  px-4 lg:px-[3.5rem] lg:text-white gap-y-6  rounded-lg")
         
          p(class="container mx-auto  text-[1.4rem] lg:text-5xl z-30  font-semibold lg:font-bold leading-7 lg:leading-none") {{ blok.title }}
          div(class="flex  gap-x-2 w-full items-center")
            nuxt-img(:src="'https:' + blok.author[0].avatar" class="rounded-full h-[3.5rem] w-[3.5rem]")
            div(class="flex-col h-full flex justify-start items-start gap-y-1") 
              p(class="font-semibold") {{blok.author[0].name}}
              p(class="text-slate-500 text-sm") {{ blokinfo.published_at.split('T')[0] }} &#8226; {{ readTime() }} min read
         
          //- div(class="w-full h-full z-20 absolute top-0 header-background ")
          
        //- div(class="container mx-auto mb-12 text-3xl text-start leading-[2.9rem] w-4/5") {{ blok.description }}
    
    div(class="flex flex-col-reverse lg:flex-row w-full justify-between gap-x-[2rem] px-4  gap-y-8  lg:mt-[5rem] ")
      div(class="w-full min-w-[16rem] xl:w-[17rem]  flex flex-col gap-y-6")
        div(class="flex flex-col gap-y-2")
          p See our services:
          div(class="w-[100%] aspect-[13/16]  rounded-[24px] border-[9px] relative overflow-hidden text-white " :style="{'border-color': serviceWindow?.color}")
                //- nuxt-img( class="w-full h-full object-cover" alt="step.title" title="step.title" format="webp")
                nuxt-img(:src="serviceWindow?.image" width="500" height="500" format="webp" alt="logo" class=" w-full h-full object-cover")
                div(class="w-full h-full  shrink-0 absolute top-0 left-0 flex flex-col px-8 py-6 gap-y-4 justify-end" :style="{'background': serviceWindow?.griadent}")
                    
                    h4.text-xl.font-bold {{ serviceWindow?.title }}
                    p {{ serviceWindow?.description}}
                    button(class="bg-white rounded-[8px] py-[10px] px-[24px]  ml-auto w-auto text-[#4E37E3] font-bold") GET

        div(class="flex flex-col w-full gap-y-3")
          p(class="text-xl font-bold") Subscribe Our Newsletter
          p Enter your details to get business inspiration, trending solutions, and consulting tips delivered to your inbox
          input(class="mt-4 w-auto  h-[3rem] border-[1px] rounded-[7px] text-center  bg-transparent border-black py-2 px-6 focus:outline-none text-white text-lg" placeholder="Enter your email address")
          buton(class="bg-[#4E37E3] text-white rounded-[8px] py-[16px] px-[24px]  w-auto font-bold text-center") Subscribe
          
        div(class="flex flex-col w-full gap-y-3")
          p(class="text-xl font-bold") Topics 
     
          p(v-for="topic in 7") {{ topic }}

        div(class="flex flex-col w-full gap-y-3")
          p(class="text-xl font-bold") Popular Articles
          p(v-for="article in 7") {{ article }}
      div(class="w-full flex flex-col gap-y-4 lg:gap-y-6")
        div(class="flex gap-x-2 items-center text-sm font-semibold relative ")
          

          div#article_options( class="bg-[#f7f7f7] w-auto  px-3 h-full  flex gap-x-2 items-center hover:cursor-pointer hover-text-animation")
            div#article-emojis(class="absolute w-auto h-auto pb-4 -top-[7.4rem] left-0")
              div(class="bg-white shadow-md rounded-sm w-full h-[6.5rem] flex gap-x-6 px-4 py-3") 
                div(class="flex flex-col gap-y-2 items-center group  relative w-[3rem]")
                  p(class="group-hover:text-blue-400 hover-text-animation") I like it
                  NotoThumbsUp(  class="w-6 h-6 absolute top-1/2 -translate-y-1/2 group-hover:w-7 group-hover:h-7  hover-thumb-animation ")
                  p(class="absolute text-[0.6rem] bottom-0 text-slate-500") 2 
                div(class="flex flex-col gap-y-2 items-center group  relative  w-[3rem]")
                  p(class="group-hover:text-blue-400 hover-text-animation") Super
                  NotoRedHeart(  class="w-6 h-6 absolute top-1/2 -translate-y-1/2 group-hover:w-7 group-hover:h-7  hover-thumb-animation ")
                  p(class="absolute text-[0.6rem] bottom-0 text-slate-500") 2 
                div(class="flex flex-col gap-y-2 items-center group  relative  w-[3rem]")
                  p(class="group-hover:text-blue-400 hover-text-animation") Hahaha
                  NotoRollingOnTheFloorLaughing(  class="w-6 h-6 absolute top-1/2 -translate-y-1/2 group-hover:w-7 group-hover:h-7  hover-thumb-animation ")
                  p(class="absolute text-[0.6rem] bottom-0 text-slate-500") 2 
                div(class="flex flex-col gap-y-2 items-center group  relative  w-[3rem]")
                  p(class="group-hover:text-blue-400 hover-text-animation") Wow
                  NotoFaceWithOpenMouth(  class="w-6 h-6 absolute top-1/2 -translate-y-1/2 group-hover:w-7 group-hover:h-7  hover-thumb-animation ")
                  p(class="absolute text-[0.6rem] bottom-0 text-slate-500") 2 
                div(class="flex flex-col gap-y-2 items-center group  relative  w-[3rem]")
                  p(class="group-hover:text-blue-400 hover-text-animation") Sad
                  NotoSadButRelievedFace(  class="w-6 h-6 absolute top-1/2 -translate-y-1/2 group-hover:w-7 group-hover:h-7  hover-thumb-animation ")
                  p(class="absolute text-[0.6rem] bottom-0 text-slate-500") 2  
                div(class="flex flex-col gap-y-2 items-center group  relative  w-[3rem]")
                  p(class="group-hover:text-blue-400 hover-text-animation") Angry
                  NotoAngryFace(  class="w-6 h-6 absolute top-1/2 -translate-y-1/2 group-hover:w-7 group-hover:h-7  hover-thumb-animation ")
                  p(class="absolute text-[0.6rem] bottom-0 text-slate-500") 2  
              div(class="relative w-full h-auto")
                div.arrow-down(class="w-[2rem] h-[1rem]  absolute left-[3rem] top-0 drop-shadow-md")
            div(@click="isLiked = !isLiked" :class="isLiked? 'text-blue-400':''" class="flex gap-x-2 items-center group py-2 hover-text-animation")
              MdiThumbUp(  class="w-5 h-5  ")
              p(class="group-hover:text-blue-400 ") I like this
            div(class="w-[1px] h-[1rem] bg-slate-400")
            div(class="flex gap-x-2 items-center py-2 group ")
              div(class="flex h-full")
                
                div(class="relative flex items-center gap-x-2 ")
                  div(class="rounded-full p-[0.2rem] bg-[#f7f7f7] z-20")
                    NotoFaceSavoringFood(  class="w-5 h-5 ")
                  div(class="rounded-full p-[0.2rem] absolute left-4 z-10")
                    NotoThumbsUp(  class="w-5 h-5")
                  p.text-xs.text-slate-500.ml-4.font-normal 27
          div(@click="shareArticle()" class="bg-[#f7f7f7] w-auto h-full px-3 py-[0.7rem] items-center flex gap-x-2 hover:text-blue-400  hover-text-animation hover:cursor-pointer ")
            MdiShare(  class="w-5 h-5")
            p(class="hidden md:block ") Share
       
        p(class="text-lg lg:text-5xl   font-semibold lg:font-bold lg:leading-none") {{ blok.description }}
        div(class="w-[100vw] -mx-4 lg:-mx-0 lg:w-full")
          nuxt-img(:src="'https:' + blok.image"  provider="storyblok" class=" mt-[1rem] top-0 left-0 object-cover h-[18rem] lg:h-[25rem] w-full" :alt="blok.image.alt" :title="blok.title" :width="blok.width" :height="blok.height" format="webp")
        div(v-html="resolvedRichText" class="lg:mt-[3rem]  mb-12 lg:text-2xl text-start leading-[1.9rem] w-full")
        

    
        ContentBreakerNearestServices

    
    hr(class="w-4/5 h-[2px] bg-slate-200 my-12")
    //- div.blog__article_similar(class="flex flex-col  w-4/5")
    //-     p(class="text-4xl text-center  ") Similar articles

</template>

<script setup lang="ts">
import NotoSadButRelievedFace from "~icons/noto/sad-but-relieved-face";
import NotoAngryFace from "~icons/noto/angry-face";
import NotoRollingOnTheFloorLaughing from "~icons/noto/rolling-on-the-floor-laughing";
import NotoFaceWithOpenMouth from "~icons/noto/face-with-open-mouth";
import NotoRedHeart from "~icons/noto/red-heart";
import NotoThumbsUp from "~icons/noto/thumbs-up";

import NotoFaceSavoringFood from "~icons/noto/face-savoring-food";

import MdiThumbUp from "~icons/mdi/thumb-up";
import MdiShare from "~icons/mdi/share";
import IcBaselineFacebook from "~icons/ic/baseline-facebook";
import IconoirInstagram from "~icons/iconoir/instagram";
import RiTwitterXFill from "~icons/ri/twitter-x-fill";
import { nextTick } from "vue";
import servicesWindows from "@/utils/servicesWindows.json";

const selectRandomServiceWindow = () => {
  const randomNumber = Math.floor(Math.random() * servicesWindows.length);
  return servicesWindows[Math.floor(Math.random() * servicesWindows.length)];
};

const isLiked = ref(false);
const serviceWindow = ref();

onMounted(() => {
  serviceWindow.value = selectRandomServiceWindow();
});

const shareArticle = () => {
  navigator.share({
    title: props.blok.title,
    text: props.blok.description,
    url: window.location.href,
  });
};

const props = defineProps({
  blok: {
    type: Object,
    required: true,
  },
  blokinfo: {
    type: Object,
    required: true,
  },
});

const readTime = () => {
  const wordsPerMinute = 200;
  const textLength = props.blok.content.split(" ").length;
  return Math.ceil(textLength / wordsPerMinute);
};

// set text to UPPER CASE

const resolvedRichText = computed(() => {
  return props.blok.content;
});
</script>

<style lang="scss" scoped>
input::placeholder {
  color: black;
}

.hover-text-animation {
  transition: all 0.1s;
}

.hover-thumb-animation {
  transition: all 0.2s;
}

#article_options {
  #article-emojis {
    display: none;
  }
}
#article_options:hover {
  #article-emojis {
    display: flex;
    flex-direction: column;
  }
}

.arrow-down {
  width: 0;
  height: 0;
  border-left: 7.5px solid transparent;
  border-right: 7.5px solid transparent;

  border-top: 9px solid rgb(255, 255, 255);
}
</style>
