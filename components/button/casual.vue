<template lang="pug">
button(:class="isSelected? 'buttonSelected' : ''" class="disabled:bg-[rgba(0,0,0,0.25)] w-auto select-none gap-y-1 gap-x-2 border-[#181526]  border-[1px] rounded-[0.4375rem] items-center text-[#181526] justify-center flex px-[0.8rem]  lg:px-[1.5rem] py-[0.4rem] lg:py-[0.5rem] text-center text-semibold ")
    div(:class="isSelected? 'buttonSelected-icon' : ''")
      slot( name="icon")
    p(class=" font-bold text-[1rem]") {{ text }}
</template>

<script setup lang="ts">
const props = defineProps({
  text: String,
  isSelected: Boolean,
});
</script>

<style lang="scss">
.buttonSelected {
  background-color: #7863fa;
  color: white;
}

// .buttonSelected-icon {
//   filter: invert(100%);
// }
</style>
