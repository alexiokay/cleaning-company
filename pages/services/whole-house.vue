<template lang="pug">
div(class="")
    ServiceCustomatizationZipCode(:service="service" @next="steps.zipCode.active = false, steps.property.active=true" v-if="steps.zipCode.active" class="bg-[#f5f6feff]")
    ServiceCustomatizationProgress(class=" px-4" v-show="!steps.zipCode.active"  :steps="steps" @closeProgress="steps.zipCode.active = true")
    
    // heading 1
    div(v-show="steps.zipCode.active")
        ServiceCustomatizationWhyUs(:points="WhyUsPoints"  :image="'https://images.pexels.com/photos/4108676/pexels-photo-4108676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'")
          
        ServiceCustomatizationHeading2(:service="service" :image1="'https://images.pexels.com/photos/4107286/pexels-photo-4107286.jpeg?auto=compress&cs=tinysrgb&w=1600'" :image2="'https://images.pexels.com/photos/4239146/pexels-photo-4239146.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'")
          template(v-slot:subtitle) Need to clean your house? It’s more affordable than you think.
          template(v-slot:title1) Tidy floors and carpets
          template(v-slot:content1) When the elements have damaged your roof and repairs no longer solve the problem, replacement is needed.
          template(v-slot:title2) Shining Windows!
          template(v-slot:content2) When the elements have damaged your roof and repairs no longer solve the problem, replacement is needed.
        ServiceCustomatizationHeading3(:service="service" :image="'https://images.pexels.com/photos/6197121/pexels-photo-6197121.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'")
          template(v-slot:subtitle) Need to clean whole house or just some signle rooms? It’s more affordable than you think.
        ServiceCustomatizationWhy(class="")
        ServiceCustomatizationGallery(class="xl:px-[26%] md:p-8 " :images="gallery")
        ServiceCustomatizationBenefits(:title="'Benefits Of Non-water car cleaning'" :image2="'https://images.squarespace-cdn.com/content/v1/5a7fb700d74cffd8f02428bf/1562963990030-6BEHR6KLRW1TFCZK3FMB/how-to-remove-waterspots.jpg'" :image1="'https://images.pexels.com/photos/2280568/pexels-photo-2280568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'" )
            template(v-slot:subtitle) Waterless car cleaning significantly reduces water usage. Traditional car washing can use hundreds of gallons of water per wash, whereas waterless methods use a minimal amount or no water at all.
            template(v-slot:benefit1) Environmental Friendliness
            template(v-slot:benefit2) No Water Spots
        ServiceCustomatizationSubServices()
        ServiceCustomatizationHow
        ServiceCustomatizationTrust
        ServiceCustomatizationTestimonials( )
        ServiceCustomatizationZipCodeForm(:service="service" @next="steps.zipCode.active = false, steps.property.active=true" :isBg="false" class="")


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

const WhyUsPoints = ref([
  {
    title: "100% satisfaction guaranteed",
  },
  {
    title: "Competitive local pricing",
  },
  {
    title: "Dishes cleaning",
  },
  {
    title: "Carpet cleaning",
  },
  {
    title: "Plants watering",
  },
]);

const gallery = ref([
  "https://images.pexels.com/photos/9507284/pexels-photo-9507284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/1358900/pexels-photo-1358900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/5998138/pexels-photo-5998138.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/1910472/pexels-photo-1910472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
]);

const isFirstStep = computed(() => {
  return steps.value.zipCode.active;
});

const service = {
  name: "House",
  icon: "icons/icon_23.png",
  link: "/whole-house",
};
</script>

<style lang="scss"></style>
