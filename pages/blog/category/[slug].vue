<template lang="pug">
div
  V2BlogPageBase(:articles="articles")
  Pagination(:pages="pages" :page="1" @change="changePage"  class="flex justify-center mt-[3rem]" )

</template>

<script setup lang="ts">
const route = useRoute();

const category = route.path.split("/")[3];

const categories = await getBlogCategories();

const currentCategory = categories.find((cat) => cat.slug === category);

const perPage = 12;
const page = ref(1);
const pages = ref(0);

const articles = ref([]);
const storyblokApi = useStoryblokApi();
const { data } = await storyblokApi
  .get("cdn/stories", {
    version: useRoute().query._storyblok ? "draft" : "published",
    content_type: "article",
    per_page: 10,
    filter_query: {
      category: {
        in: currentCategory.uuid,
      },
    },
  })
  .then((res) => {
    articles.value = res.data.stories;
    pages.value = res.data.total / perPage;

    return res;
  });

useHead({
  title: `Blog - ` + currentCategory.name,
  meta: [
    {
      // robots: "noindex, follow",
      // hid: "description",
      // name: "description",
      // content: currentCategory.description,
    },
  ],
});
</script>

<style lang="scss"></style>
