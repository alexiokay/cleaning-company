<template lang="pug">
div
    StoryblokComponent(v-if="story" :blok="story.content")

</template>

<script setup lang="ts">
const { slug } = useRoute().params;

const story = await useAsyncStoryblok(
  slug && slug.length > 0 ? slug.join("/") : "home",
  {
    version: "draft",
  }
);
</script>

<style lang="scss"></style>
