<template lang="pug">
div(class="flex gap-x-2 items-center text-sm font-semibold relative ")
    div#article_options( class="bg-[#f7f7f7] w-auto  px-3 h-full  flex gap-x-2 items-center hover:cursor-pointer hover-text-animation")
        div#article-emojis(:class="isEmojisOptions? 'opacity-1 md:opacity-0 visible md:invisible ': 'opacity-0 md:opacity-1 invisible md:visible '" class="absolute w-[100vw] -mx-4 md:-mx-0 md:w-auto h-auto pb-4 -top-[7.4rem] left-0 z-50 text-xs")
            div(class="bg-white drop-shadow-md rounded-sm w-full h-[6.5rem] flex gap-x-2 px-4 py-3") 
                
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
        div#like-content(@click="toggleLike()" :class="isLiked? 'text-blue-400':''"  class=" flex gap-x-2 items-center group py-2 hover-text-animation")
            MdiThumbUp(  class="w-5 h-5  ")
            p#like-text( class=" ") I like this
        div(class="w-[1px] h-[1rem] bg-slate-400")
        div#article_options__more(@click="toggleEmojiOptions" class="flex gap-x-2 items-center py-2 group ")
            div(class="flex h-full")
            
                div(class="relative flex items-center gap-x-2 ")
                    div(class="rounded-full p-[0.2rem] bg-[#f7f7f7] z-20")
                        NotoFaceSavoringFood(  class="w-5 h-5 ")
                    div(class="rounded-full p-[0.2rem] absolute left-4 z-10")
                        NotoThumbsUp(  class="w-5 h-5")
                    p.text-xs.text-slate-500.ml-4.font-normal 27
</template>

<script setup lang="ts">
import NotoSadButRelievedFace from "~icons/noto/sad-but-relieved-face";
import NotoAngryFace from "~icons/noto/angry-face";
import NotoRollingOnTheFloorLaughing from "~icons/noto/rolling-on-the-floor-laughing";
import NotoFaceWithOpenMouth from "~icons/noto/face-with-open-mouth";
import NotoRedHeart from "~icons/noto/red-heart";
import NotoThumbsUp from "~icons/noto/thumbs-up";

import MdiThumbUp from "~icons/mdi/thumb-up";
import NotoFaceSavoringFood from "~icons/noto/face-savoring-food";

const isEmojisOptions = ref(false);
const toggleEmojiOptions = () => {
  isEmojisOptions.value = !isEmojisOptions.value;
};

const props = defineProps({
  isLiked: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(["like"]);
const toggleLike = () => {
  emit("like");
};
</script>

<style lang="scss">
#article_options:hover {
  @media (min-width: 1024px) {
    & #article-emojis {
      opacity: 1;
      visibility: visible;
      flex-direction: column;
    }
  }
}

#like-content:hover {
  @media (min-width: 1024px) {
    #like-text {
      color: #60a5fa;
    }
  }
}

.arrow-down {
  width: 0;
  height: 0;
  border-left: 7.5px solid transparent;
  border-right: 7.5px solid transparent;

  border-top: 9px solid rgb(255, 255, 255);
}

.hover-thumb-animation {
  transition: all 0.2s;
}
</style>
