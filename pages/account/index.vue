<template lang="pug">
div(class="flex flex-col items-center gap-y-4 w-1/3 border-[1px] border-gray-300 rounded-xl p-4")
    p Zaloguj się
    p Nie masz konta?
    p Zarejestruj się
</template>

<script setup lang="ts">
definePageMeta({
  middleware: "redirect-if-not-logged",
});
</script>

<style lang="sass"></style>
