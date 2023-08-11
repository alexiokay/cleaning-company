<template lang="pug">
div(class="w-full h-auto flex flex-col items-center justify-center")
    div(v-editable="blok" class="w-full items-center justify-center flex flex-col gap-y-6 text-center")
        nuxt-img(:src="'https:' + blok.image" class="object-cover h-[30rem] w-full" :alt="blok.image.alt" :title="blok.title" :width="blok.width" :height="blok.height" format="webp")

        div(class="container mx-auto mb-12 text-6xl") {{ blok.title }}
        div(class="container mx-auto mb-12 text-3xl text-start leading-[2.9rem] w-4/5") {{ blok.description }}
        
        div(v-html="resolvedRichText")
        div(class="container mx-auto mb-12") {{ blok.author }}
        

</template>

<script setup lang="ts">
const props = defineProps({
  blok: {
    type: Object,
    required: false,
  },
});

const resolvedRichText = computed(() => {
  return props.blok.content;
});
</script>

<style lang="scss"></style>
