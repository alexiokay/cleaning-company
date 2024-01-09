<template lang="pug">

div#login-page(class="relative flex flex-col md:flex-row w-full md:h-[57rem] px-2 md:px-12 items-center md:items-start gap-x-28 justify-center pt-2 pb-[20rem]" )
        div(class="flex w-full  flex-col mt-[1rem] md:mt-[3.5rem] md:w-2/5 md:h-[43rem] items-center justify-center")
            LoginRegisterForm
            p(class="text-sm") Masz juz konto? 
                NuxtLink(to="/login" class="text-xs text-blue-600 hover:cursor-pointer hover:text-blue-700") Zaloguj się
        div(class='md:w-[29rem] h-auto')
            div(class="text-center w-full md:w-[25rem] h-auto flex items-start justify-start flex-col mt-6")     
                h2(class="mb-7 text-xl text-gray-800 text-start mt-8 font-itim ") Why is it worth to have an account in pinkiwoow?
                LoginWhy
                
        ButtonBack
                

        
    
        
</template>

<script setup lang="ts">
definePageMeta({
  middleware: "redirect-if-logged",
  NavbarColor: "#ffffff",
});
</script>

<style lang="sass"></style>
