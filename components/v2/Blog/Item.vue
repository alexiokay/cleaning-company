<template lang="pug">
div(class="relative flex flex-col  lg:text-start items-center lg:items-start bg-white  rounded-[20px]  shadow-lg w-full mt-6 md:mt-0 overflow-hidden border-[6px] border-white")
    
    NuxtLink( :to="'/blog/article/' + article.slug" class="w-full 2xl:h-[17.5rem]  xs:h-[13rem] h-[14rem] ") 
        slot(name="image")
    
    div(class="absolute top-4 left-[2rem] p-2 lg:p-4 bg-[#Ffffff] font-medium text-base lg:text-lg text-[#64626E] shadow-lg")
        p {{ article.date? article.date: article.published_at.split('T')[0] }}

    div(class=" gap-y-2 w-full flex flex-col px-4 lg:px-5 3xl:px-8 py-3 lg:py-3 4xl:py-6 3xl:gap-y-3  ")


        NuxtLink(class="font-bold text-lg md:text-2xl w-full  hover:cursor-pointer" :to="/blog/ + article.slug") 
            h5 {{ article.content.title }}
    
        p(class='lg:text-xl  text-[#64626E] text-start line-clamp-5') {{ article.content.description }}

        NuxtLink(:to="'/blog/' + article.slug" class='text-[#241969] text-lg font-bold flex mt-2 mr-auto md:mr-0') Read More
        
</template>

<script setup lang="ts">
import ArrowIcon from "~icons/ph/arrow-right";

import CommentsIcon from "~icons/octicon/comment-24";
import ViewsIcon from "~icons/carbon/view";

const router = useRouter();

defineProps({
  article: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="scss"></style>
