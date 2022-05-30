<script setup>
import { onMounted, reactive } from "vue";
import { useRouter } from "vue-router";

import data from "../db/orderOperations";

const router = useRouter();
const props = defineProps(["data"], { data: String });

const headers = reactive([
  {
    text: "Наименование ОП",
    align: "start",
    sortable: false,
    value: "operation.designation",
  },
  {
    text: "Состояние",
    align: "start",
    sortable: false,
    value: "operation.act.status.text",
  },
]);

const orderInfo = reactive([]);

onMounted(() => {
  console.log(data);
  let cur = null;
  for (let i = 0; i < data.length; i++) {
    cur = {
      "operation.designation": data[i]["operation.designation"],
      "operation.act.status.text": data[i]["operation.act.status.text"],
    };
    orderInfo.push(cur);
  }
});

function goBack() {
  router.push({ name: "Main" });
}
</script>
<template>
  <v-row class="status">
    <v-col>
      <v-btn
        @click="goBack()"
        icon="mdi-arrow-left"
        size="x-small"
        class="ma-2"
      ></v-btn>
    </v-col>
    <v-col class="d-flex align-center justify-end">
      <v-text>Заказ в работе</v-text>
    </v-col>
  </v-row>
  <v-row>
    <v-col>
      <v-data-table
        :headers="headers"
        :items="orderInfo"
        density="compact"
      ></v-data-table>
    </v-col>
  </v-row>
  {{ this.props.data }}
</template>
<style scoped>
.status {
  background-color: rgb(26, 184, 26);
}
</style>