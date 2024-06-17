<template lang="pug">
div(class="flex flex-col md:flex-row gap-x-2 mt-6")
    div(class="w-full flex gap-x-2 text-xs  rounded-[0.4375rem]  py-[0.5rem]" )
        input(v-model="termsAgreed" type="checkbox" class="w-5 h-5")
        p I agree to use my contact details to be contacted by Fresh and Tidy regarding to be used for marketing purposes.
    button(@click="book" class="w-full md:w-[16rem] h-[2.6rem] mt-2 text-white bg-[#563CF9] rounded-[0.4375rem]  items-center flex justify-center gap-x-3") 
        <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.25 3L9.125 7.125L13.25 9L9.125 10.875L7.25 15L5.375 10.875L1.25 9L5.375 7.125L7.25 3ZM7.25 6.6225L6.5 8.25L4.8725 9L6.5 9.75L7.25 11.3775L8 9.75L9.6275 9L8 8.25L7.25 6.6225ZM14.75 6.75L13.805 4.695L11.75 3.75L13.805 2.8125L14.75 0.75L15.6875 2.8125L17.75 3.75L15.6875 4.695L14.75 6.75ZM14.75 17.25L13.805 15.195L11.75 14.25L13.805 13.3125L14.75 11.25L15.6875 13.3125L17.75 14.25L15.6875 15.195L14.75 17.25Z" fill="#E8E8E9"/>
        </svg>
        p Send
</template>

<script setup lang="ts">
import { useBookFormStore } from "@/stores/BookForm";
import { useUserStore } from "@/stores/User";
import { storeToRefs } from "pinia";

const config = useRuntimeConfig();
const { phone, fullName, companyName, email, termsAgreed, step } =
  storeToRefs(useBookFormStore());

const userStore = useUserStore();
const bookFormStore = useBookFormStore();

const decideApiEndpoint = () => {
  if (bookFormStore.selected[0] === "Car") {
    return "car-quotes";
  } else if (bookFormStore.selected[0] === "Couse") {
    return "house-quotes";
  } else if (bookFormStore.selected[0] === "Couch") {
    return "couch-quotes";
  } else if (bookFormStore.selected[0] === "Carpet") {
    return "carpet-quotes";
  } else {
    return "quotes";
  }
};

const SendQuoteToApi = async () => {
  const data = {
    //service_type: bookFormStore.selected[0],
    full_name: fullName.value,
    company_name: companyName.value,
    email: email.value,
    phone: phone.value,
    frequency: bookFormStore.frequency,
    car_size: bookFormStore.carSize,
    car_package: bookFormStore.carPackage,
    start_day: bookFormStore.startDay?.toISOString().substring(0, 10),
    // add start_time to data if it is not null
    ...(bookFormStore.startTime && { start_time: bookFormStore.startTime }),
    // termsAgreed: termsAgreed.value,
    approx_sqm: bookFormStore.approxSqM,
    zip_code: bookFormStore.zipCode,
    house_number: bookFormStore.houseNumber,
  };
  try {
    const endpoint = decideApiEndpoint();

    // create const headers but not incluide Authorization if userStore.getToken is null
    const headers = {
      "Content-Type": "application/json",
    };
    if (userStore.getIsLogged) {
      headers.Authorization = "Token " + userStore.getToken;
    }

    const response = await fetch(
      config.public.API_URL + `api/v1/${endpoint}/`,
      {
        method: "POST",
        headers: headers,
        body: JSON.stringify(data),
      }
    );

    if (response.status === 201) {
      console.log("Quote successfully sent");
      step.value += 1;
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
const emit = defineEmits(["book"]);

const book = async () => {
  console.log(
    "phone: ",
    phone.value,
    "fullName: ",
    fullName.value,
    "companyName: ",
    companyName.value,
    "email: ",
    email.value,
    "termsAgreed: ",
    termsAgreed.value
  );
  if (
    phone.value === "" ||
    fullName.value === "" ||
    // companyName.value === "" ||
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
</script>

<style lang="scss"></style>
