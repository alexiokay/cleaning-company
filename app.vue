<template>
  <Html :lang="locale">
    <NuxtLayout>
      <NuxtLoadingIndicator :height="5" :duration="3000" :throttle="400" />
      <NuxtPage class="overflow-hidden" />
    </NuxtLayout>
  </Html>
</template>

<script lang="ts" setup>
AppSetup();
const locale = useState<string>("locale.setting");
const app = useAppConfig();

const route = useRoute();

const $gtm = useGtm();
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
