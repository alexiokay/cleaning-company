<template lang="pug">
nav.pagination(aria-label="")
    ul.list-style-none.flex.gap-x-2
        li.mr-4(@click="$emit('change', 1)")
            a(class="relative block rounded bg-white shadow-sm  px-3 py-1.5 text-lg text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white" href="#!")
                | First
        li(@click="$emit('change', page |+ 2)" v-if="page -1 <pages && page -1 > pages-2")
            a(class="relative block rounded bg-transparent px-3 py-1.5 text-lg text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white", href="#!")
                | {{page-2}}
        li(v-if="page -1 === 0 === false" @click="$emit('change', page - 1)" rel="prev")
            a(class="relative block rounded bg-transparent px-3 py-1.5 text-lg text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white", href="#!")
                | {{page-1}}
        li(aria-current="page")
            a(class="relative block bg-white  shadow-sm rounded bg-primary-100 px-3 py-1.5 text-lg font-medium text-blue-400 transition-all duration-300", href="#!")
                | {{page}}
                
        li(@click="$emit('change', page + 1)" v-if="page + 1 <= pages" rel="next")
            a(class="relative block rounded bg-transparent px-3 py-1.5 text-lg text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white", href="#!")
                | {{page+1}}
        li(@click="$emit('change', page |+ 2)" v-if="page -1 === 0 === true && page + 1 <= pages")
            a(class="relative block rounded bg-transparent px-3 py-1.5 text-lg text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white", href="#!")
                | {{page+2}}
        li.ml-4(@click="$emit('change', pages)")
            a(class="relative block rounded bg-white shadow-sm px-3 py-1.5 text-lg text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white", href="#!")
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
</script>

<style lang="scss"></style>
