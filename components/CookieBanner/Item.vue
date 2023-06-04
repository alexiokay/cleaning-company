<template lang="pug">
div(class="flex w-full space-x-2 justify-between text-xs font-bold")
  p(@click="isOpen = !isOpen"  class="w-[1rem] h-full hover:cursor-pointer" ) >
  div(class="flex flex-col w-full h-auto text-[0.6rem] font-bold gap-y-3 ")
      div(@click="isOpen = !isOpen" class="flex w-full justify-between text-base font-semibold -mb-2 hover:cursor-pointer ")
          p {{ title }}
          p(v-if="type" class="text-green-600") {{ type }}
          label(v-else class="relative inline-flex items-center cursor-pointer")
            input(type="checkbox" value="" class="sr-only peer" checked)
            div(class="w-11 h-6 bg-gray-200 rounded-full peer  dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#3ed35a]")
  

      p(@click="isOpen = !isOpen"  class="hover:cursor-pointer") {{ description }}
      div(v-if="isOpen" class="w-full h-auto bg-[#2a2a2a] rounded-lg py-4 px-2 flex flex-col gap-y-2 text-white")
          slot(name="sub-items")
        
</template>

<script setup lang="ts">
const isOpen = ref(false);

defineProps({
  title: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
    required: true,
  },
});
</script>

<style lang="scss"></style>
