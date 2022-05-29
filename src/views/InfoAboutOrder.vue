<script setup>
import { onMounted } from "vue";

import { useRouter } from "vue-router";

const router = useRouter();

const props = defineProps(["data"], { data: String });

onMounted(() => {});

function goBack() {
  router.push({ name: "Main" });
}
</script>
<template>
    <v-row class="status">
      <v-col cols="4">
        <v-btn
          @click="goBack()"
          icon="mdi-arrow-left"
          size="x-small"
          class="ma-2"
        ></v-btn
      ></v-col>
      <v-col cols="8" class="align-center justify-end d-flex">
        <v-text>Заказ в работе</v-text>
      </v-col>
    </v-row>
    <v-row class="h-50">
      <v-data-table
        :headers="headers"
        :items="desserts"
        :items-per-page="5"
        class="elevation-1"
        density="compact"
      ></v-data-table>
    </v-row>
    <v-row> </v-row>
    {{ this.props.data }}
</template>
<style scoped>
.status {
  background-color: rgb(26, 184, 26);
}
</style>