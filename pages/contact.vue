<template lang="pug">
div(class="w-full flex flex-col lg:flex-row lg:pt-12")
  div(class="w-full lg:w-3/5 gap-y-[4rem] flex flex-col px-4 xl:pl-[15vw] pr-4 py-[2rem] lg:py-[5rem]")
    h1(class="text-5xl lg:text-8xl font-bold") Let's get 
      p in touch
    h4(class="text-2xl lg:text-3xl font-semibold lg:mt-6") Don't be affraid to
      p say hello with us!
    div(class="flex  flex-col gap-y-6")
      div(class="flex flex-col gap-y-2")
        h3(class="text-xl ") Phone
        p(class="text-lg font-semibold") 065 7705 530
      
      div(class="flex flex-col gap-y-2")
        h3(class="text-xl ") Email
        p(class="text-lg font-semibold") alexispace@freshandtidy.nl
      div(class="flex flex-col gap-y-2")
        h3(class="text-xl ") Office
        p(class="text-lg font-semibold") No Office
  div(class=" w-auto xl:w-2/5 flex flex-col    3xl:mr-[15vw]")
    div(class=" w-full flex lg:h-[30vh] px-4 lg:px-0 py-6 lg:py-0")
        div(class="h-full bg-gray-300 w-[2px] ")
 
        //- CSS ARROW into right
        div(class="flex gap-x-12 w-full items-center lg:py-[6rem]")
          div(class="hidden lg:flex w-auto")
            .arrow
              .line
              .point
          p Great! We are excited to hear from you and let's start something special together. call us from any inquery.
        div(class="h-full bg-gray-300 w-[2px] ")
    div(class="flex flex-col gap-y-6")
      ContactForm
</template>

<script setup lang="ts">
definePageMeta({
  NavbarColor: "#ffffff",
});
</script>

<style lang="scss" scoped>
.arrow {
  width: 180px;
}

.line {
  margin-top: 7px;
  width: 160px;
  background: black;
  height: 4px;
  float: left;
}

.point {
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-left: 20px solid black;
  float: right;
}
</style>
