<template lang="pug">
div(class="flex flex-col gap-y-5")
    div(class="w-full flex justify-between items-center ")
            div(class="flex items-center w-auto px-1 py-1  bg-[#fcf2ec] rounded-lg gap-x-1")
                button(@click="viewMode = 'month'" :class="viewMode === 'month'? 'bg-[#ce7541] text-white ': ''" class="rounded-lg px-4 py-2 text-lg") month
                button(@click="viewMode = 'week'" :class="viewMode === 'week'? 'bg-[#ce7541] text-white ': ''" class=" rounded-lg px-4 py-2 text-lg") week
                button(@click="viewMode = 'day'" :class="viewMode === 'day'? 'bg-[#ce7541] text-white': ''" class="rounded-lg px-4 py-2 text-lg") day
    div(class="w-full flex justify-between items-center")
        p(class="text-xl font-bold") September 2018
    div(class="rounded-lg  border-2 relative ")
        

        table(class=" table-auto w-full") <!--  fixed/auto -->
            thead(class="border-b-2 border-gray-200 h-[6rem]")
                tr  
                    th(class="px-4 py-2 border-r  w-[13.4%] bg-[#fcf2ec]") Monday
                    th(class="px-4 py-2 border-r w-[13.4%] bg-[#fcf2ec]") Tuesday
                    th(class="px-4 py-2 border-r w-[13.4%] bg-[#fcf2ec]") Wednesday
                    th(class="px-4 py-2 border-r w-[13.4%] bg-[#fcf2ec]") Thursday
                    th(class="px-4 py-2 border-r w-[13.4%] bg-[#fcf2ec]") Friday
                    th(class="px-4 py-2 border-r w-[13.4%] bg-[#fcf2ec]") Saturday
                    th(class="px-4 py-2 w-[13.4%] bg-[#fcf2ec]") Sunday
            tbody(class="")
                tr(id="end-of-list") 
                    
                tr( v-for="week in weeks" :key="date" class="border-t  h-[10rem]" ) 
                    //:id="detectEndOfList(i)"
                
                        
                    td(class="relative border-r px-4 py-2  space-x-4 items-center text-lg ") 
                        p(:class="{'text-gray-400': !isCurrentMonth(week[0])}" class="absolute top-4 right-4 text-base" ) {{ week[0]?.day }}
                    
                        SchedulerEvent(:events="week[0]?.events")
                        
                    td(class="relative border-r px-4 py-2 text-lg")
                        p(:class="{'text-gray-400': !isCurrentMonth(week[1])}" class="absolute top-4 right-4 text-base" ) {{ week[1]?.day }}
                        SchedulerEvent(:events="week[1]?.events")
                        
                    td(class="relative border-r px-4 py-2")
                        p(:class="{'text-gray-400': !isCurrentMonth(week[2])}" class="absolute top-4 right-4 text-base" ) {{ week[2]?.day }}
                        SchedulerEvent(:events="week[2]?.events")
                    td(class="relative border-r px-4 py-2")
                        p(:class="{'text-gray-400': !isCurrentMonth(week[3])}" class="absolute top-4 right-4 text-base" ) {{ week[3]?.day }}
                        SchedulerEvent(:events="week[3]?.events")
                    td(class="relative border-r px-4 py-2")
                        p(:class="{'text-gray-400': !isCurrentMonth(week[4])}" class="absolute top-4 right-4 text-base" ) {{ week[4]?.day }}
                        SchedulerEvent(:events="week[4]?.events")
                    td(class="relative border-r px-4 py-2")
                        p(:class="{'text-gray-400': !isCurrentMonth(week[5])}" class="absolute top-4 right-4 text-base" ) {{ week[5]?.day }}
                        SchedulerEvent(:events="week[5]?.events")
                    td(class="relative px-4 py-2   gap-x-2")
                        p(:class="{'text-gray-400': !isCurrentMonth(week[6])}" class="absolute top-4 right-4  text-base" ) {{ week[6]?.day }}
                        SchedulerEvent(:events="week[6]?.events")
                
    
                    
</template>

<script setup lang="ts">
const isMounted = ref(false);
onMounted(() => {
  isMounted.value = true;
});

type ViewMode = "month" | "week" | "day";

const viewMode: ViewMode = ref("month");
// const detectEndOfList = (index: number) => {
//   if (index === filteredAccounts.value.length - 1) {
//     return "end-of-list";
//   }
// };

const isCurrentMonth = (week) => {
  if (week.date.getMonth() === new Date().getMonth()) {
    return true;
  }
};

interface DateObject {
  day: number;
  id: number;
  date: Date;
  is_open: boolean;
  events: Array<string>;
  is_fetched: boolean;
}

type Event = {
  title: string;
  partner: string;
  is_open: boolean;
  events: Array<string>;
};

const createFakeEvent = () => {
  // randomly create an event

  const createRandomHour = (startsWith = 0) => {
    const randomHour = Math.floor(Math.random() * 24);
    if (randomHour < startsWith) {
      return createRandomHour(startsWith);
    }
    return randomHour;
  };

  const eventStartsWith = createRandomHour();
  const eventEndsWith = createRandomHour(eventStartsWith);
  const event: Event = {
    title: "Event",
    partner: "Partner",
    is_open: true,
    events: ["event1", "event2"],
    start: eventStartsWith,
    end: eventEndsWith,
  };
  return event;
};

function getDatesForMonth(month: number, year: number): DateObject[] {
  // Validate the input month and year
  if (isNaN(month) || month < 0 || month > 11 || isNaN(year)) {
    throw new Error("Invalid month or year.");
  }

  // Get the first day of the specified month and year
  const firstDayOfMonth = new Date(year, month, 1);

  // Get the number of days in the specified month and year
  const lastDayOfMonth = new Date(year, month + 1, 0);
  const numberOfDays = lastDayOfMonth.getDate();

  // Initialize an array to hold the DateObject instances
  const dateObjs: DateObject[] = [];

  // Loop through all days in the specified month
  for (let day = 1; day <= numberOfDays; day++) {
    // Create a new Date object for each day
    const dateObj: DateObject = {
      day: day,
      id: 0, // You can set this value based on your logic
      date: new Date(year, month, day),
      is_open: false, // You can set this value based on your logic
      events: [createFakeEvent()], // You can set this value based on your logic
    };

    // Push the DateObject to the array
    dateObjs.push(dateObj);
  }

  return dateObjs;
}

// Example usage:
const month = 7; // August (0-based index, so 7 represents August)
const year = 2023;
const dateObjs = ref(getDatesForMonth(month, year));
console.log(dateObjs);

const populateCalendar = (
  dates: Array<DateObject>,
  currentDate: Date
): Array<DateObject> => {
  // Create a new Date object for the first day of the current month
  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  );

  // Get the day of the week for the first day of the current month
  const firstDayOfWeek = firstDayOfMonth.getDay();

  // Create a new Date object for the last day of the current month
  const lastDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  );

  // Get the day of the week for the last day of the current month
  const lastDayOfWeek = lastDayOfMonth.getDay();

  // Create an array to hold the days in the calendar
  const allDays: Array<DateObject> = [];

  // Calculate the date of the first day in the calendar
  const startOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    2 - firstDayOfWeek
  );

  // Calculate the date of the last day in the calendar
  const endOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    lastDayOfMonth.getDate() + (18 - lastDayOfWeek)
  );

  // Loop through each day in the calendar and add it to the allDays array
  let dateIterator = new Date(startOfMonth);
  while (dateIterator <= endOfMonth) {
    const day: DateObject = {
      day: dateIterator.getDate(),
      date: new Date(dateIterator),
      id: 0,
      is_open: false,
      events: [createFakeEvent()],
      is_fetched: false,
    };
    dates.forEach((date) => {
      if (date.date.toDateString() === dateIterator.toDateString()) {
        day.id = date.id;
        day.is_open = date.is_open;
        day.events = date.events;
        day.is_fetched = true;
      }
    });
    allDays.push(day);
    dateIterator.setDate(dateIterator.getDate() + 1);
  }

  return allDays;
};

const days = computed(() => {
  return populateCalendar(dateObjs.value, new Date());
});
const firstWeek = computed(() => {
  return days.value.slice(0, 7);
});
const secondWeek = computed(() => {
  return days.value.slice(7, 14);
});
const thirdWeek = computed(() => {
  return days.value.slice(14, 21);
});
const fourthWeek = computed(() => {
  return days.value.slice(21, 28);
});
const fifthWeek = computed(() => {
  return days.value.slice(28, 35);
});
const sixthWeek = computed(() => {
  return days.value.slice(35, 42);
});

const weeks = computed(() => {
  return [
    firstWeek.value,
    secondWeek.value,
    thirdWeek.value,
    fourthWeek.value,
    fifthWeek.value,
    sixthWeek.value,
  ];
});
</script>

<style lang="scss"></style>
