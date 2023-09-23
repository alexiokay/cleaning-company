<template lang="pug">
div(class="flex flex-col justify-center bg-[#Fcf2ec] h-full w-full px-2 xl:px-[20%] py-[6rem] md:py-[6rem] ")
  ServiceCustomatizationFinalizationV2(:partner="partner" :title="title" v-if="!userStore.isLogged")
  ServiceCustomatizationFinalizationLoggedIn( v-else)
    
</template>

<script setup lang="ts">
import { useUserStore } from "~/stores/User";
const userStore = useUserStore();

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
