<script setup>
import { onMounted } from "vue";

import { useScannerStore } from "./store/scanner";

onMounted(() => {
  useScannerStore().setCameraId();
});
</script>
<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>