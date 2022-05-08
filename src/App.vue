<script setup>
import { onMounted } from "vue";

import { useScannerStore } from "./store/scanner";

import { Html5Qrcode } from "html5-qrcode";
onMounted(() => {
  const store = useScannerStore();
  Html5Qrcode.getCameras()
    .then((devices) => {
      if (devices.length) {
        store.setCameraId(devices[0].id);
      }
    })
    .catch((err) => {
      // handle err
    });
});
</script>
<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>