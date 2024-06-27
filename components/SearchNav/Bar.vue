<template lang="pug">
transition(name="fade") 
        div(v-if="isSearchOpen")
            div(class="fixed top-0 left-0 w-full h-full bg-black opacity-40 -z-50" @click="$emit('close')" )
            div#search_navbar(class="absolute top-0 left-0 w-full bg-white z-50 items-center flex flex-col justify-start text-center")
                div(class="flex w-full lg:w-auto py-[3.63rem] items-center justify-center p-4 gap-x-[9rem] relative z-50")
                    SearchbarV1(@search="startSearching")
                    button(@click="$emit('close')" class="text-[#181526] hidden lg:flex text-lg font-medium absolute lg:-right-[13rem]")
                        PhPlusLight(class="w-8 h-8 rotate-[45deg]")  
                div(class="flex flex-col w-full h-auto items-center justify-center pb-[2.66rem]")
                    ClientOnly
                        template(v-if="!isSearching && results.length > 0")
                            Suspense
                                template(#default)
                                    SearchNavResults(:results="results" class="w-full h-full")
                                template(#fallback)
                                    p(class="suspense-loading-animation  text-[#6e5353] blur-[50%] hover:cursor-pointer gap-x-2  bottom-0 margin-y-0 bg-[#d7d7d7] px-3 py-2 rounded-lg flex justify-start items-center text-base gap-y-2")
                                        | Sorry we couldn't find any results
                        template(v-if="isSearching")
                            p(class="suspense-loading-animation  text-[#6e5353] blur-[50%] hover:cursor-pointer  gap-x-2  bottom-0 margin-y-0 bg-[#d7d7d7] px-3 py-2 rounded-lg flex justify-start items-center text-base gap-y-2")
                                | Loading results...
                               
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import PhPlusLight from "~icons/ph/plus-light";

const props = defineProps({
  isSearchOpen: Boolean,
});

const emit = defineEmits(["close"]);

const isSearching = ref(false);
const results = ref([]);

const startSearching = (word: string) => {
  if (word.length < 3) {
    results.value = []; // Clear previous results if the input is too short
    return;
  }
  getResults(word);
};

const getResults = async (query: string) => {
  //TODO: on backend return result category to after click see all results redirect to the page with category?? or check how it works on their website
  isSearching.value = true;
  results.value = []; // Clear results before starting a new search

  try {
    // Simulate an asynchronous operation with a delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Simulate fetching search results
    results.value = [
      {
        image: "https://via.placeholder.com/150",
        link: "/",
        title: "2024 Social Media Calendar",
      },
      {
        image: "https://via.placeholder.com/150",
        link: "/",
        title: "2024 Social Media Calendar",
      },
      {
        image: "https://via.placeholder.com/150",
        link: "/",
        title: "2024 Social Media Calendar",
      },
      {
        image: "https://via.placeholder.com/150",
        link: "/",
        title: "2024 Social Media Calendar",
      },
    ];

    console.log(results.value);
  } catch (error) {
    console.error("Error fetching results:", error);
  } finally {
    isSearching.value = false;
  }
};

const handleClickOutside = (e: MouseEvent) => {
  const searchNavbar = document.querySelector("#search_navbar");
  const navbarSearchButton = document.querySelector("#navbar_search_button");

  if (navbarSearchButton && searchNavbar) {
    if (
      !navbarSearchButton.contains(e.target as Node) &&
      !searchNavbar.contains(e.target as Node)
    ) {
      emit("close");
    }
  }
};

onMounted(() => {
  document.body.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  document.body.removeEventListener("click", handleClickOutside);
});
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
