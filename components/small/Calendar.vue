<template lang="pug">
client-only
    VDatePicker(v-model="date" :attributes="attrs")

</template>

<script setup lang="ts">
const date = ref(new Date());

const attrs = ref([
  {
    key: "today",
    highlight: {
      color: "green",
      fillMode: "solid",
    },
    dates: new Date(),
  },
]);
</script>

<style lang="scss"></style>
