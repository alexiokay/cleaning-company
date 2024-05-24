<template lang="pug">
MainFormBase
  template(v-slot:content)

        
        div(class="flex w-full h-full gap-x-4  md:bg-white rounded-[1.5rem] relative")
            div(class="w-full h-full flex flex-col gap-y-3 ")
               
                div(class="w-full flex flex-col md:flex-row  gap-x-4 md:mt-6")
                    div(class="flex flex-col w-full md:w-3/5 gap-y-2")
                        p(class="text[#181526] font-bold") Full Name
                        input(v-model="fullName"  class="w-full  border-[1px] border-[#181526]  rounded-[0.4375rem] px-[1.5rem] py-[0.5rem]" placeholder="Your Full Name")
                    div(class="flex flex-col w-full md:w-2/5 gap-y-2")
                        p(class="text[#181526] font-bold") *optional
                        input(v-model="companyName"  class="w-full  border-[1px] border-[#181526]  rounded-[0.4375rem] px-[1.5rem] py-[0.5rem]" placeholder="Company Name")
                div(class="w-full flex flex-col md:flex-row  gap-x-4 items-center ")
                    div(class="flex flex-col w-full md:w-2/5 gap-y-2")
                        p(class="text[#181526] font-bold") E-mail (for replies)
                        input(v-model="email"  class="w-full  border-[1px] border-[#181526]  rounded-[0.4375rem] px-[1.5rem] py-[0.5rem]" placeholder="e.g. name@gmail.com")
                    div(class="flex flex-col w-full md:w-3/5 gap-y-2")
                        p(class="text[#181526] font-bold") Phone
                        input(v-model="phone" class="w-full  border-[1px] border-[#181526]  rounded-[0.4375rem] px-[1.5rem] py-[0.5rem]" placeholder="020-")
                
                
                
  template(v-slot:footer)
    MainFormConsents
              
                        
                    


</template>

<script setup lang="ts">
import ArrowIcon from "~icons/ion/arrow-back";
import GoBackIcon from "~icons/iconamoon/arrow-left-2-bold";
import { useBookFormStore } from "@/stores/BookForm";
import { storeToRefs } from "pinia";

const config = useRuntimeConfig();
const { phone, fullName, companyName, email, termsAgreed } = storeToRefs(
  useBookFormStore()
);
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
