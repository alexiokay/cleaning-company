<template lang="pug">
div(class="flex flex-col justify-center bg-[#Fcf2ec] h-full w-full px-[20rem] py-[10rem] ")
  div(class="relative w-full bg-[rgba(255,255,255,0.9)] shadow-[0_1px_30px_-15px_rgba(0,0,0,0.4)] h-auto pt-[8rem] pb-[4rem] px-[6rem] rounded-2xl text-center")
    div(class="p-[0.6rem] bg-[#Fcf2ec] absolute left-1/2 transform  -top-[6rem] -translate-x-1/2 rounded-full")
      nuxt-img(src="icons/thank-you-icon.png"  class="h-[10rem] w-[10rem] rounded-full object-cover    ")
    p(class="text-3xl font-bold") Thank you {{ title }}, your contractor {{ partner.name }} will call soon!
    p.mt-2.text-lg Please don't miss the call or the contractor won't be able to provide a free estimate!
    hr(class="my-9")
    div(class="w-full flex gap-x-[4rem]")
      div(class="flex flex-col w-1/2 gap-y-4")
        .flex.w-full.gap-x-4.font-semibold
          CalendarIcon(class="w-6 h-6 text-blue-600")
          p No-Obligation Appointment
        p The contractor will start  your free estimate by taking measurements, exmanining layout and bringing materials for you to look at.
      div(class="flex flex-col w-1/2 gap-y-4")
        .flex.w-full.gap-x-4.font-semibold   
            MessageIcon(class="w-6 h-6 -rotate-[45deg] text-blue-600")
            p You're in control!
        p There is no obligation at this point, it's up to you if you want to move forward.
    
</template>

<script setup lang="ts">
import CalendarIcon from "~icons/mdi/calendar-check";
import MessageIcon from "~icons/uil/message";

const route = useRoute();
const router = useRouter();

const title = computed(() => {
  return route.params.title;
});

const partner = ref({
  name: "John",
});

onMounted(() => {
  console.log(title.value);
  console.log(route.params.title);
  console.log(router.currentRoute.value.params.title);
});
</script>

<style lang="scss"></style>
