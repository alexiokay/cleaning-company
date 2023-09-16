<template lang="pug">
button#back(@click="goBack" class="md:absolute md:bottom-[2rem] md:left-[8.5rem]  mt-4 ml-4 text-black bg-gray-100 font-base text-xs py-[0.5rem] px-7 rounded-full focus:outline-none focus:shadow-outline")
    p &lt; Wróć   
</template>

<script setup lang="ts">
const router = useRouter();
const goBack = () => {
  try {
    router.back();
  } catch (error) {
    router.push("/");
  }
};
</script>

<style lang="sass"></style>
