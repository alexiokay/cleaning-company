<template lang="pug">
div
    div(v-editable="blok")
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
