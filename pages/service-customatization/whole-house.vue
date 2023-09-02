<template lang="pug">
div(class="font-robotolight")
    ServiceCustomatizationZipCode(:service="service" @next="steps.zipCode.active = false, steps.property.active=true" v-show="steps.zipCode.active")
    ServiceCustomatizationProgress(class="" v-show="!steps.zipCode.active"  :steps="steps")
    
    // heading 1
    div(class="flex flex-col w-full h-auto py-9 justify-center items-center gap-y-3 px-[26%]  ")
        h3(class="md:text-3xl font-bold") Whole house cleaning
        h4(class="text-lg ") Need to clean whole house or just some signle rooms? It’s more affordable than you think.
        div(class="flex w-full  justify-between items-start gap-x-6 mt-3")
            div(class="w-auto h-full  py-8 flex flex-col items-start justify-start")
                div(class="flex w-full items-center gap-x-4 text-lg font-bold")
                    CheckIcon
                    p 100% satisfaction guaranteed
                div(class="flex items-center gap-x-4")
                    CheckIcon
                    p Competitive local pricing
            nuxt-img(src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?cs=srgb&dl=pexels-binyamin-mellish-106399.jpg&fm=jpg" height="1000" width="600" format="webp" provider="ipx" class="rounded-xl w-[60%] h-[25rem] object-cover")
    // heading 2
    div(class="flex flex-col w-full justify-start items-center gap-y-3 py-8  bg-[#f5f6feff] px-[26%] ")
        h3(class="md:text-3xl font-bold font-flamabook") Whole house cleaning
        h4(class="text-lg ") Need to clean whole house or just some signle rooms? It’s more affordable than you think.
        div(class="flex w-full  justify-center items-start gap-x-[6rem] mt-3")
            div(class="flex flex-col h-auto gap-y-6 text-lg")
                nuxt-img(src="https://www.homebuddy.com/static/roofing/roofing-services/roofing-replacement-desktop.webp" format="webp" provider="ipx" class="rounded-xl")
                h5.text-xl Replacement
                p When the elements have damaged your roof and repairs no longer solve the problem, replacement is needed.
            div(class="flex flex-col h-full gap-y-6  text-lg")
                nuxt-img(src="https://www.homebuddy.com/static/roofing/roofing-services/roofing-repair-desktop.webp" provider="ipx" class="rounded-xl")
                h5.text-xl Replacement
                p When the elements have damaged your roof and repairs no longer solve the problem, replacement is needed.
    ServiceCustomatizationZipCodeForm(:service="service" @next="steps.zipCode.active = false, steps.property.active=true" v-show="steps.zipCode.active" class="")
    // heading 3
    div(class="flex flex-col w-full justify-start items-center gap-y-3 py-8   px-[26%] ")
        h3(class="md:text-3xl font-bold font-flamabook") Whole house cleaning
        h4(class="text-lg ") Need to clean whole house or just some signle rooms? It’s more affordable than you think.
        nuxt-img(src="https://www.homebuddy.com/static/roofing/extreme-weather-desktop.webp" provider="ipx" class="rounded-xl")


</template>

<script setup lang="ts">
import CheckIcon from "~/assets/icons/check.svg";

const steps = ref({
  zipCode: {
    active: true,
    question: "What is your ZIP code?",
    answers: [],
  },
  property: {
    active: false,
    question: "Where do you need the cleaning service?",
    answers: [
      {
        title: "Residential Home",
        answered: false,
      },
      {
        title: "Apartment/Condo",
        answered: false,
      },
      {
        title: "Office/Commercial Space",
        answered: false,
      },
      {
        title: "Retail Store",
        answered: false,
      },
      {
        title: "Industrial Facility",
        answered: false,
      },
      {
        title: "Other",
        answered: false,
      },
    ],
  },
  often: {
    active: false,
    question: "How often do you need the cleaning service?",
    answers: [
      {
        title: "Industrial Facility",
        answered: false,
      },
      {
        title: "Other",
        answered: false,
      },
    ],
  },
  areas: {
    active: false,
    question: "What areas do you want to be cleaned?",
    answers: [],
  },
  size: {
    active: false,
    question: "Approximately how large is the area that needs cleaning?",
    answers: [],
  },
  specific: {
    active: false,
    question:
      "Are there any specific areas of concern or additional services you need?",
    answers: [],
  },
  date: {
    active: false,
    question: "When do you need the service?",
    answers: [],
  },
  contact: {
    active: false,
    question: "How should we contact you?",
    answers: [],
  },
  confirm: {
    active: false,
    question: "Please confirm your phone number.",
    answers: [],
  },
  completed: {
    active: false,
    question: "Thank you for your request!",
    answers: [],
  },
});
const service = {
  name: "Whole House",
  icon: "icons/icon_23.png",
  link: "/service-customatization/whole-house",
};
</script>

<style lang="scss"></style>
