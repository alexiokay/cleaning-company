<template lang="pug">
div
    StoryblokComponent(v-if="story" :blok="story.content" :blokinfo="story")

    

</template>

<script setup lang="ts">
const { slug } = useRoute().params;

console.log(slug);
const story = await useAsyncStoryblok(
  slug && slug.length > 0 ? "/blog/" + slug : "home",
  {
    version: "draft",
  }
);

definePageMeta({
  type: "article",
});
</script>

<style lang="scss"></style>
