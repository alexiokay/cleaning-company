<template lang="pug">
.calendar-box.w-full
  div#dateInput(type="text", placeholder="Select a date", @click="toggleCalendar",  class="w-full p-2 border border-gray-300 rounded text-base cursor-pointer")
    
    p(v-if="!formattedDate") Select a date
    p(v-else) {{ formattedDate }}
  //- Overlay
  //- ClientOnly
  //-   Teleport(to="#teleportDateDropdownHere")
  //-     div(v-show="showCalendar", ref="calendarOverlay" class="absolute  top-0 left-0 inset-0 bg-black bg-opacity-50 z-50", @click="toggleCalendar")

  .calendar(v-if="showCalendar", @click.stop, class="mt-[4rem] absolute top-0 left-0 w-full h-auto md:w-auto bg-white rounded-xl shadow-lg z-50 p-2 gap-y-2 flex flex-col")
    .header.flex.justify-between.items-center.px-3.py-2.text-black.rounded-t
      button(@click="changeMonth(-1)", class="bg-transparent border-none cursor-pointer text-black text-xl")
        | ‹
      h2.text-xl.font-bold {{ monthYear }}
      button(@click="changeMonth(1)", class="bg-transparent border-none cursor-pointer text-black text-xl")
        | ›
    .days-names-wrapper(class="bg-[#f5f5f5] -mt-2")
      .days-names.flex.flex-wrap
        .day-name(v-for="dayName in dayNames", :key="dayName", class="flex-1 py-3 text-center text-xs uppercase text-black")
          | {{ dayName }}
    .days.grid.grid-cols-7.gap-1.py-2(class="-mt-2")
      .day( v-for="item in daysOfMonth", :key="item.day", :class="{'bg-[#4e37e3] text-white': isSelectedDay(item.day), 'text-gray-500 cursor-not-allowed': item.isPast, 'hover:bg-gray-100': !item.isPast && !isSelectedDay(item.day)}", @click="selectDay(item.day)", class="p-2 text-center cursor-pointer rounded transition-colors")
        p() {{ item.day }}
      
    div(class="w-full flex gap-x-3 ")

      input(type="time" v-model="startTime" class="w-2/3 p-2 border border-gray-300 rounded text-base cursor-pointer")
      div(class="w-1/3 flex flex-col")
        p {{ formattedDate }}
        p {{ startTime }}

    div(class="w-full flex justify-between ")
      button(@click="showCalendar = false", class="border-[#4e37e3] border-[1px] text-[#4e37e3] py-2 px-4 rounded-md")
        | Cancel
      button(@click="showCalendar = false", class="bg-[#4e37e3] text-white py-2 px-4 rounded")
        | Apply

</template>

<script setup lang="ts">
import { useBookFormStore } from "@/stores/BookForm";
import { storeToRefs } from "pinia";

const showCalendar = ref(false);
const selectedDate = ref<Date | null>(null);
const currentDate = ref(new Date());

const calendarOverlay = ref(null);
const formattedDate = ref("");

const { startDay, startTime } = storeToRefs(useBookFormStore());

function toggleCalendar() {
  showCalendar.value = !showCalendar.value;
}

function changeMonth(offset: number) {
  currentDate.value.setMonth(currentDate.value.getMonth() + offset);
}

const dayNames = ["S", "M", "T", "W", "T", "F", "S"]; // Adjust according to your start day of week preference

const monthYear = computed(
  () =>
    `${currentDate.value.toLocaleString("default", {
      month: "long",
    })} ${currentDate.value.getFullYear()}`
);

const today = new Date();
today.setHours(0, 0, 0, 0); // Normalize today's date

function isSelectedDay(day: number) {
  return (
    selectedDate.value &&
    day === selectedDate.value.getDate() &&
    currentDate.value.getMonth() === selectedDate.value.getMonth()
  );
}

const daysOfMonth = computed(() => {
  const start = new Date(
    currentDate.value.getFullYear(),
    currentDate.value.getMonth(),
    1
  );
  const days = [];
  while (start.getMonth() === currentDate.value.getMonth()) {
    const dayDate = new Date(start);
    days.push({
      day: dayDate.getDate(),
      isPast: dayDate < today,
    });
    start.setDate(start.getDate() + 1);
  }
  return days;
});

const selectDay = (day: number) => {
  // check if is past
  if (day < today.getDate()) {
    return;
  }
  selectedDate.value = new Date(
    currentDate.value.getFullYear(),
    currentDate.value.getMonth(),
    day
  );
  startDay.value = selectedDate.value;
  formattedDate.value = selectedDate.value.toLocaleDateString("en-US");
  console.log(selectedDate.value);
  //showCalendar.value = false;
};

onMounted(() => {
  const mainFormComponent = document.getElementById("main-form-component");
  if (calendarOverlay.value && mainFormComponent) {
    // Set size to cover the entire component
    calendarOverlay.value.style.width = mainFormComponent.offsetWidth + "px";
    calendarOverlay.value.style.height = mainFormComponent.offsetHeight + "px";
  }
});
</script>

<style lang="scss"></style>
