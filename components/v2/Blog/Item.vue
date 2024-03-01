<template lang="pug">
div(class="relative flex flex-col space-y-4 md:space-y-8  lg:text-start items-center lg:items-start bg-white  rounded-[20px] mt-6 md:mt-0 overflow-hidden border-[6px] border-white")
    
    NuxtLink( :to="'/blog/' + article.slug" class="w-full xl:h-[23.5rem]  xs:h-[13rem] h-[18rem] ") 
        slot(name="image")
    
    div(class="absolute top-0 left-[2rem] p-4 bg-[#Ffffff] font-medium text-lg text-[#64626E]")
        p {{ article.date? article.date: article.published_at.split('T')[0] }}

    div(class=" gap-y-4 w-full flex flex-col px-[2.5rem] pb-[2rem]  ")
        NuxtLink(class="font-bold text-xl md:text-2xl w-full  hover:cursor-pointer" :to="/blog/ + article.slug") 
            h5 {{ article.content.title }}
    
        p(class='text-xl  text-[#64626E] text-start line-clamp-5') {{ article.content.description }}

        NuxtLink(:to="'/blog/' + article.slug" class='text-[#241969] text-lg font-bold flex mr-auto md:mr-0') Read More
        
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
