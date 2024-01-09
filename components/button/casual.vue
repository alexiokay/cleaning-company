<template lang="pug">
button(class="w-auto gap-y-1 gap-x-2 border-[#181526]  border-[1px] rounded-[0.4375rem] items-center text-[#181526] justify-center flex  px-[1.5rem] py-[0.5rem] text-center text-semibold ")
    slot(name="icon")
    p(class=" font-bold text-[1rem]") {{ text }}
</template>

<script setup lang="ts">
const props = defineProps({
  text: String,
});
</script>

<style lang="scss">
.buttonSelected {
  background-color: #7863fa;
  color: white;
}
</style>
