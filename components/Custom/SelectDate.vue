<template lang="pug">
.calendar-box.w-full
  div#dateInput(type="text", placeholder="Select a date", @click="toggleCalendar", class="w-full p-2 border border-gray-300 rounded text-base cursor-pointer select-none")
    p(v-if="!formattedDate") Select a date
    p(v-else) {{ formattedDate }}
  //- Overlay
  //- ClientOnly
  //-   Teleport(to="#teleportDateDropdownHere")
  //-     div(v-show="showCalendar", ref="calendarOverlay", class="absolute top-0 left-0 inset-0 bg-black bg-opacity-50 z-50", @click="toggleCalendar")

  .calendar(v-if="showCalendar", @click.stop, class="mt-[4rem] absolute top-0 left-0 w-full h-auto md:w-auto bg-white rounded-xl drop-shadow-lg z-50 px-2 pb-2 select-none")
    div(class="gap-y-0 flex flex-col")
      .header.flex.justify-between.items-center.px-3.py-2.text-black.rounded-t.gap-x-2
        button(@click="changeMonth(-1)", class="bg-transparent border-none cursor-pointer text-black text-xl md:hover:bg-[#f5f5f5] px-3 py-1 rounded-sm")
          | ‹
        div(class=" w-full text-center py-1 rounded-sm")
          h2.text-xl.font-bold {{ monthYear }}
        button(@click="changeMonth(1)", class="bg-transparent border-none cursor-pointer text-black text-xl md:hover:bg-[#f5f5f5] px-3 py-1 rounded-sm")
          | ›
      .days-names-wrapper(class="bg-[#f5f5f5] mb-2")
        .days-names.flex.flex-wrap
          .day-name(v-for="dayName in dayNames", :key="dayName", class="flex-1 py-3 text-center text-xs uppercase text-black")
            | {{ dayName }}
      .days.grid.grid-cols-7.gap-1.px-2(class="")
        .day(v-for="item in daysOfMonth", :key="item.day", )
          p(v-if="!item.isPlaceholder" :class="{'bg-[#4e37e3] text-white': isSelectedDay(item.day), 'text-gray-500 cursor-not-allowed  ': item.isPast, 'hover:bg-gray-100 cursor-pointer': !item.isPast && !isSelectedDay(item.day)}", @click="selectDay(item)", class="p-2 text-center  rounded transition-colors") {{ item.day || '' }}
          p(v-else class="hover:cursor-default h-auto p-2")  &nbsp;
      div(class="w-full flex gap-x-3 items-center mt-2")
        input(type="time" v-model="startTime" class="w-2/3 p-2 border border-gray-300 rounded text-base cursor-pointer")
        div(class="w-1/3 flex flex-col")
          p {{ formattedDate }}
          p {{ startTime }}
      div(class="w-full flex justify-between mt-2")
        button(@click="showCalendar = false", class="border-[#4e37e3] border-[1px] text-[#4e37e3] py-2 px-4 rounded-md")
          | Cancel
        button(@click="showCalendar = false", class="bg-[#4e37e3] text-white py-2 px-4 rounded")
          | Apply
</template>

<script setup lang="ts">
import { useBookFormStore } from "@/stores/BookForm";
import { storeToRefs } from "pinia";
import { ref, computed } from "vue";

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
  currentDate.value = new Date(
    currentDate.value.getFullYear(),
    currentDate.value.getMonth() + offset,
    1
  );
}

const dayNames = ["M", "T", "W", "T", "F", "S", "S"]; // Adjust according to your start day of week preference

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
  const days = [];
  const start = new Date(
    currentDate.value.getFullYear(),
    currentDate.value.getMonth(),
    1
  );
  const end = new Date(
    currentDate.value.getFullYear(),
    currentDate.value.getMonth() + 1,
    0
  );

  // Get the day of the week the month starts on, adjusted for Monday start
  let firstDayOfWeek = start.getDay();
  firstDayOfWeek = firstDayOfWeek === 0 ? 6 : firstDayOfWeek - 1;

  // Add placeholders for the days before the first day of the month
  for (let i = 0; i < firstDayOfWeek; i++) {
    days.push({ isPlaceholder: true });
  }

  // Add actual days of the month
  for (let day = 1; day <= end.getDate(); day++) {
    const dayDate = new Date(
      currentDate.value.getFullYear(),
      currentDate.value.getMonth(),
      day
    );
    days.push({
      date: dayDate,
      day: dayDate.getDate(),
      isPast: dayDate < today,
      isPlaceholder: false,
    });
  }

  // Calculate the total number of cells
  const totalCells = days.length;

  // Add placeholders for the days after the last day of the month to make 6 rows
  if (totalCells < 42) {
    const remainingCells = 42 - totalCells;
    for (let i = 0; i < remainingCells; i++) {
      days.push({ isPlaceholder: true });
    }
  }

  return days;
});
const selectDay = (day: number) => {
  // check if is past
  if (day.isPast || day.isPlaceholder) {
    return;
  }
  selectedDate.value = new Date(
    currentDate.value.getFullYear(),
    currentDate.value.getMonth(),
    day.day
  );
  startDay.value = selectedDate.value;
  formattedDate.value = selectedDate.value.toLocaleDateString("en-NL");
  console.log(selectedDate.value);
  //showCalendar.value = false;
};
</script>

<style lang="scss"></style>
