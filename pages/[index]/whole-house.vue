<template lang="pug">
div(class="font-robotolight")
    ServiceCustomatizationZipCode(:service="service" @next="steps.zipCode.active = false, steps.property.active=true" v-show="steps.zipCode.active" class="bg-[#f5f6feff]")
    ServiceCustomatizationProgress(class="" v-show="!steps.zipCode.active"  :steps="steps")
    
    // heading 1
    div(v-show="steps.zipCode.active")
        div(class="flex flex-col w-full h-auto py-9 justify-center items-center gap-y-3 xl:px-[26%] p-8   ")
            h3(class="md:text-3xl font-bold") Why us?
            h4(class="text-lg ") We offer a wide range of customizable services to meet every type of need.
            div(class="flex w-full  flex-col sm:flex-row justify-between items-start gap-x-6 mt-3")
                div(class="w-auto h-full  py-8 flex flex-col items-start gap-y-2 justify-start")
                    div(class="flex w-full items-center gap-x-4 text-lg font-bold")
                        CheckIcon
                        p 100% satisfaction guaranteed
                    div(class="flex items-center gap-x-4")
                        CheckIcon
                        p Competitive local pricing
                    div(class="flex items-center gap-x-4")
                        CheckIcon
                        p Dishes cleaning
                    div(class="flex items-center gap-x-4")
                        CheckIcon
                        p Carpet cleaning
                    div(class="flex items-center gap-x-4")
                        CheckIcon
                        p Plants watering
                nuxt-img(src="https://images.pexels.com/photos/4108676/pexels-photo-4108676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" height="1000" width="600" format="webp" provider="ipx" class="rounded-xl sm:w-[60%] h-[25rem] object-cover")
        // heading 2
        div(class="flex flex-col w-full justify-start items-center gap-y-3 py-8  bg-[#f5f6feff] xl:px-[26%] p-8 ")
            h3(class="md:text-3xl font-bold font-flamabook") House cleaning
            h4(class="text-lg ") Need to clean your house? It’s more affordable than you think.
            div(class="flex w-full  justify-center items-start gap-x-6 md:gap-x-[6rem] mt-3")
                div(class="flex flex-col h-auto gap-y-6 text-lg")
                    nuxt-img(src="https://images.pexels.com/photos/4107286/pexels-photo-4107286.jpeg?auto=compress&cs=tinysrgb&w=1600" format="webp" provider="ipx" class="rounded-xl object-cover h-[20.5vh]")
                    h5.text-xl Tidy floors and carpets
                    p When the elements have damaged your roof and repairs no longer solve the problem, replacement is needed.
                div(class="flex flex-col h-full gap-y-6  text-lg")
                    nuxt-img(src="https://images.pexels.com/photos/4239146/pexels-photo-4239146.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" provider="ipx" class="rounded-xl object-cover h-[20.5vh]")
                    h5.text-xl Shining Windows!
                    p When the elements have damaged your roof and repairs no longer solve the problem, replacement is needed.
        // heading 3
        div(class="flex flex-col w-full justify-start items-center gap-y-3 py-8   xl:px-[26%] p-8  ")
            h3(class="md:text-3xl font-bold font-flamabook") Whole house cleaning
            h4(class="text-lg ") Need to clean whole house or just some signle rooms? It’s more affordable than you think.
            nuxt-img(src="https://images.pexels.com/photos/6197121/pexels-photo-6197121.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" provider="ipx" class="rounded-xl h-[49vh] w-full object-cover")

        ServiceCustomatizationWhy(class="")
        ServiceCustomatizationGallery(class="xl:px-[26%] p-8 ")
        ServiceCustomatizationBenefits( )
        ServiceCustomatizationZipCodeForm(:service="service" @next="steps.zipCode.active = false, steps.property.active=true" :isBg="false" class="")
        ServiceCustomatizationSubServices()
        ServiceCustomatizationHow
        ServiceCustomatizationTrust
        ServiceCustomatizationTestimonials( )
        ServiceCustomatizationZipCodeForm(:service="service" @next="steps.zipCode.active = false, steps.property.active=true" :isBg="false" class="")


</template>

<script setup lang="ts">
import CheckIcon from "~/assets/icons/check.svg";

definePageMeta({
  NavbarColor: "#f5f6feff",
});

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
        title: "Often / recurring",
        answered: false,
      },
      {
        title: "One time only",
        answered: false,
      },
    ],
  },
  areas: {
    active: false,
    question: "What areas do you want to be cleaned?",
    answers: [
      {
        title: "Kitchen",
        answered: false,
      },
      {
        title: "Bathroom",
        answered: false,
      },
      {
        title: "Bedroom",
        answered: false,
      },
      {
        title: "Living room",
        answered: false,
      },
      {
        title: "Dining room",
        answered: false,
      },
      {
        title: "Hallway",
        answered: false,
      },
      {
        title: "Stairs",
        answered: false,
      },
      {
        title: "Basement",
        answered: false,
      },
      {
        title: "Garage",
        answered: false,
      },
      {
        title: "Office",
        answered: false,
      },
      {
        title: "Other",
        answered: false,
      },
    ],
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
    answers: [
      {
        title: "Email",
        answered: false,
      },
      {
        title: "Phone",
        answered: false,
      },
    ],
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

const isFirstStep = computed(() => {
  return steps.value.zipCode.active;
});

const service = {
  name: "Whole House",
  icon: "icons/icon_23.png",
  link: "/whole-house",
};
</script>

<style lang="scss"></style>
