<template lang="pug">
.custom-select-container.h-full(class="")
        button(ref="selectButton" class="custom-select-button w-full h-full overflow-hidden text-ellipsis flex items-center gap-x-3 bg-white border-[1px] border-[#181526] hover:border-gray-500 px-[1.5rem] py-[0.5rem] rounded-[0.4375rem] shadow leading-tight focus\:outline-none focus\:shadow-outline " type='button')
            nuxt-img(:src="choosed? choosed.icon : ''" class="w-auto h-6 object-contain" v-if="choosed")
            GgSelect(class="w-6 h-6" v-if="!choosed")
            p(:class="!choosed? 'text-gray-500 font-light': ''" ) {{ choosed? choosed.title.split(' ')[0] : 'Choose here' }}
        .custom-select-options(ref="selectOptions")
          div.custom-select-option(@click="choose(option)" data-value='option1' v-for="option in props.options" :key="option" class="gap-x-4")
            //- Icon(:name="option.icon" class="w-7 h-7")
            nuxt-img(:src="option.icon" class="w-[3rem] h-7 object-contain")
            span.font-semibold {{option.title.split(' ')[0]}}
            span(class="-ml-3" v-if="hasSpace(option.title)") {{ option.title.substring(option.title.indexOf(' ') + 1) }}
       
   
</template>

<script setup lang="ts">
import GgSelect from "~icons/gg/select";

const props = defineProps({
  options: {
    type: Array,
    required: true,
    default: () => [],
  },
});

const choosed = ref(null);
const selectButton = ref(null);
const selectOptions = ref(null);

const emit = defineEmits(["choose"]);

const hasSpace = (title: string) => {
  return title.includes(" ");
};

const choose = (option: string) => {
  choosed.value = option;
  emit("choose", option.value);
};

onMounted(() => {
  // Get the button that opens the dropdown

  // Get the dropdown content
  // Toggle the dropdown content when the button is clicked
  selectButton.value.addEventListener("click", () => {
    selectOptions.value.style.display =
      selectOptions.value.style.display === "block" ? "none" : "block";
  });
  // Close the dropdown content when the user clicks outside of it
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
    width: 220%;
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
