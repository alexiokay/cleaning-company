<template lang="pug">
V2BlogPageBase(:articles="articles")
</template>

<script setup lang="ts">
const route = useRoute();

const category = route.path.split("/")[3];

const categories = await getBlogCategories();

const currentCategory = categories.find((cat) => cat.slug === category);

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

    return res;
  });
</script>

<style lang="scss"></style>
