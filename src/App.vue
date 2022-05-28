<script setup>
import { onMounted } from "vue";

import { useScannerStore } from "./store/scanner";

onMounted(() => {
  useScannerStore().setCameras();
});
</script>
<template>
  <v-app>
    <v-main>
      <router-view></router-view>
    </v-main>
    <v-footer app></v-footer>
  </v-app>
</template>