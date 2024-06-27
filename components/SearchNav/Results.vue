<template lang="pug">
div(class="flex flex-col items-center justify")
    div#scroll-area(class="grid grid-cols-2 gap-y-16 sm:grid-cols-4  gap-x-6 lg:px-[4rem] bg-white p-4 lg:pb-[4rem]")
        div(class="w-full flex flex-col gap-y-12" v-for="product in props.results" :key="i" )
       
            nuxt-img.product_image(@click="redirect(product.link)"  :src="product.image" class="w-full object-cover aspect-[16:10]" loading="lazy" data-aos="fade" data-aos-easing="ease-in-cubic" data-aos-offset="100"
                 data-aos-duration="200" data-aos-delay="50" data-aos-once="true")
            div(@click="redirect(product.link)" class="flex flex-col gap-y-2 items-center justify-center")
                p(class="font-medium text-sm lg:text-base text-center") 2024 Social Media Calendar 
            
    button(class="rounded-[4px] border-slate-700  font-itim  border-[1px] px-7 py-3") SEE ALL RESULTS
</template>

<script setup lang="ts">
const router = useRouter();

const props = defineProps({
  results: Array,
});
const redirect = (link: string) => {
  router.push(link);
};
</script>

<style lang="scss"></style>
