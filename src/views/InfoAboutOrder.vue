<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

function goBack() {
  router.push("/scanner");
}
</script>
<template>
  <v-btn
    @click="goBack()"
    icon="mdi-arrow-left"
    size="x-small"
    class="ma-2"
  ></v-btn>
</template>