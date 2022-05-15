<script setup>
import { onMounted } from "vue";

import { useScannerStore } from "./store/scanner";

onMounted(() => {
  useScannerStore().setCameraId();
});
</script>
<template>
<v-app>
  <v-navigation-drawer v-model="drawer">
  </v-navigation-drawer>

  <v-app-bar elevation="1" dense>
  <v-app-bar-nav-icon></v-app-bar-nav-icon>
  <v-app-bar-title>Zavod</v-app-bar-title>
  </v-app-bar>

  <!-- Sizes your content based upon application components -->
  <v-main>

    <!-- Provides the application the proper gutter -->
    <!-- <v-container fluid> -->

      <!-- If using vue-router -->
      <router-view></router-view>
    <!-- </v-container> -->
  </v-main>

  <v-footer>
    <!-- -->
  </v-footer>
</v-app>
</template>