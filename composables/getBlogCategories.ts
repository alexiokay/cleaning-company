export const getBlogCategories = async () => {
  const storyblokApi = useStoryblokApi();

  const blogCategories = await storyblokApi
    .get("cdn/stories", {
      starts_with: "categories/",
      version: "published",
    })
    .then((res) => {
      const data: any = res.data.stories;
      const error = res.error;
      if (error) {
        console.log(error);
      } else {
        return data;
      }
    });

  return blogCategories;
};
