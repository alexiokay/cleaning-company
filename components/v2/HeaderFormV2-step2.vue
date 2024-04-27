<template lang="pug">
MainFormBase
  template(v-slot:content)
      
    MainFormStep2Car(v-if="selected[0] === 'Car'" @next="next")
    MainFormStep2House(v-if="selected[0] === 'House'" @next="next")
                
              

               
  template(v-slot:footer)
    div(class="flex flex-col md:flex-row gap-x-2 gap-y-3")
      input(v-model="startDay" type="date" class="w-full  border-[1px] border-[#181526]  rounded-[0.4375rem] px-[1.5rem] py-[0.5rem]" placeholder="date")
      MainFormNext(@next="next")
                        
                    


</template>

<script setup lang="ts">
import ArrowIcon from "~icons/ion/arrow-back";
import GoBackIcon from "~icons/iconamoon/arrow-left-2-bold";
import { useBookFormStore } from "@/stores/BookForm";
import { storeToRefs } from "pinia";

const {
  startDay,
  additionalServices,
  houseNumber,
  frequency,
  approxSqM,
  selected,
} = storeToRefs(useBookFormStore());

const bookFormStore = useBookFormStore();

// create set of if chain fnctions for each selected service

const emit = defineEmits(["next"]);

const next = () => {
  if (!bookFormStore.validate2Step(selected.value[0])) {
    alert("Please fill the forms to continue");
  } else {
    emit("next");
  }
};
</script>

<style lang="scss">
select {
  -webkit-appearance: none !important;
  -moz-appearance: none !important;
  background-color: #fafafa;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAMAAACtdX32AAAAdVBMVEUAAAD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAhMdQaAAAAJ3RSTlMAAAECAwQGBwsOFBwkJTg5RUZ4eYCHkJefpaytrsXGy8zW3+Do8vNn0bsyAAAAYElEQVR42tXROwJDQAAA0Ymw1p9kiT+L5P5HVEi3qJn2lcPjtIuzUIJ/rhIGy762N3XaThqMN1ZPALsZPEzG1x8LrFL77DHBnEMxBewz0fJ6LyFHTPL7xhwzWYrJ9z22AqmQBV757MHfAAAAAElFTkSuQmCC);
  background-position: 100%;
  background-repeat: no-repeat;
  padding: 0.5rem;
  border-radius: 0;
}
.select-wrapper::after {
  content: "▼";
  font-size: 1rem;
  top: 6px;
  right: 10px;
  position: absolute;
}
</style>
