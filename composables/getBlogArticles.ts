export const getBlogArticles = async (
  perPage: number,
  filter_query: Object | null
) => {
  const storyblokApi = useStoryblokApi();

  const blogArticles = await storyblokApi
    .get("cdn/stories", {
      version: useRoute().query._storyblok ? "draft" : "published",
      starts_with: "blog",
      is_startpage: false,
      per_page: perPage,
      filter_query: filter_query,
    })
    .then((res) => {
      articles.value = res.data.stories;
      pages.value = res.data.total / perPage;
      return res;
    });

  return blogArticles;
};
