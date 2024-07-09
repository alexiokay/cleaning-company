<template lang="pug">
nav.pagination(aria-label="")
    ul.list-style-none.flex.gap-x-2(class="w-auto")
        li.mr-4()
            NuxtLink(:to="{path: currentPath, query: {page: 1}}" class="relative block rounded bg-white shadow-sm  px-3 py-1.5 text-lg text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white" )
                | First
        li(v-if="page - 1 < pages && page - 2 == pages - 1")
            NuxtLink(:to="{path: currentPath, query: {page: page - 2}}" class="relative block rounded bg-transparent px-3 py-1.5 text-lg text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white", )
                | {{ page - 2 }}
        li(v-if="page - 1 > 0"  rel="prev")
            NuxtLink(:to="{path: currentPath, query: {page: page - 1}}" class="relative block rounded bg-transparent px-3 py-1.5 text-lg text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white", )
                | {{ page - 1 }}
        li(aria-current="page")
            a(class="relative block bg-white shadow-sm rounded bg-primary-100 px-3 py-1.5 text-lg font-medium text-blue-400 transition-all duration-300", )
                | {{ page }}
        li( v-if="page + 1 <= pages" rel="next")
            NuxtLink(:to="{path: currentPath, query: {page: page + 1}}" class="relative block rounded bg-transparent px-3 py-1.5 text-lg text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white", )
                | {{ page + 1 }}
        li( v-if="page - 1 === 0 && page + 1 <= pages")
            NuxtLink(:to="{path: currentPath, query: {page: page + 2}}" class="relative block rounded bg-transparent px-3 py-1.5 text-lg text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white", )
                | {{ page + 2 }}
        li.ml-4()
            NuxtLink(:to="{path: currentPath, query: {page: pages}}" class="relative block rounded bg-white shadow-sm px-3 py-1.5 text-lg text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white", )
                | Last

</template>

<script setup lang="ts">
defineProps({
  pages: {
    type: Number,
    required: true,
  },
  page: {
    type: Number,
    required: true,
  },
});

const route = useRoute();
const currentPath = ref(route.path);
</script>

<style lang="scss"></style>
