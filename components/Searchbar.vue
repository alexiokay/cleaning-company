<template lang="pug">
div.searchbar(class="shadow-md ")
    div.searchbar__container__input(class="w-full flex bg-white items-center pl-6 h-full")
        SearchIcon(class="w-12 h-12")
        input.searchbar__container__input__input(type="text" placeholder="Search" class="px-6 py-4 w-full h-full focus:outline-none")
        div(class="flex border-l-[1px] border-r-[1px] w-[25%] px-2 h-full items-center")
            LocationsIcon(class="w-8 h-8")
            v-select(
                    v-model="vModel"
                    :options="options"
                    
                    
                    class=" w-full h-full outline-none border-none "
                    label="name")
                    <!-- OPTIONALS: :reduce="(supplier) => supplier.id" @option:selected="(supplier)" @option:deselected="(supplier)" -->
            
        button( class="w-[13%] border-l-[1px] flex px-6 items-center gap-x-4  font-bold hover:bg-green-800 h-full hover:text-white") Search 
            SearchIcon(class="w-8 h-8")
    div.searchbar__container__button
        
</template>

<script setup lang="ts">
import SearchIcon from "~icons/tabler/search";
import LocationsIcon from "~icons/carbon/location";

import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";

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
</style>
