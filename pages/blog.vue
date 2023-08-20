<template lang="pug">
div(class="w-full min-h-screen flex flex-col items-center px-4 justify-start py-8  lg:px-[10%] bg-white  gap-y-8 md:gap-y-12")

    div#blog__header(class="w-full flex flex-col h-auto py-4 md:py-12 lg:px-24  text-xl lg:text-3xl xl:text-4xl font-semibold   rounded-3xl bg-[#F5f5f5] items-center justify-center")
        p(class="tracking-[0.4rem] text-[#55585f] text-lg 2xl:text-xl font-bold ") WELCOME TO OUR BLOG
        p(class="flex gap-x-2 mt-6 flex-wrap items-center justify-center") Craft narratives
            PaintEmoji
            | that ignite 
            span(class="text-red-600") inspiration 
            BulbEmoji
            |,
            span(class="text-red-600 items-center justify-center ") knowledge
            BookEmoji
            span(class="text-red-600") entertainment
            CinoEmoji



    div.article-horizontal(class="flex-col flex md:flex-row w-full  gap-x-[3rem] 3xl:gap-x-[4rem] h-auto text-[#51535b]")
        nuxt-img(format="webp" provider='ipx' alt="wood floot cleaner header" class="rounded-xl w-full md:w-2/5" src="https://www.expertreviews.co.uk/sites/expertreviews/files/2022/04/best_wood_floor_cleaner_-_hero.jpg")
        div(class="flex flex-col w-full gap-y-6 text-2xl my-4")
            div.article__info(class="flex w-full gap-x-2 items-center")
                nuxt-img(format="webp" alt="netflix"  provider='ipx' class="rounded-full" src="https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456" width="40px" height="40px")
                p Netflix
                p .
                p 12 minutes ago
            .article__title(class="text-3xl 3xl:text-5xl font-semibold  text-[#22252f]") 5 Reasons Why You Should Hire Professional Cleaning Services While Moving Out
            .article__description(class="") Lorem ipsum dolor sit amet cons ectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
            .article__footer(class="flex gap-x-2")
                p(class="text-red-500 font-semibold") Movies
                p .
                p  5 min read

    h2(class="gray-600 text-4xl md:text-7xl  text-start font-semibold text-[#22252f] w-full md:mt-9") Articles
    div.blog__articles(class="flex flex-col lg:flex-row w-full lg:justify-start h-auto items-start justify-center gap-y-12 gap-x-[2.5rem]   ") 
        BlogItem(v-for="article in articles"   :key="article.uuid" :article="article" )
            template(v-slot:image)
                nuxt-img(:src="'https:' + article.content.image" :alt="article.content.title" provider="storyblok" format="webp" width="300" h="200" class="w-full h-full object-cover rounded-xl ")
    div.blog__latest(class="flex flex-col  w-full gap-y-12 mt-9")
        .flex.justify-between.items-center.w-full
            h2(class="gray-600 text-4xl md:text-7xl  text-start font-semibold text-[#22252f]") Latest News
            button(class="text-red-600 text-lg md:text-2xl font-semibold") See all ->
        .blog__latest__content(class="flex w-full gap-x-4")
            .news(class="flex flex-col w-1/5 gap-y-6")
                nuxt-img(class="aspect-square object-cover rounded-3xl" provider="ipx" src="https://www.eurocarparts.com/blog/ecp-wp-content/uploads/2016/10/upholstery.jpg" format="webp")
                p.blog__latest__content__info(class="flex w-full gap-x-2 items-center")
                    nuxt-img(format="webp" provider="ipx" alt="netlix logo"     class="rounded-full" src="https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456" width="30px" height="30px")
                    p Netflix
                    p .
                    p 12 minutes ago
                p.blog_latest__content__title(class="text-4xl font-semibold text-[#22252f]") tsast

</template>

<script setup lang="ts">
import PaintEmoji from "~icons/noto/paintbrush";
import BookEmoji from "~icons/noto/orange-book";
import CinoEmoji from "~icons/noto/cinema";
import BulbEmoji from "~icons/noto/light-bulb";
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
articles.value = data.stories;
</script>

<style lang="scss"></style>