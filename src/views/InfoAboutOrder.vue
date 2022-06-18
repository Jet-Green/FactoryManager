<script setup>
import { onMounted, reactive, ref } from "vue";
import { useRouter } from "vue-router";
import axios from 'axios'

import VueTree from "@ssthouse/vue3-tree-chart";
import "@ssthouse/vue3-tree-chart/dist/vue3-tree-chart.css";

import data from "../db/orderOperations";

const router = useRouter();
const props = defineProps(["data"], { data: String });

const orderNumber = props.data

let tree = ref(null)
const treeConfig = reactive({
  nodeWidth: 170,
  nodeHeight: 170,
  levelHeight: 170,
});

let operationInfoDialog = ref(false)
let operationInfo = ref({})

let statusColor = data[0]['obj']["operation.status_color"]

let orderInfo = []
let orderInfoTree = ref({
  "operation.designation": null,
  "operation.act.status.text": null,
  "operation.operation": null,
  id: 1,
  children: null,
  parentId: 0
});

const listToTree = (arr) => {
  let map = {}, node, res = [], i;
  for (i = 0; i < arr.length; i += 1) {
    map[arr[i].id] = i;
    arr[i].children = [];
  };
  for (i = 0; i < arr.length; i += 1) {
    node = arr[i];
    if (node.parentId != "0") {
      arr[map[node.parentId]].children.push(node);
    }
    else {
      res.push(node);
    };
  };
  return res;
};

function openOperationInfoDialog(data) {
  operationInfo.value = data
  operationInfoDialog.value = true
}

onMounted(() => {
  // axios.get()

  let cur;
  for (let i = 0; i < data.length; i++) {
    cur = {
      "operation.designation": data[i].obj["operation.designation"],
      "operation.act.status.text": data[i].obj["operation.act.status.text"],
      "operation.operation": data[i].obj["operation.operation"],
      "operation.person_end": data[i].obj['operation.person_end'],
      "operation.person_start": data[i].obj['operation.person_start'],
      "operation.act.last_logoff_ts": data[i].obj['operation.act.last_logoff_ts'],
      "operation.act.scrap.primary": data[i].obj['operation.act.scrap.primary'],
      "operation.act.workplace": data[i].obj['operation.act.workplace'],
      id: i + 1,
      children: null,
      parentId: i
    };
    orderInfo.push(cur);
  }

  orderInfoTree.value = listToTree(orderInfo)
});

function goBack() {
  router.push({ name: "Scanner" });
}
</script>
<template>
  <div :style="{ 'background-color': statusColor }">
    <v-btn @click="goBack()" icon="mdi-arrow-left" size="x-small" class="ma-2"></v-btn>
    <span style="color: white">
      Заказ {{ orderNumber }}
    </span>
  </div>
  <!-- <div>
    {{ orderInfoTree }}
  </div> -->
  <v-btn @click="tree.zoomIn()" class="ma-2">+</v-btn>
  <v-btn @click="tree.zoomOut()" class="ma-2">-</v-btn>
  <vue-tree style="height: 230vh; width: 100%; border: 1px solid gray" :dataset="orderInfoTree" :config="treeConfig"
    ref="tree" linkStyle="straight" :collapse-enabled="false">
    <template v-slot:node="{ node }">
      <div class="rich-media-node" @click="openOperationInfoDialog(node)">
        <div>
          <span style="font-weight: bold;">{{ node['operation.designation'] }}</span>
        </div>
        <div class="d-flex justify-center" style="background-color:#0b9c47">
          {{ node['operation.operation'] }}
        </div>
        <div style="display: flex; flex-direction: column; background-color: #327da8; color: white; padding: 8px">
          <div>
            Статус: <b>{{ node['operation.act.status.text'] }}</b>
          </div>
          <div>
            <b>{{ node["operation.person_end"] }}</b>
          </div>
        </div>
      </div>
    </template>
  </vue-tree>
  <v-dialog v-model="operationInfoDialog">
    <v-card>
      <div class="ma-2">
        <p>
          <b>
            {{ operationInfo["operation.designation"] }}
          </b>
        </p>
        <p>
          {{ operationInfo["operation.act.status.text"] }}
        </p>
        <p>
          {{ new Date(operationInfo["operation.act.last_logoff_ts"]).toLocaleString('ru') }}
        </p>
        <p>
          Место: <b>{{ operationInfo["operation.act.workplace"] }}</b>
        </p>
        <p>
          Брак: <b>{{ operationInfo["operation.act.scrap.primary"] }}</b>
        </p>
        <p>
          {{ operationInfo["operation.person_start"] + ' -> ' + operationInfo["operation.person_end"] }}
        </p>
        <p>
          {{ }}
        </p>
      </div>
      <v-card-actions>
        <v-btn @click="operationInfoDialog = false">Закрыть</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<style scoped>
.status {
  background-color: rgb(26, 184, 26);
}
</style>