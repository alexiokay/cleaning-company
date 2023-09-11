<template lang="pug">
div(class="flex flex-col w-full justify-start items-center gap-y-3 py-8  bg-[#f5f6feff] xl:px-[26%] px-8 ")
    h3(class="md:text-3xl font-bold font-flamabook") Why Trust Us?
    ul(class="flex w-full  justify-between items-start mt-8 flex-wrap gap-y-8 ")
        li(class="flex flex-col w-[calc(50%-1rem)] lg:w-[calc(30%-2rem)]  gap-y-3" v-for="point in points")
            nuxt-img(:src="point.icon" class="w-12 h-12 aspect-square object-cover")
            p(class="font-bold text-lg") {{ point.title }}
            p(class="") {{ point.description }}
        
        
</template>

<script setup lang="ts">
const points = [
  {
    title: "Licensed Local Contractors",
    description:
      "You’ll work with honest and experienced professionals from the beginning to end of your roofing project.",
    icon: "icons/icon_23.png",
  },
  {
    title: "Fully Customizable Services",
    description:
      "You can customize your cleaning project to fit your needs and budget. We’ll help you find the right solution for your home.",
    icon: "icons/icon_23.png",
  },
  {
    title: "We’re Here To Help",
    description:
      "Our customer service team is available 24/7 to answer your questions and help you schedule your cleaning project.",
    icon: "icons/icon_23.png",
  },
  {
    title: "Simpathy & Empathy",
    description:
      "We understand that your home is your sanctuary. We’ll treat your home, family and belongings with the utmost care and respect.",
    icon: "icons/icon_23.png",
  },
  {
    title: "Satisfaction Guaranteed",
    description:
      "If you’re not satisfied with our work, we’ll do everything we can to make it right. If you’re still not happy, we’ll refund your money.",
    icon: "icons/icon_23.png",
  },
  {
    title: "Great Reviews",
    description:
      "We have hundreds of 5-star reviews from happy customers. Check out our reviews to see what people are saying about our services.",
    icon: "icons/icon_23.png",
  },
];
</script>

<style lang="scss"></style>
