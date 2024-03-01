<template lang="pug">
div(class="flex flex-col  h-auto items-center gap-y-2 ")
    slot(name="icon")
    
    p.flex.flex-col.text-center {{ title1 }} 
        span {{ title2 }}
</template>

<script setup lang="ts">
defineProps({
  title1: {
    type: String,
    required: true,
  },
  title2: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss"></style>
