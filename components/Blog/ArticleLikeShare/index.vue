<template lang="pug">
div(class="flex gap-x-2 items-center text-sm font-semibold relative select-none ")
    div#article_options(class="bg-[#f7f7f7] w-auto px-3 h-full flex gap-x-2 items-center hover:cursor-pointer hover-text-animation")
        div#article-emojis(:class="isEmojisOptions? 'opacity-1 md:opacity-0 visible md:invisible ': 'opacity-0 md:opacity-1 invisible md:visible '" class="absolute w-[100vw] -mx-4 md:-mx-0 md:w-auto h-auto pb-4 -top-[7.4rem] left-0 z-50 text-xs")
            div(class="bg-white drop-shadow-md rounded-sm w-full h-[6.5rem] flex gap-x-2 px-4 py-3") 
                div(:class="currentReaction === 'like'? 'text-blue-400 ':''" class="flex flex-col gap-y-2 items-center group relative w-[3rem]" @click="toggleReact('like')")
                    p( class="group-hover:text-blue-400 hover-text-animation") I like it
                    NotoThumbsUp(:class="currentReaction === 'like'? 'h-7 w-7':''" class="w-6 h-6 absolute top-1/2 -translate-y-1/2 group-hover:w-7 group-hover:h-7 hover-thumb-animation")
                    p(:class="currentReaction === 'like'? '':'text-slate-500'" class="absolute text-[0.6rem] bottom-0 ") {{ reactions.like.count }}
                div(:class="currentReaction === 'super'? 'text-blue-400 ':''" class="flex flex-col gap-y-2 items-center group relative w-[3rem]" @click="toggleReact('super')")
                    p(class="group-hover:text-blue-400 hover-text-animation") Super
                    NotoRedHeart(:class="currentReaction === 'super'? 'h-7 w-7':''" class="w-6 h-6 absolute top-1/2 -translate-y-1/2 group-hover:w-7 group-hover:h-7 hover-thumb-animation")
                    p(:class="currentReaction === 'super'? '':'text-slate-500'" class="absolute text-[0.6rem] bottom-0 ") {{ reactions.super.count }}
                div(:class="currentReaction === 'laugh'? 'text-blue-400 ':''" class="flex flex-col gap-y-2 items-center group relative w-[3rem]" @click="toggleReact('laugh')" )
                    p(class="group-hover:text-blue-400 hover-text-animation") Hahaha
                    NotoRollingOnTheFloorLaughing(:class="currentReaction === 'laugh'? 'h-7 w-7':''" class="w-6 h-6 absolute top-1/2 -translate-y-1/2 group-hover:w-7 group-hover:h-7 hover-thumb-animation")
                    p(:class="currentReaction === 'laugh'? '':'text-slate-500'" class="absolute text-[0.6rem] bottom-0 ") {{ reactions.laugh.count }}
                div(:class="currentReaction === 'wow'? 'text-blue-400 ':''" class="flex flex-col gap-y-2 items-center group relative w-[3rem]"  @click="toggleReact('wow')" )
                    p(class="group-hover:text-blue-400 hover-text-animation") Wow
                    NotoFaceWithOpenMouth(:class="currentReaction === 'wow'? 'h-7 w-7':''" class="w-6 h-6 absolute top-1/2 -translate-y-1/2 group-hover:w-7 group-hover:h-7 hover-thumb-animation")
                    p(:class="currentReaction === 'wow'? '':'text-slate-500'" class="absolute text-[0.6rem] bottom-0 ") {{ reactions.wow.count }}
                div(:class="currentReaction === 'sad'? 'text-blue-400 ':''" class="flex flex-col gap-y-2 items-center group relative w-[3rem]" @click="toggleReact('sad')"  )
                    p(class="group-hover:text-blue-400 hover-text-animation") Sad
                    NotoSadButRelievedFace( :class="currentReaction === 'sad'? 'h-7 w-7':''" class="w-6 h-6 absolute top-1/2 -translate-y-1/2 group-hover:w-7 group-hover:h-7 hover-thumb-animation")
                    p(:class="currentReaction === 'sad'? '':'text-slate-500'" class="absolute text-[0.6rem] bottom-0 ") {{ reactions.sad.count }}
                div(:class="currentReaction === 'angry'? 'text-blue-400 ':''" class="flex flex-col gap-y-2 items-center group relative w-[3rem]" @click="toggleReact('angry')"  )
                    p(class="group-hover:text-blue-400 hover-text-animation") Angry
                    NotoAngryFace(:class="currentReaction === 'angry'? 'h-7 w-7':''" class="w-6 h-6 absolute top-1/2 -translate-y-1/2 group-hover:w-7 group-hover:h-7 hover-thumb-animation")
                    p(:class="currentReaction === 'angry'? '':'text-slate-500'" class="absolute text-[0.6rem] bottom-0 ") {{ reactions.angry.count }}
            div(class="relative w-full h-auto")
                div.arrow-down
        div#like-content(:class="currentReaction? 'text-blue-400':''" class="flex  items-center group py-2 hover-text-animation")
            div(@click="toggleReact('like')" class="flex h-full gap-x-2" v-show="currentReaction === 'like' || !currentReaction")
                MdiThumbUp(class="w-5 h-5" ) 
                p#like-text I like this
            div(@click="toggleReact('super')" class="flex h-full gap-x-2" v-if="currentReaction === 'super'")
                NotoRedHeart(class="w-5 h-5")
                p#like-text i love it
            div(@click="toggleReact('laugh')" class="flex h-full gap-x-2" v-if="currentReaction === 'laugh'")
                NotoRollingOnTheFloorLaughing(class="w-5 h-5" )
                p#like-text it's funny
            div(@click="toggleReact('wow')" class="flex h-full gap-x-2" v-if="currentReaction === 'wow'")
                NotoFaceWithOpenMouth(class="w-5 h-5")
                p#like-text Wow
            div(@click="toggleReact('sad')" class="flex h-full gap-x-2" v-if="currentReaction === 'sad'")
                NotoSadButRelievedFace(class="w-5 h-5" )
                p#like-text I don't like it
            div(@click="toggleReact('angry')" class="flex h-full gap-x-2" v-if="currentReaction === 'angry'")
                NotoAngryFace(class="w-5 h-5" )
                p#like-text I hate it
          
           
        div(class="w-[1px] h-[1rem] bg-slate-400")
        div#article_options__more(@click="toggleEmojiOptions" class="flex gap-x-2 items-center py-2 group")
            div(class="flex h-full")
                div(class="relative flex items-center gap-x-2")
                    div(class="rounded-full p-[0.2rem] bg-[#f7f7f7] z-20")
                        NotoFaceSavoringFood(class="w-5 h-5")
                    div(class="rounded-full p-[0.2rem] absolute left-4 z-10")
                        NotoThumbsUp(class="w-5 h-5")
                    
                    p.text-xs.text-slate-500.ml-4.font-normal {{ reactionsCount }}
    div(@click="$emit('share')" class="bg-[#f7f7f7] w-auto h-full px-3 py-[0.7rem] items-center flex gap-x-2 md:hover:text-blue-400  hover-text-animation hover:cursor-pointer ")
        MdiShare(  class="w-5 h-5")
        p(class="hidden md:block ") Share
    
</template>

<script setup lang="ts">
import { ref } from "vue";
import NotoSadButRelievedFace from "~icons/noto/sad-but-relieved-face";
import NotoAngryFace from "~icons/noto/angry-face";
import NotoRollingOnTheFloorLaughing from "~icons/noto/rolling-on-the-floor-laughing";
import NotoFaceWithOpenMouth from "~icons/noto/face-with-open-mouth";
import NotoRedHeart from "~icons/noto/red-heart";
import NotoThumbsUp from "~icons/noto/thumbs-up";
import MdiThumbUp from "~icons/mdi/thumb-up";
import NotoFaceSavoringFood from "~icons/noto/face-savoring-food";
import MdiShare from "~icons/mdi/share";

const isEmojisOptions = ref(false);
const toggleEmojiOptions = () => {
  isEmojisOptions.value = !isEmojisOptions.value;
};

const props = defineProps({
  reactions: {
    type: Object,
    required: true,
  },
  currentReaction: {
    required: true,
  },
});

const reactionsCount = computed(() => {
  return Object.values(props.reactions).reduce(
    (acc, reaction) => acc + reaction.count,
    0
  );
});

const isAnyReactionClicked = computed(() => {
  return Object.values(props.reactions).some(
    (reaction) => reaction.isUserClicked
  );
});

const emit = defineEmits(["react"]);

const toggleReact = (reaction) => {
  emit("react", reaction);
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
  position: absolute;
  left: 3rem;
  top: 0;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
  transition: none;
}

.hover-thumb-animation {
  transition: all 0.2s;
}
</style>
