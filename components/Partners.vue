<template lang="pug">
div(class="flex 2xl:px-[19rem]  md:px-[4rem] px-[1rem] py-2 gap-x-[5rem] justify-between")
    nuxt-img(v-for="partner in partners" :src="partner.logo" :alt="'our partner`s logo' + partner.name "  width="250" h="90" class="object-contain w-1/6" format="webp")
   
</template>

<script setup lang="ts">
const partners = ref([
  {
    name: "partner1",
    logo: "images/partners/p1.png",
  },
  {
    name: "partner2",
    logo: "images/partners/p2.png",
  },
  {
    name: "partner3",
    logo: "images/partners/p3.png",
  },
  {
    name: "partner4",
    logo: "images/partners/p4.png",
  },
  {
    name: "partner5",
    logo: "images/partners/p5.png",
  },
]);
</script>

<style lang="scss"></style>
