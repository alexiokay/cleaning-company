<template lang="pug">
div(class="w-full min-w-[16rem] xl:w-[17rem] flex flex-col md:sticky md:top-[10rem] ")
        div(class="w-full items-center flex h-auto px-2 py-[0.35rem] border-[1px] rounded-md")
            MdiSearch(class="w-6 h-6 text-gray-800")
            input(class="border-none focus:outline-none w-full text-[0.8rem] h-full  text-gray-800 px-2" placeholder="Search" @input="searchString = $event.target.value")
        div(class="relative flex flex-col mt-4 h-auto ")
            #blog_nav__vr(class="absolute top-0 left-0 z-20 w-[1px] h-full bg-[#E5E5E5]")

            div(class="relative flex flex-col hover:cursor-pointer" v-for="nav in foundCategories" :key="nav.name")
                div.blog_nav__active(v-show="activeNav == nav.route"  class="w-[2px] h-full absolute left-0 top-0 bg-[#7e54c0]")
                NuxtLink(:to="nav.route" :class="activeNav == nav.route? 'bg-[#f8f6fc] text-[#7e54c0] font-bold': ''" class=" w-full px-4 py-3 bg-[]")
                    p {{ nav.name }}
  
     
</template>

<script setup lang="ts">
import MdiSearch from "~icons/mdi/search";
const route = useRoute();

const categories = await getBlogCategories();

const activeNav = computed(() => {
  return route.path;
});

const blogNav = ref([
  {
    name: "Blog",
    route: "/blog",
  },
]);

const searchString = ref("");
const foundCategories = computed(() => {
  let results = [];

  if (searchString.value === "") {
    if (activeNav.value === "/blog") {
      results = [
        blogNav.value[0],
        ...categories.map((category) => ({
          name: category.name,
          route: `/blog/category/${category.slug}`,
        })),
      ];
    } else {
      results = blogNav.value;
    }
  } else {
    results = categories
      .filter((category) =>
        category.name.toLowerCase().includes(searchString.value.toLowerCase())
      )
      .map((category) => ({
        name: category.name,
        route: `/blog/${category.slug}`,
      }));

    // Find the active category in blogNav and move it to the top of the list if it is active
    const activeCategoryIndex = blogNav.value.findIndex(
      (navItem) => navItem.route === activeNav.value
    );

    if (activeCategoryIndex !== -1) {
      const activeCategory = blogNav.value[activeCategoryIndex];
      // Check if the active category is already in the results
      const activeCategoryInResults = results.find(
        (category) => category.route === activeCategory.route
      );

      if (!activeCategoryInResults) {
        results.unshift({
          name: activeCategory.name,
          route: activeCategory.route,
        });
      }
    }
  }

  return results;
});

categories.forEach((category) => {
  blogNav.value.push({
    name: category.name,
    route: `/blog/category/${category.slug}`,
  });
});
</script>

<style lang="scss"></style>
