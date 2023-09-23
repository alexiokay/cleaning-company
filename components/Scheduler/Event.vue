<template lang="pug">
ClientOnly
    Suspense
        div.event(v-for="event in events" ref="event"  :style="{left: (event.start / 24 * 100) + '%'}"  class="group absolute text-[#6e5353] hover:cursor-pointer top-[50%] gap-x-2 translate-y-[-50%] bottom-0 margin-y-0 h-1/4 w-auto  bg-[#fcf2ec] px-3 py-2  rounded-lg flex  justify-start items-center text-base gap-y-2")
            p.font-bold  {{event?.title}}
            div(class="relative flex h-full items-center w-full min-w-content gap-x-1")
                p {{event?.start}} 
                p -
                p {{event?.end}}
                SchedulerEventDropdown(v-if="event?.is_open" class="hidden group-hover:flex")
    template(#placeholder )
        div.event(v-for="event in events" ref="event"  :style="{left: (event.start / 24 * 100) + '%'}"  class="suspense-loading-animation absolute text-[#6e5353] blur-[50%] hover:cursor-pointer top-[50%] gap-x-2 translate-y-[-50%] bottom-0 margin-y-0 h-1/4 w-[10rem]  bg-[#d7d7d7] px-3 py-2  rounded-lg flex  justify-start items-center text-base gap-y-2")
        
        

</template>

<script setup lang="ts">
defineProps({
  events: {
    type: Array,
    required: true,
  },
});

const event = ref(null);

//
onMounted(async () => {
  // detect if hover on event and show dropdown

  event.value.forEach((event) => {
    event.addEventListener("mouseenter", () => {
      console.log("mouseenter");
      event.is_open = true;
    });
    event.addEventListener("mouseleave", () => {
      console.log("mouseleave");
      event.is_open = false;
    });
  });

  nextTick(() => {
    detectCollisions(event);
  });
});
const detectCollisions = (event: Event) => {
  const eventElements = document.querySelectorAll(".event");

  for (let i = 0; i < eventElements.length; i++) {
    for (let j = i + 1; j < eventElements.length; j++) {
      const eventA = eventElements[i];
      const eventB = eventElements[j];

      const rectA = eventA.getBoundingClientRect();
      const rectB = eventB.getBoundingClientRect();

      if (
        rectA.right > rectB.left &&
        rectA.left < rectB.right &&
        rectA.top < rectB.bottom &&
        rectA.bottom > rectB.top
      ) {
        // Events are overlapping; move eventB below eventA

        eventB.style.top = "130px";
      }
    }
  }
};
</script>

<style lang="scss">
.suspense-loading-animation {
  animation: loading 0.5s infinite;
}

@keyframes loading {
  0% {
    background: #d7d7d7;
  }
  50% {
    background: #eaeaea;
  }
  100% {
    background: #d7d7d7;
  }
}
</style>
