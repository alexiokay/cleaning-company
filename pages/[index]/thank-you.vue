<template lang="pug">
p {{ title }}
p dsds
</template>

<script setup lang="ts">
const route = useRoute();
const router = useRouter();

const title = computed(() => {
  return route.params.title;
});

onMounted(() => {
  console.log(title.value);
  console.log(route.params.title);
  console.log(router.currentRoute.value.params.title);
});
</script>

<style lang="scss"></style>
