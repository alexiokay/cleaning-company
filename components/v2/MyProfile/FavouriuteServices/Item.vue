<template lang="pug">
div(class="flex flex-col py-5 px-6 gap-y-1 h-auto bg-white rounded-[18px] item-box-shadow ")
    nuxt-img(v-if="service.logo!==''" :src="service.logo" alt="service.name" class="w-[74px] h-[74px] object-cover")
    <svg v-else width="75" height="74" viewBox="0 0 75 74" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M64.8123 12.3333C62.9623 12.3333 53.7123 16.9583 37.0623 16.9583C20.7207 16.9583 10.854 12.3333 9.31234 12.3333C7.77067 12.3333 6.229 13.5666 6.229 15.4166V58.5833C6.229 60.4333 7.77067 61.6666 9.31234 61.6666C11.1623 61.6666 20.104 57.0416 37.0623 57.0416C53.7123 57.0416 62.9623 61.6666 64.8123 61.6666C66.354 61.6666 67.8957 60.4333 67.8957 58.5833V15.4166C67.8957 13.5666 66.354 12.3333 64.8123 12.3333ZM61.729 54.2666C55.5623 52.4166 47.5457 50.8749 37.0623 50.8749C26.579 50.8749 18.5623 52.4166 12.3957 54.2666V19.7333C20.4123 21.8916 28.7373 23.1249 37.0623 23.1249C47.5457 23.1249 55.5623 21.5833 61.729 19.7333V54.2666ZM28.429 33.9166L17.0207 47.4832C23.1873 46.5583 29.9707 46.2499 37.0623 46.2499C44.154 46.2499 50.9373 46.5583 57.104 47.4832L43.229 30.8333L34.5957 41.3166L28.429 33.9166Z" fill="#00B998"/>
    </svg>

    p(class="font-bold text-2xl") {{ service.name }}
    p {{ service.description }}
    div(class="w-full flex justify-start items-center gap-x-4")
        p(class="font-bold text-2xl") {{ service.rating }}
        rating(:rating="service.rating" class="w-1/4")
</template>

<script setup lang="ts">
defineProps({
  service: Object,
});
</script>

<style lang="scss" scoped>
.item-box-shadow {
  box-shadow: 2px 4px 12px 0px rgba(0, 0, 0, 0.08);
}
</style>
