<template lang="pug">
.custom-select-container.h-full
        button(class="custom-select-button w-full h-full  bg-white border-[1px] border-[#181526] hover:border-gray-500 px-[1.5rem] py-[0.5rem] rounded-[0.4375rem] shadow leading-tight focus\:outline-none focus\:shadow-outline " type='button') Select an option
        .custom-select-options
          div.custom-select-option(data-value='option1' v-for="option in props.options" :key="option" class="gap-x-4")
            Icon(:name="option.icon" class="w-7 h-7")
            span {{option.title}}
       
   
</template>

<script setup lang="ts">
const props = defineProps({
  options: {
    type: Array,
    required: true,
    default: () => [],
  },
});

onMounted(() => {
  // Get the button that opens the dropdown
  const selectButton = document.querySelector(".custom-select-button");
  // Get the dropdown content
  const selectOptions = document.querySelector(".custom-select-options");
  // Toggle the dropdown content when the button is clicked
  selectButton.addEventListener("click", () => {
    selectOptions.style.display =
      selectOptions.style.display === "block" ? "none" : "block";
  });
  // Close the dropdown content when the user clicks outside of it
  window.addEventListener("click", (event) => {
    if (!selectButton.contains(event.target)) {
      selectOptions.style.display = "none";
    }
  });
});
</script>

<style lang="scss">
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
.custom-select-option img {
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 0.5rem;
}
.custom-select-option:hover {
  background-color: #f7fafc;
}
</style>
