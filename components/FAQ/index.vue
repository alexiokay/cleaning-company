<template lang="pug">
div(class="flex flex-col w-full bg-white")
    div(class="flex flex-col text-center gap-y-4 py-12   top-gradient")
        p(class="font-bold text-[1.6rem] lg:text-4xl") FREQUENTLY ASKED QUESTIONS
        p if you need any further assistance, please don't hestitate to contact us.
    div(class="flex flex-col gap-y-3 py-14 items-center hover:cursor-pointer mb-16 px-8 lg:px-0")
        div(class="relative gap-y-4 flex flex-col  items-center w-full lg:w-[50rem] pb-3 pt-2" v-for="(question, index) in questions" :key="index" @click="question.isOpen = !question.isOpen" )
            div(class="w-full justify-between pb-3 flex h-auto"  )
                p(class="font-medium") {{ question.question }}
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
    question: "How do I track my order?",
    answer:
      "You can track your order by visiting the 'Track Your Order' page and entering your order number and email address.",
    isOpen: false,
  },
  {
    question: "How do I return an item?",
    answer:
      "You can return an item by visiting the 'Returns' page and following the instructions provided.",
    isOpen: false,
  },
  {
    question: "How do I cancel an order?",
    answer:
      "You can cancel an order by visiting the 'Orders' page and selecting the order you wish to cancel.",
    isOpen: false,
  },
  {
    question: "How do I contact customer service?",
    answer:
      "You can contact customer service by visiting the 'Contact Us' page and filling out the contact form.",
    isOpen: false,
  },
  {
    question: "How do I change my account details?",
    answer:
      "You can change your account details by visiting the 'Account Settings' page and updating your information.",
    isOpen: false,
  },
]);

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
    el.style.height = "1.6rem"; // Adjust the height you want the submenu to expand to

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
