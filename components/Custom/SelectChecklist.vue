<template lang="pug">
.custom-select-container.h-full
  button(ref="selectButton" class="custom-select-button w-full h-full max-h-[3rem] overflow-hidden text-ellipsis flex items-center gap-x-4 bg-white border-[1px] border-[#181526] hover:border-gray-500 px-[1.5rem] py-[0.5rem] rounded-[0.4375rem] shadow leading-tight focus\:outline-none focus\:shadow-outline" type='button')
    p(class="text-nowrap text-ellipsis overflow-hidden max-w-[18rem] ") {{ selectedOptions.length > 0 ? selectedOptions.map(o => o.title).join(', ') : 'Choose here' }}
  .custom-select-options(ref="selectOptions" class="max-h-[18rem] overflow-y-auto")
    div.custom-select-option(v-for="option in props.options" :key="option.value" @click.stop="toggleSelection(option)" class="gap-x-2")
      input(type="checkbox" @input="toggleSelection(option)" :checked="isSelected(option)" class="w-7 h-7" @click.stop)
      span.font-semibold {{option.title}}
      span.price(v-if="option.price" class="ml-auto") {{option.price}}

</template>

<script setup lang="ts">
const props = defineProps({
  options: {
    type: Array,
    required: true,
    default: () => [],
  },
});

const selectedOptions = computed({
  get: () => props.options.filter((o) => o.active),
  set: (value) => {
    props.options.forEach((o) => {
      o.active = value.some((v) => v.value === o.value);
    });
  },
});
const selectButton = ref(null);
const selectOptions = ref(null);

const emit = defineEmits(["update:options"]);

const hasSpace = (title: string) => title.includes(" ");

const toggleSelection = (option) => {
  option.active = !option.active;
  selectedOptions.value = [...selectedOptions.value];
  emit("update:options", selectedOptions.value);
};

const isSelected = (option) =>
  selectedOptions.value.some((o) => o.value === option.value);

onMounted(() => {
  selectButton.value.addEventListener("click", () => {
    selectOptions.value.style.display =
      selectOptions.value.style.display === "block" ? "none" : "block";
  });

  window.addEventListener("click", (event) => {
    if (!selectButton.value.contains(event.target)) {
      selectOptions.value.style.display = "none";
    }
  });
});
</script>

<style lang="scss" scoped>
.custom-select-container {
  position: relative;
  display: inline-block;
  width: 100%;
}
.custom-select-options {
  position: absolute;
  margin-top: 0.25rem;
  width: 100%;
  background-color: white;
  border: 1px solid #cbd5e0;
  border-radius: 0.375rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  z-index: 10;
  display: none;
}

@media screen and (min-width: 640px) {
  .custom-select-options {
    width: 150%;
  }
}
.custom-select-option {
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  cursor: pointer;
}

.custom-select-option:hover {
  background-color: #f7fafc;
}
</style>
