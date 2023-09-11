<template lang="pug">
div(class="flex flex-col w-full justify-start items-center gap-y-3 py-8   xl:px-[26%] p-8  ")
            h3(class="md:text-3xl font-bold font-flamabook") {{ service.name }} cleaning
            h4(class="text-lg ")
                slot(name="subtitle")

            nuxt-img(:src="image" provider="ipx" class="rounded-xl h-[49vh] w-full object-cover")
</template>

<script setup lang="ts">
defineProps({
  image: {
    type: String,
    required: true,
  },
  service: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="scss"></style>
