<template lang="pug">
div(class="min-w-[16rem] xl:w-[17rem] flex flex-col md:sticky md:top-[10rem] ")
        div(class="w-full items-center flex h-auto px-2 py-[0.35rem] border-[1px] rounded-md")
            MdiSearch(class="w-6 h-6 text-gray-800")
            input(class="border-none focus:outline-none w-full text-[0.8rem] h-full  text-gray-800 px-2" placeholder="Search")
        div(class="relative flex flex-col mt-4 h-auto ")
            #blog_nav__vr(class="absolute top-0 left-0 w-[1px] h-full bg-[#E5E5E5]")

            div(class="relative flex flex-col hover:cursor-pointer" v-for="nav in blogNav" :key="nav.name")
                div.blog_nav__active(v-show="activeNav == nav.name.toLowerCase()" class="w-[2px] h-full absolute left-0 top-0 bg-[#7e54c0]")
                NuxtLink(:to="nav.route" :class="activeNav == nav.route? 'bg-[#f8f6fc] text-[#7e54c0] font-bold': ''" class=" w-full px-4 py-3 bg-[]")
                    p {{ nav.name }}
</template>

<script setup lang="ts">
const route = useRoute();

const activeNav = computed(() => {
  return route.path;
});

const blogNav = ref([
  {
    name: "Blog",
    route: "/blog",
  },
  //   {
  //     name: "Articles",
  //     route: "/blog/articles",
  //   },
  //   {
  //     name: "Latest News",
  //     route: "/blog/latest-news",
  //   },
  {
    name: "Car Cleaning",
    route: "/blog/car-cleaning",
  },
]);
</script>

<style lang="scss"></style>
