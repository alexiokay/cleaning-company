<template lang="pug">
div(class="font-robotolight")
    ServiceCustomatizationZipCode(:service="service" @next="steps.zipCode.active = false, steps.property.active=true" v-show="steps.zipCode.active" class="bg-[#f5f6feff]")
    
    ServiceCustomatizationProgress(class="" v-show="!steps.zipCode.active"  :steps="steps")
    
    // heading 1
    div(v-show="steps.zipCode.active")
        ServiceCustomatizationWhyUs(:points="WhyUsPoints" :image="'https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&w=1600'")
          
        ServiceCustomatizationHeading2(:service="service" :image1="'https://images.pexels.com/photos/5746250/pexels-photo-5746250.jpeg?auto=compress&cs=tinysrgb&w=1600'" :image2="'https://images.pexels.com/photos/6775404/pexels-photo-6775404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'")
            template(v-slot:subtitle) Need to clean your swimming pool? It’s more affordable than you think.
            template(v-slot:title1) Tidy floors and carpets
            template(v-slot:content1) When the elements have damaged your roof and repairs no longer solve the problem, replacement is needed.
            template(v-slot:title2) Shining Windows!
            template(v-slot:content2) When the elements have damaged your roof and repairs no longer solve the problem, replacement is needed.
        ServiceCustomatizationHeading3(:service="service" :image="'https://images.pexels.com/photos/1506996/pexels-photo-1506996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'")
            template(slot:subtitle) Need to clean your house? It’s more affordable than you think.

        ServiceCustomatizationWhy(class="")
        ServiceCustomatizationGallery(class="xl:px-[22%] p-8 " :images="gallery")
        ServiceCustomatizationBenefits(:title="'Benefits Of Non-water car cleaning'" :image2="'https://images.squarespace-cdn.com/content/v1/5a7fb700d74cffd8f02428bf/1562963990030-6BEHR6KLRW1TFCZK3FMB/how-to-remove-waterspots.jpg'" :image1="'https://images.pexels.com/photos/2280568/pexels-photo-2280568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'" )
            template(v-slot:subtitle) Waterless car cleaning significantly reduces water usage. Traditional car washing can use hundreds of gallons of water per wash, whereas waterless methods use a minimal amount or no water at all.
            template(v-slot:benefit1) Environmental Friendliness
            template(v-slot:benefit2) No Water Spots
        ServiceCustomatizationZipCodeForm(:service="service" @next="steps.zipCode.active = false, steps.property.active=true" :isBg="false" class="")
        ServiceCustomatizationSubServices()
        ServiceCustomatizationHow
        ServiceCustomatizationTrust
        ServiceCustomatizationTestimonials( )
        ServiceCustomatizationZipCodeForm(:service="service" @next="steps.zipCode.active = false, steps.property.active=true" :isBg="false" class="")


</template>

<script setup lang="ts">
definePageMeta({
  NavbarColor: "#f5f6feff",
});

const WhyUsPoints = ref([
  {
    title: "100% satisfaction guaranteed",
  },
  {
    title: "Competitive local pricing",
  },
  {
    title: "Skimming and Surface Cleaning",
  },
  {
    title: "Vacuuming",
  },
  {
    title: "Chemical Testing and Balancing",
  },
  {
    title: "Filter Cleaning and Maintenance",
  },
  {
    title: "Tile and Grout Cleaning",
  },
  {
    title: "Algae Removal",
  },
  {
    title: "Tile Line Scrubbing",
  },
  {
    title: "Regular Maintenance Plans",
  },
]);
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

const gallery = ref([
  "https://images.pexels.com/photos/6460876/pexels-photo-6460876.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/6957108/pexels-photo-6957108.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/1540297/pexels-photo-1540297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/3775158/pexels-photo-3775158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
]);

const isFirstStep = computed(() => {
  return steps.value.zipCode.active;
});

const service = {
  name: "Swimming pool",
  icon: "icons/icon_23.png",
  link: "/swimming-pool-cleaning",
};
</script>

<style lang="scss"></style>
