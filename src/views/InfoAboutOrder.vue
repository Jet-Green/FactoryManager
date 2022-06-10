<script setup>
import { onMounted, reactive } from "vue";
import { useRouter } from "vue-router";

import VueTree from "@ssthouse/vue3-tree-chart";
import "@ssthouse/vue3-tree-chart/dist/vue3-tree-chart.css";

import data from "../db/orderOperations";

const router = useRouter();
const props = defineProps(["data"], { data: String });

const orderInfo = reactive([]);

const sampleData = reactive({
  name: "Wheels",
  status:"InProg",
  children: [
    {
      name: "Wings",
      status:"InProg",
      children: [
        {
          name: "Plane",
          status:"InProg",
        },
      ],
    },
    {
      name: "Piston",
      status:"InProg",
      customID: 3,
    },
    {
      name: "Carburetor",
      status:"InProg",
      children: [
        {
          name: "Truck",
          status:"InProg",
          customID: 2,
        },
        {
          name: "Car",
          status:"InProg",
          customID: 2,
        },
      ],
    },
    {
      name: "Valve",
      status:"InProg",
      customID: 4,
    },
    {
      name: "Crankshaft",
      status:"InProg",
      customID: 1,
    },
  ],
  links: [
    { parent: 1, child: 2 },
    { parent: 3, child: 2 },
    { parent: 4, child: 2 },
  ],
  identifier: "customID",
});
const treeConfig = reactive({
  nodeWidth: 120,
  nodeHeight: 80,
  levelHeight: 200,
});

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
    <!-- <v-col class="d-flex align-center justify-end">
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
      {{ props.data }}
    </v-col> -->
  </v-row>
  <v-row>
  <v-col>
    <vue-tree
      style="width: 800px; height: 600px; border: 1px solid gray"
      :dataset="sampleData"
      :config="treeConfig"
      linkStyle="straight"
    >
      <template v-slot:node="{ node, collapsed }">
        <div
          class="rich-media-node"
          :style="{ border: collapsed ? '2px solid grey' : '' }"
        >
         <span style="padding: 4px 0; font-weight: bold">{{ node.status }}</span>
          <span style="padding: 4px 0; font-weight: bold">{{ node.name }}</span>
        </div>
      </template>
    </vue-tree>
  </v-col>
  </v-row>
</template>
<style scoped>
.status {
  background-color: rgb(26, 184, 26);
}
</style>