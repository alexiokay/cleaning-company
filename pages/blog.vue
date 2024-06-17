<template lang="pug">
div(class="w-full h-full  flex flex-col items-center  justify-start   bg-white  gap-y-8 ")

    div#blog__header(class="w-full flex flex-col relative py-4 md:py-12 lg:px-24 h-[25rem] md:h-[20rem] text-xl lg:text-3xl xl:text-4xl px-4 md:text-center text-white rounded-3xl bg-[#F5f5f5] items-center justify-center")
        nuxt-img(src="images/blog/header.webp" class="absolute z-10 top-0 left-0 w-full h-full object-cover object-center ")
        div(class="w-full h-full z-20 absolute top-0 header-background ")
        h1(class="tracking-[0.1rem]  text-5xl  leading-[4rem] md:leading-0 font-bold z-50") Fresh&Tidy Blog
        h2(class="flex gap-x-2 mt-6 flex-wrap items-center text-base 2xl:text-lg justify-center z-50") The latest industry news, interviews, technologies, and resources


    div(class="flex flex-col blx:flex-row min-h-[40vw] w-full xl:w-[78rem]  items-start justify-start  px-[1rem] sm:px-[1.5rem] md:px-[3rem] lg:px-[7.4rem] xl:px-0  py-8 gap-x-[2rem] gap-y-6")
    
        div(class="min-w-[16rem] xl:w-[17rem] flex flex-col md:sticky md:top-[10rem] ")
            div(class="w-full items-center flex h-auto px-2 py-[0.35rem] border-[1px] rounded-md")
                MdiSearch(class="w-6 h-6 text-gray-800")
                input(class="border-none focus:outline-none w-full text-[0.8rem] h-full  text-gray-800 px-2" placeholder="Search")
            div(class="relative flex flex-col mt-4 h-auto ")
                #blog_nav__vr(class="absolute top-0 left-0 w-[1px] h-full bg-[#E5E5E5]")

                div(class="relative flex flex-col hover:cursor-pointer" v-for="nav in blogNav" :key="nav.name")
                    div.blog_nav__active(v-show="activeNav == nav.name" class="w-[2px] h-full absolute left-0 top-0 bg-[#7e54c0]")
                    div(:class="activeNav == nav.name? 'bg-[#f8f6fc] text-[#7e54c0] font-bold': ''" class=" w-full px-4 py-3 bg-[]")
                        p(@click="activeNav = nav.name") {{ nav.name }}
        div(class="w-full xl:w-[56.5rem] h-full flex flex-col items-start justify-start gap-y-6")
            h2(class="text-lg font-bold    ") Featured Posts
            //- div.article-horizontal(class="flex-col flex md:flex-row w-full  gap-x-[3rem] 3xl:gap-x-[3rem] h-auto text-[#51535b]")
            //-     nuxt-img(format="webp" provider='ipx' alt="wood floot cleaner header" class="rounded-xl w-full md:w-1/2 max-h-[20rem] xs:h-[12rem] sm:h-[16rem] lg:min-h-[18rem] object-cover" src="https://www.expertreviews.co.uk/sites/expertreviews/files/2022/04/best_wood_floor_cleaner_-_hero.jpg")
            //-     div(class="flex flex-col w-full gap-y-6  my-4")
            //-         div.article__info(class="flex w-full gap-x-2 items-center")
            //-             nuxt-img(format="webp" alt="netflix"  provider='ipx' class="rounded-full" src="https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456" width="40px" height="40px")
            //-             p Netflix
            //-             p .
            //-             p 12 minutes ago
            //-         .article__title(class="text-3xl 3xl:text-xl font-semibold  text-[#22252f]") 5 Reasons Why You Should Hire Professional Cleaning Services While Moving Out
            //-         .article__description(class="") Lorem ipsum dolor sit amet cons ectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
            //-         .article__footer(class="flex gap-x-2")
            //-             p(class="text-red-500 font-semibold") Movies
            //-             p .
            //-             p  5 min read
            
            div(class="grid grid-cols-1 sm:grid-cols-2 gap-[2rem] 2xl:gap-x-[4rem] gap-y-[5rem] w-full mt-12")
                div(class="bg-white w-full   overflow-hidden  flex flex-col items-start justify-start gap-y-2 " v-for="article in articles")
                    NuxtLink(:to="`/blog/${article.slug}`" class="w-full h-full")
                        
                        nuxt-img(:src="'https:' + article.content.image" provider="storyblok" format="webp" width="600" h="400" class="w-full rounded-xl drop-shadow-lg max-h-[12rem] xs:h-[12rem] sm:h-[16rem] lg:min-h-[18rem]  object-cover " )
                    div(class="flex flex-col items-start justify-start  gap-y-2 h-full md:h-[12rem] w-full mt-1")
                        h4(class="text-lg font-bold  ") {{ article.content.title }}
                        div(class="rounded-xl w-auto bg-[#f8f6fc] text-[#20249b] px-3 py-[0.3rem] text-sm") {{ article.content.category }} Product Management
                        p(class="line-clamp-3 ") {{ article.content.description }}
                    div(class="flex gap-x-4 mt-4")
                        nuxt-img(format="webp" provider="ipx" alt="netflix logo"     class="rounded-full w-12 h-12" src="https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456" width="30px" height="30px")
                        div(class="flex flex-col text-sm justify-center gap-y-1")
                            p(class="text-[#313337] font-bold") Author
                            p date &#8226; 9 min read
            ContentBreakerNearestServices

        //- div.article-horizontal(class="flex-col flex md:flex-row w-full  gap-x-[3rem] 3xl:gap-x-[4rem] h-auto text-[#51535b]")
        //-     nuxt-img(format="webp" provider='ipx' alt="wood floot cleaner header" class="rounded-xl w-full md:w-2/5" src="https://www.expertreviews.co.uk/sites/expertreviews/files/2022/04/best_wood_floor_cleaner_-_hero.jpg")
        //-     div(class="flex flex-col w-full gap-y-6 text-2xl my-4")
        //-         div.article__info(class="flex w-full gap-x-2 items-center")
        //-             nuxt-img(format="webp" alt="netflix"  provider='ipx' class="rounded-full" src="https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456" width="40px" height="40px")
        //-             p Netflix
        //-             p .
        //-             p 12 minutes ago
        //-         .article__title(class="text-3xl 3xl:text-5xl font-semibold  text-[#22252f]") 5 Reasons Why You Should Hire Professional Cleaning Services While Moving Out
        //-         .article__description(class="") Lorem ipsum dolor sit amet cons ectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
        //-         .article__footer(class="flex gap-x-2")
        //-             p(class="text-red-500 font-semibold") Movies
        //-             p .
        //-             p  5 min read

        //- h2(class="gray-600 text-4xl md:text-7xl  text-start font-semibold text-[#22252f] w-full md:mt-9") Articles
        //- div.blog__articles(class="flex flex-col lg:flex-row w-full lg:justify-start h-auto items-start justify-center gap-y-12 gap-x-[2.5rem]   ") 
        //-     BlogItem(v-for="article in articles"   :key="article.uuid" :article="article" )
        //-         template(v-slot:image)
        //-             nuxt-img(:src="'https:' + article.content.image" :alt="article.content.title" provider="storyblok" format="webp" width="300" h="200" class="w-full h-full object-cover rounded-xl ")
        //- div.blog__latest(class="flex flex-col  w-full gap-y-12 mt-9")
        //-     .flex.justify-between.items-center.w-full
        //-         h2(class="gray-600 text-4xl md:text-7xl  text-start font-semibold text-[#22252f]") Latest News
        //-         button(class="text-red-600 text-lg md:text-2xl font-semibold") See all ->
        //-     .blog__latest__content(class="flex w-full gap-x-4")
        //-         .news(class="flex flex-col w-1/5 gap-y-6")
        //-             nuxt-img(class="aspect-square object-cover rounded-3xl" provider="ipx" src="https://www.eurocarparts.com/blog/ecp-wp-content/uploads/2016/10/upholstery.jpg" format="webp")
        //-             p.blog__latest__content__info(class="flex w-full gap-x-2 items-center")
        //-                 nuxt-img(format="webp" provider="ipx" alt="netlix logo"     class="rounded-full" src="https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456" width="30px" height="30px")
        //-                 p Netflix
        //-                 p .
        //-                 p 12 minutes ago
        //-             p.blog_latest__content__title(class="text-4xl font-semibold text-[#22252f]") tsast

</template>

<script setup lang="ts">
import PaintEmoji from "~icons/noto/paintbrush";
import BookEmoji from "~icons/noto/orange-book";
import CinoEmoji from "~icons/noto/cinema";
import BulbEmoji from "~icons/noto/light-bulb";

import MdiSearch from "~icons/mdi/search";
definePageMeta({
  NavbarColor: "#ffffff",
});

defineProps({
  blok: {
    type: Object,
    required: true,
  },
});

const activeNav = ref("blog");

const blogNav = ref([
  {
    name: "Blog",
    route: "/blog",
  },
  {
    name: "Articles",
    route: "/blog/articles",
  },
  {
    name: "Latest News",
    route: "/blog/latest-news",
  },
]);

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
