<template lang="pug">
button(class="w-auto gap-y-1 gap-x-2 border-[#181526]  border-[1px] rounded-[0.4375rem] items-center justify-center flex  px-[1.5rem] py-[0.8rem] text-center text-semibold ")
    slot(name="icon")
    p(class="text-[#181526] font-bold text-[1rem]") {{ text }}
</template>

<script setup lang="ts">
const props = defineProps({
  text: String,
});
</script>

<style lang="scss"></style>
