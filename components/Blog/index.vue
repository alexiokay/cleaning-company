<template lang="pug">
div(class="relative w-full md:px-12 flex flex-col text-center gap-y-4 md:gap-y-10 py-4  pt-[2rem] ")
    NuxtLink( to="/blog" class="w-[10rem]  h-[3rem] rounded-full bg-[#Fcf2ec] text-[#F9782b] text-2xl items-center justify-center flex font-bold mx-auto hover:cursor-pointer") Our Blog
    h2(class="text-black md:text-[4rem]  text-xl font-bold") Latest News & Articles
    
    div(class="flex flex-col lg:flex-row w-full justify-start h-auto items-start  gap-y-12 gap-x-[2.5rem] 3xl:px-[19rem]  md:px-[4rem] px-[1rem] md:mt-[4rem] mt-[1rem]  ")
        
        BlogItem(v-for="article in articles" :key="article.uuid" :article="article" )
            template(v-slot:image)
              
                nuxt-img(:src="'https:' + article.content.image" format="webp" width="400" height="300" class="w-full h-full xs:h-[13rem]  object-cover rounded-xl hover:cursor-pointer ")

                    
                
    
    buttonsButton(text="View All Posts" class="h-[5rem] w-[17rem] text-xl mx-auto mt-2 text-white")
                template(v-slot:icon)
                    ArrowIcon(class="w-8 h-8 ml-3 group-hover:text-[#2da9db] ")
        
</template>

<script setup lang="ts">
import ArrowIcon from "~icons/ph/arrow-right";

defineProps({
  blok: {
    type: Object,
    required: true,
  },
});
const articles = ref(null);

const storyblokApi = useStoryblokApi();
const { data } = await storyblokApi.get("cdn/stories", {
  version: useRoute().query._storyblok ? "draft" : "published",
  starts_with: "blog",
  is_startpage: false,
});
articles.value = data.stories.slice(0, 3);
</script>

<style lang="scss"></style>
