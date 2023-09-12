<template lang="pug">
div(class="flex flex-col justify-center bg-[#Fcf2ec] h-full w-full px-2 xl:px-[20%] py-[6rem] md:py-[10rem] ")
  ServiceCustomatizationFinalizationV2(:partner="partner" :title="title" )
    
</template>

<script setup lang="ts">
const route = useRoute();
const router = useRouter();

const title = computed(() => {
  return route.params.title;
});

const partner = ref({
  name: "John",
});

onMounted(() => {
  console.log(title.value);
  console.log(route.params.title);
  console.log(router.currentRoute.value.params.title);
});
</script>

<style lang="scss"></style>
