<template lang="pug">
div
    div(v-editable="blok")
        StoryblokComponent(v-for="blok in blok.body" :key="blok._uid" :blok="blok")
</template>

<script setup lang="ts">
defineProps({
  blok: {
    type: Object,
    required: false,
  },
});
</script>

<style lang="scss"></style>
