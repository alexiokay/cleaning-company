<template lang="pug">
div(class="w-[100vw] lg:w-auto h-full bg-[#FAFAFA] rounded-[1.4rem] lg:rounded-[3rem] flex flex-col lg:flex-row  px-4 md:px-[4rem] py-[3rem] lg:py-[auto] gap-y-3 gap-x-[3.25rem] ")
        
        div(class="flex w-auto flex-col gap-y-3 lg:py-[4.5rem]")
          
          div(class="flex border-black  border-[1px] rounded-full w-[1/3] lg:w-[22rem] h-10 font-bold text-black items-center justify-center gap-x-4 py-4")
                  p Search 
                  ArrowIcon(class="rotate-[180deg]")
                  p Book & Pay
                  ArrowIcon(class="rotate-[180deg]")
                  p Relax
          h1(class="mt-[1rem] lg:mt-[3.94rem]  text-[1.7rem] lg:text-[3rem] font-bold") Book a cleaning service
              p(class="text-[#7863FA]") in your area
          //- p(class="mt-auto text-[1.7rem] ml-auto") Price: 
          //-   span(class="font-semibold") {{ computedPrice }}&#8364
    
        div(class="flex w-full lg:w-[39rem] flex-col gap-y-3 justify-center")
         
          div(class="flex w-full h-auto gap-x-4 md:p-[2.5rem] md:bg-white rounded-[1.5rem] relative"  )
                div(class="w-full h-full flex flex-col gap-y-3 text-center ")
                    p Inquiry has been sent.
                        p We will notify you of any response!
                    p.text-xl.font-bold.mt-8 Would you like to
                        p add another service?

                    flex(class="flex flex-col gap-y-2 items-center")
                        button(@click="$emit('done')" class="w-[10rem] h-auto gap-y-1 gap-x-2 border-[#4E37E3] text-[#4E37E3] font-bold border-[1px] rounded-[0.4375rem] items-center justify-center flex  px-[1.5rem] py-[0.5rem] text-center text-semibold ")
                            p No, that's all
        
                        button(@click="$emit('done')" class="w-[10rem] h-auto gap-y-1 gap-x-2 bg-[#4E37E3] font-bold border-[1px] rounded-[0.4375rem] items-center text-white justify-center flex  px-[1.5rem] py-[0.5rem] text-center text-semibold ")
                            p  Sure!
                          
                           
                            
                        
    
    
</template>

<script setup lang="ts">
import ArrowIcon from "~icons/ion/arrow-back";
import GoBackIcon from "~icons/iconamoon/arrow-left-2-bold";
import { useBookFormStore } from "@/stores/BookForm";
import { storeToRefs } from "pinia";

const { phone, fullName, companyName, email } = storeToRefs(useBookFormStore());

const bookFormStore = useBookFormStore();

const emit = defineEmits(["book"]);

const book = () => {
  if (
    phone.value === "" ||
    fullName.value === "" ||
    companyName.value === "" ||
    email.value === ""
  ) {
    alert("Please fill the forms to continue");
  } else {
    emit("book");
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
