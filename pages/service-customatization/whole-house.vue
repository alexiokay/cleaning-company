<template lang="pug">
div
    ServiceCustomatizationZipCode(:service="service" @next="steps.zipCode.active = false, steps.property.active=true" v-show="steps.zipCode.active")
    ServiceCustomatizationProgress(class="" v-show="!steps.zipCode.active"  :steps="steps")
</template>

<script setup lang="ts">
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
