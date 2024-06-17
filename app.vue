<template>
  <Html :lang="locale">
    <NuxtLayout>
      <NuxtLoadingIndicator :height="5" :duration="3000" :throttle="400" />
      <NuxtPage class="overflow-clip" />
    </NuxtLayout>
  </Html>
</template>

<script lang="ts" setup>
AppSetup();
const locale = useState<string>("locale.setting");
const app = useAppConfig();

const route = useRoute();

const $gtm = useGtm();

useSeoMeta({
  image: "https://freshandtidy.nl/images/url_image.png",
  ogImage: "https://freshandtidy.nl/images/url_image.png",
  url: "https://freshandtidy.nl/images/url_image.png",
  twitterImage: "https://freshandtidy.nl/images/url_image.png",
});
</script>

<style lang="scss">
::-webkit-scrollbar {
  // Width of vertical scroll bar
  width: 11px;
  // Height of horizontal scroll bar
  height: 10px;
  background-color: #e8e8e9;
  border-radius: 8px;
}
::-webkit-scrollbar-thumb {
  border-radius: 8px;
  background: #c2c9d2;
}
</style>
