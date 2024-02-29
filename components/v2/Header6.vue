<template lang="pug">
div(class="main-component w-full h-[61rem] flex px-[4rem] xl:px-[10rem] 2xl:px-[16rem] 3xl:px-[20.8rem] py-[20rem] tracking-wide gap-x-[17rem]")
    div(class="flex flex-col w-auto h-full text-[#FAFAFA] items-start justify-start gap-y-[1rem]")
        h2(class="text-[2.5rem] font-bold flex flex-col") How Fresh and Tidy 
            span keeps you safe.
        p.flex.flex-col We cooperate only with
            span create verified cleaning teams.
      
        ButtonLearnMore2(text="Read the reviews")
    
                 
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.main-component {
  background: url("/images/header6.jpg");

  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-attachment: fixed;

  @media screen and (min-width: 1942px) {
    background-position: center -250px;
  }
}
</style>
