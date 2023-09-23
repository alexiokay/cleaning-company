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
