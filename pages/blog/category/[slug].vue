<template lang="pug">
div
  V2BlogPageBase(:articles="articles")
  Pagination(:pages="pages" :page="page"  class="flex justify-center mt-[3rem]" )

</template>

<script setup lang="ts">
const route = useRoute();

const category = route.path.split("/")[3];

const categories = await getBlogCategories();

const currentCategory = categories.find((cat) => cat.slug === category);

const router = useRouter();
const perPage = 12;
const page = computed(() => {
  console.log(route.query.page);
  return route.query.page > 1 ? Number(route.query.page) : 1;
});
const pages = ref(0);

console.log(page);

const activeNav = ref("blog");

const storyblokApi = useStoryblokApi();

watch(
  () => page.value,
  async (newPage) => {
    await fetchArticles();
  }
);
const articles = ref(null);

const fetchArticles = async () => {
  const { data } = await storyblokApi
    .get("cdn/stories", {
      version: useRoute().query._storyblok ? "draft" : "published",
      content_type: "article",
      per_page: perPage,
      page: page.value,
      filter_query: {
        category: {
          in: currentCategory.uuid,
        },
      },
    })
    .then((res) => {
      articles.value = res.data.stories;
      const totalPosts = Number(res.headers.total);
      pages.value = Math.ceil(totalPosts / perPage);
      return res;
    });
};

await fetchArticles();

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
