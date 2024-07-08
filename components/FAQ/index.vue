<template lang="pug">
div(class="flex flex-col w-full bg-white ")
    div(class="flex flex-col text-center gap-y-4 py-12   top-gradient px-[2rem] lg:px-0")
        p(class="font-bold text-[1.6rem] lg:text-4xl") FREQUENTLY ASKED QUESTIONS
        p if you need any further assistance, please don't hestitate to contact us.
    div(class="flex flex-col gap-y-3 py-14 items-center hover:cursor-pointer mb-16 px-8 lg:px-0")
        div(class="relative gap-y-4 flex flex-col  items-center w-full lg:w-[50rem] pb-3 pt-2" v-for="(question, index) in questions" :key="index" @click="toggleQuestion(question)" )
            div(class="w-full justify-between pb-3 flex h-auto"  )
                p(class="font-medium pr-4") {{ question.question }}
                transition(name="rotate" @enter="enterRotate2" @leave="leaveRotate2")
                    PhPlusLight(v-if="!question.isOpen" class="w-4 h-4 right-0 absolute")
                transition(name="rotate" @enter="enterRotate" @leave="leaveRotate")
                    PhMinusLight(v-if="question.isOpen" class="w-4 h-4 right-0 absolute")
                div( class="h-[1px] w-full absolute bottom-0 bg-[#d1d1d1]")
            transition(name="submenu" @enter="enter" @leave="leave")
                p(v-show="question.isOpen" class="w-full  text-xs ") {{ question.answer }}
          
</template>

<script setup lang="ts">
import PhPlusLight from "~icons/ph/plus-light";
import PhMinusLight from "~icons/ph/minus-light";

const questions = ref([
  {
    question: "How do I book a cleaning service?",
    answer:
      "You can book a cleaning service by visiting our website and navigating to the 'Book Now' section. Fill in your details, choose your desired services, and select a convenient date and time.",
    isOpen: false,
  },
  {
    question: "What cleaning products do you use?",
    answer:
      "We use high-quality, eco-friendly cleaning products that are safe for children and pets. Our products are effective in removing stains and dirt while being gentle on your upholstery and carpets.",
    isOpen: false,
  },
  {
    question: "How can I reschedule my cleaning appointment?",
    answer:
      "To reschedule your cleaning appointment, log into your account on our website, go to 'My Bookings', and select 'Reschedule'. Choose a new date and time that works for you.",
    isOpen: false,
  },
  {
    question: "Do you offer any discounts for multiple services?",
    answer:
      "Yes, we offer discounts for booking multiple services. You can receive an additional discount when you select three or more services during the booking process.",
    isOpen: false,
  },
  {
    question: "What areas do you service?",
    answer:
      "We provide our cleaning services across the Netherlands. You can check specific service availability by entering your postal code on our website or contacting our customer service team.",
    isOpen: false,
  },
]);

const toggleQuestion = (question) => {
  // close all except the one clicked
  questions.value.forEach((q) => {
    if (q !== question) {
      q.isOpen = false;
    }
  });
  // toggle the clicked question
  question.isOpen = !question.isOpen;
};
function enterRotate(el, done) {
  // Transition in

  el.style.transform = "rotate(-180deg)";

  requestAnimationFrame(() => {
    el.style.transition = "opacity 0.1s, transform 0.5s";
    el.style.transform = "rotate(0deg)";
    el.style.opacity = "1";
  });

  // Wait for the transition to finish
  el.addEventListener("transitionend", done);
}

function leaveRotate(el, done) {
  // Transition out
  el.style.transition = "opacity 0.1s, transform 0.5s";
  el.style.transform = "rotate(-90deg)";
  el.style.opacity = "0";

  // Wait for the transition to finish
  el.addEventListener("transitionend", done);
}

function enterRotate2(el, done) {
  // Transition in

  el.style.transform = "rotate(0deg)";

  requestAnimationFrame(() => {
    el.style.transition = "opacity 0.1s, transform 0.5s";
    el.style.transform = "rotate(-90deg)";
    el.style.opacity = "1";
  });

  // Wait for the transition to finish
  el.addEventListener("transitionend", done);
}

function leaveRotate2(el, done) {
  // Transition out
  el.style.transition = "opacity 0.1s, transform 0.5s";
  el.style.transform = "rotate(90deg)";
  el.style.opacity = "0";

  // Wait for the transition to finish
  el.addEventListener("transitionend", done);
}

function enter(el, done) {
  // Transition in
  el.style.opacity = "0";
  el.style.height = "0";

  requestAnimationFrame(() => {
    el.style.transition = "opacity 0.2s, height 0.2s";
    el.style.opacity = "1";
    el.style.height = "4rem"; // Adjust the height you want the submenu to expand to

    // Wait for the transition to finish
    el.addEventListener("transitionend", done);
  });
}

function leave(el, done) {
  // Transition out
  el.style.transition = "opacity 0.2s, height 0.2s";
  el.style.opacity = "0";
  el.style.height = "0";

  // Wait for the transition to finish
  el.addEventListener("transitionend", done);
}
</script>

<style lang="scss">
.top-gradient {
  background: linear-gradient(
    to top,
    rgba(250, 250, 250, 0) 0%,
    rgba(250, 250, 250, 5) 60%,
    rgba(250, 250, 250, 0.8) 80%,
    rgb(250, 250, 250) 100%
  );
}
.submenu {
  will-change: opacity, height;
  transition-behavior: allow-discrete;
  overflow: hidden; /* Ensure content outside the height is hidden */
  height: 0; /* Start with 0 height to hide the submenu initially */
  opacity: 0; /* Start with 0 opacity to make it invisible */
}

.submenu-enter-active {
  transition:
    opacity 0.2s ease,
    height 0.2s ease;
}

.submenu-leave-active {
  transition:
    opacity 0.2s ease,
    height 0.2s ease;
}

.rotate-enter-active {
  transition-property: opacity, transform;
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out;
  /* or */
  transition:
    opacity 0.2s ease-in-out,
    transform 0.2s ease-in-out;
  /* or, but this may affect properties you do not want */
  transition: all 0.2s ease-in-out;
}

.rotate-leave-active {
  will-change: opacity, rotate;
}
</style>
