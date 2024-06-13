<template lang="pug">
div(class="w-full")
    input(class="w-full h-[3rem] bg-transparent text-white  py-2 rounded-[0.5rem] focus:outline-none" :placeholder="placeholder" @input="emit('input', $event.target.value)")
    div(class="w-full h-[1px] bg-[#a6a6a6] ")
</template>

<script setup lang="ts">
const emit = defineEmits(["input"]);

const props = defineProps<{
  placeholder: string;
}>();

//
</script>

<style lang="scss"></style>
