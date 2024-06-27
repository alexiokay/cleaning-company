<template lang="pug">
div.searchbar(class="w-full lg:w-[40rem]")
    div.searchbar__container__input(class="w-full flex items-center  h-full bg-[#f2f2f2] rounded-[4px]  " tabindex="0")
        input.searchbar__container__input__input(type="text" placeholder="Search" class=" bg-transparent py-[0.85rem] w-full h-full pl-6 focus:outline-none " @input="$emit('search', $event.target.value)"  v-model="search")
       
        button( class="w-auto flex pr-4 pl-5  items-center gap-x-4  font-bold h-full") 
    
            CarbonSearch(class="w-[1.55rem] h-[1.55rem] text-slate-700")

    
        
        
</template>

<script setup lang="ts">
import CarbonSearch from "~icons/carbon/search";
import LocationsIcon from "~icons/carbon/location";

const emit = defineEmits(["search"]);
const vModel = ref("all country");
const options = [
  { id: 1, name: "all country" },
  { id: 2, name: "bar" },
  { id: 3, name: "baz" },
];
</script>

<style lang="scss">
.vs--searchable .vs__dropdown-toggle {
  height: 100%;
  border: none;
}

.vs__dropdown-menu {
  left: -2.3rem;
}

.searchbar__container__input:focus-within {
  outline: 2px solid #000000;
  box-shadow: 0px 0px 0px 1px #000000;
}
</style>
