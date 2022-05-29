<script setup>
import { reactive } from "vue";

import router from "../router";
</script>
<template>
 <v-btn
    @click="goBack()"
    icon="mdi-arrow-left"
    size="x-small"
    class="ma-2"
  ></v-btn>

</template>