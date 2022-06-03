<script setup>
import { onMounted, reactive } from "vue";
import { useRouter } from "vue-router";

import data from "../db/orderOperations";

const router = useRouter();
const props = defineProps(["data"], { data: String });

const orderInfo = reactive([]);

onMounted(() => {
  let cur = null;
  for (let i = 0; i < data.length; i++) {
    cur = {
      "operation.designation": data[i].obj["operation.designation"],
      "operation.act.status.text": data[i].obj["operation.act.status.text"],
    };
    orderInfo.push(cur);
  }
});

function goBack() {
  router.push({ name: "Scanner" });
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
      <v-table>
        <thead>
          <tr>
            <th>Наименование ОП</th>
            <th>Состояние</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, i) in orderInfo" :key="i">
            <td>{{ item["operation.designation"] }}</td>
            <td>{{ item["operation.act.status.text"] }}</td>
          </tr>
        </tbody>
      </v-table>
    </v-col>
    <v-col>
      {{ this.props.data }}
    </v-col>
  </v-row>
</template>
<style scoped>
.status {
  background-color: rgb(26, 184, 26);
}
</style>