<template lang="pug">
div(class="w-auto h-full bg-[#FAFAFA] rounded-[3rem] flex px-[4rem] py-[7.5rem] gap-y-3 gap-x-[3.25rem] ")
    
    div(class="flex w-auto flex-col gap-y-3")
        
        div(class="flex border-black  border-[1px] rounded-full w-[22rem] h-10 font-bold text-black items-center justify-center gap-x-4 py-4")
                p Search 
                ArrowIcon(class="rotate-[180deg]")
                p Book & Pay
                ArrowIcon(class="rotate-[180deg]")
                p Relax
        h1(class="mt-[3.94rem] text-[3rem] font-bold") Find a cleaning service
            p(class="text-[#7863FA]") in your area

    div(class="flex w-[39rem] flex-col gap-y-3")
        
        div(class="flex w-full h-full gap-x-4 p-[2.5rem] bg-white rounded-[1.5rem] relative")
            div(class="w-full h-full flex flex-col gap-y-3 ")
                div(class="flex gap-x-2 w-full absolute top-3 items-center text-sm")
                    GoBackIcon(@click="$emit('goBack')" class="w-6 h-6 text-[#181526] hover:cursor-pointer")
                    p(class="") Chosen: House, Garden  Search in: 100DG, Amsterdam, Netherlands
                div(class="w-full flex gap-x-4 mt-6")
                    div(class="flex flex-col w-3/5 gap-y-2")
                        p(class="text[#181526] font-bold") Full Name
                        input(v-model="fullName"  class="w-full  border-[1px] border-[#181526]  rounded-[0.4375rem] px-[1.5rem] py-[0.5rem]" placeholder="Your Full Name")
                    div(class="flex flex-col w-2/5 gap-y-2")
                        p(class="text[#181526] font-bold") *optional
                        input(v-model="companyName"  class="w-full  border-[1px] border-[#181526]  rounded-[0.4375rem] px-[1.5rem] py-[0.5rem]" placeholder="Company Name")
                div(class="w-full flex gap-x-4 items-center ")
                    div(class="flex flex-col w-2/5 gap-y-2")
                        p(class="text[#181526] font-bold") E-mail (for replies)
                        input(v-model="email"  class="w-full  border-[1px] border-[#181526]  rounded-[0.4375rem] px-[1.5rem] py-[0.5rem]" placeholder="e.g. name@gmail.com")
                    div(class="flex flex-col w-3/5 gap-y-2")
                        p(class="text[#181526] font-bold") Phone
                        input(v-model="phone" class="w-full  border-[1px] border-[#181526]  rounded-[0.4375rem] px-[1.5rem] py-[0.5rem]" placeholder="020-")
                
                
                
                div(class="flex gap-x-2 mt-6")
                    div(class="w-full flex gap-x-2 text-xs  rounded-[0.4375rem]  py-[0.5rem]" )
                        input(v-model="termsAgreed" type="checkbox" class="w-5 h-5")
                        p I agree to use my contact details to be contacted by Fresh and Tidy regarding to be used for marketing purposes.
                    button(@click="book" class="w-[16rem] h-[2.6rem] mt-2 text-white bg-[#563CF9] rounded-[0.4375rem]  items-center flex justify-center gap-x-3") 
                        <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.25 3L9.125 7.125L13.25 9L9.125 10.875L7.25 15L5.375 10.875L1.25 9L5.375 7.125L7.25 3ZM7.25 6.6225L6.5 8.25L4.8725 9L6.5 9.75L7.25 11.3775L8 9.75L9.6275 9L8 8.25L7.25 6.6225ZM14.75 6.75L13.805 4.695L11.75 3.75L13.805 2.8125L14.75 0.75L15.6875 2.8125L17.75 3.75L15.6875 4.695L14.75 6.75ZM14.75 17.25L13.805 15.195L11.75 14.25L13.805 13.3125L14.75 11.25L15.6875 13.3125L17.75 14.25L15.6875 15.195L14.75 17.25Z" fill="#E8E8E9"/>
                        </svg>
                        p Send
                        
                    


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

const bookFormStore = useBookFormStore();

const emit = defineEmits(["book"]);

const book = async () => {
  if (
    phone.value === "" ||
    fullName.value === "" ||
    companyName.value === "" ||
    email.value === "" ||
    termsAgreed.value === false
  ) {
    alert("Please fill the forms to continue");
  } else {
    const isQuoteSent = await SendQuoteToApi();
    if (isQuoteSent === true) {
      emit("book");
    } else {
      alert("Something went wrong, please try again later");
    }
  }
};

const SendQuoteToApi = async () => {
  const data = {
    service_type: bookFormStore.selected[0],
    full_name: fullName.value,
    company_name: companyName.value,
    email: email.value,
    phone: phone.value,
    frequency: bookFormStore.frequency,
    start_day: bookFormStore.startDay,
    // termsAgreed: termsAgreed.value,
    approx_sqm: bookFormStore.approxSqM,
    zip_code: bookFormStore.zipCode,
    house_number: bookFormStore.houseNumber,
  };
  try {
    const response = await fetch(config.public.API_URL + "api/v1/quotes/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.status === 201) {
      console.log("Quote successfully sent");
      return true;
    } else {
      console.log("Failed to send quote, status code: ", response.status);
      return false;
    }
  } catch (error) {
    console.error("Error sending quote: ", error);
    return false;
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
