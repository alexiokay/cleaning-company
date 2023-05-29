<template lang="pug">
div(class="flex flex-col space-y-4 ")
    Transition(name="jump")
        div(v-show="!isChatOpen" class="flex flex-col space-y-4 " :class="isChatOpen ? 'hidden' : ''")
            p(@click="isChatOpen = true" class="shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] p-3 w-[16rem] text-base bg-white rounded-md hover:cursor-pointer") Hey, let’s talk about LiveChat on your website!
            div(@click="isChatOpen = true" class="ml-auto p-3 w-min rounded-full shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] bg-white font-bold hover:cursor-pointer ")
                
                IconChat(class=" w-[2rem] h-[2rem] text-[#Ff5100]  ")

    Transition(name="jump")
        div(v-show="isChatOpen" :class="!isChatOpen ? 'hidden' : ''" class="w-[20rem] h-[38.5rem] rounded-lg bg-[#F6f6f7]        shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]")
            div(class="bg-white h-[8rem]")
                div(class="flex w-full p-3 justify-between items-center")
                    IconDots(class="w-[1.6rem] h-[1.6rem] text-black hover:cursor-pointer")
                    p(class="text-gray-700 font-semibold") Chat With Us!
                    IconMinimize(@click="isChatOpen = false" class="hover:cursor-pointer") 
                hr(class="w-5/6 mx-auto border-gray-300")

                div(class="flex w-full px-6 py-4 justify-between gap-x-4 items-center ")
                    div(class="flex relative")
                        IconChat2(class="w-[1.5rem] h-[1.5rem] text-[#Ff5100]  ")
                        div(class="absolute -top-[0.6rem] -right-[0.6rem] w-[0.55rem] h-[0.55rem] rounded-full bg-green-700 flex items-center justify-center text-xs text-white font-bold")
                    div(class="flex flex-col w-full")
                        p ChatBot
                        p Support Agent
                    IconLike(class="w-[3rem] h-[3rem] text-gray-300  hover:cursor-pointer")
                    IconDislike(class="w-[3rem] h-[3rem] text-gray-300  hover:cursor-pointer")
            div(class="bg-[#Ffd000] h-[2.5rem] p-2 flex items-center justify-center shadow-lg") Reconnecting...



            div(class="w-full relative h-[27rem] flex  flex-col items-center justify-between")
                div.message(class="h-auto flex pl-2 pr-[0.6rem] py-2 gap-x-2 ")
                    div(@click="isChatOpen = true" class=" p-1 w-min h-min rounded-full shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] bg-white font-bold hover:cursor-pointer ")
                        IconChat2(class=" w-[0.8rem] h-[0.8rem] text-[#Ff5100]  ")
                    div(class="w-full flex flex-col gap-y-1 ")
                        p(class="text-xs text-gray-500") ChatBot 20:25
                        p(@click="isChatOpen = true" class="shadow-lg p-3 w-full text-base bg-white rounded-md hover:cursor-pointer") Hey, let’s talk about LiveChat on your website!

                button(@click="isChatOpen = false" class="w-[calc(100%-2rem)]  h-[3rem] bg-[#2000f0] text-white font-bold text-base rounded-md hover:cursor-pointer") Chat Now


</template>

<script setup lang="ts">
import IconChat from "~icons/akar-icons/chat-bubble";
import IconChat2 from "~icons/carbon/chat-bot";
import IconLike from "~icons/iconamoon/like-light";
import IconDislike from "~icons/iconamoon/dislike-light";
import IconDots from "~icons/mi/options-horizontal";
import IconMinimize from "~icons/fluent/minimize-24-filled";

const isChatOpen = ref(false);
</script>

<style lang="scss">
.jump-enter {
}
.jump-enter-active {
  animation: jump-in 0.3s;
}
.jump-leave {
}
.jump-leave-active {
  animation: jump-out 0.3s;
}
@keyframes jump-in {
  0% {
    top: -100vh;
    opacity: 0;
    left: 20%;
  }
  30% {
    opacity: 0.2;
  }
  to {
    top: 0vh;
    opacity: 1;
  }
}
@keyframes jump-out {
  0% {
    top: 0vh;
    opacity: 1;
  }
  70% {
    opacity: 0.2;
  }
  100% {
    top: 100vh;
    opacity: 0;
    right: 14%;
  }
}
</style>
