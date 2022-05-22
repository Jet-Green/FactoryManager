<script setup>
import { reactive, ref, onMounted, watch } from "vue";

import { useScannerStore } from "../store/scanner";
// import { Html5QrcodeScanner } from "html5-qrcode";
import { Html5Qrcode } from "html5-qrcode";
import { useRouter } from "vue-router";

const store = useScannerStore();
const router = useRouter();
let cameras = reactive([]);
let camerasInObjs = [];

let selectedCamera = ref("");

onMounted(() => {
  const html5QrCode = new Html5Qrcode(/* element id */ "reader");
  for (let c of store.getCameras) {
    cameras.push(c.label);

    camerasInObjs.push({
      name: c.label,
      id: c.id,
    });
  }
  html5QrCode
    .start(
      store.getCameraId,
      {
        fps: 14, // Optional, frame per seconds for qr code scanning
        qrbox: { width: 250, height: 250 },
        aspectRatio: 5 / 11,
      },
      (decodedText, decodedResult) => {
        store.setDecodedText(decodedText);
      },
      (errorMessage) => {}
    )
    .catch((err) => {
      console.log(err);
    });
});

store.$subscribe((mutation, state) => {
  if (mutation.events.key == "decodedText" && state.decodedText !== "") {
    store.setWasShown(true);
  }
});

watch(selectedCamera, (newVal) => {
  console.log(newVal);
  const html5QrCode = new Html5Qrcode(/* element id */ "reader");
  let id = null;
  for (let c of camerasInObjs) {
    if (c.name == newVal) {
      id = c.id;
    }
  }
  html5QrCode
    .start(
      id,
      {
        fps: 14, // Optional, frame per seconds for qr code scanning
        qrbox: { width: 250, height: 250 },
        aspectRatio: 5 / 11,
      },
      (decodedText, decodedResult) => {
        store.setDecodedText(decodedText);
      },
      (errorMessage) => {}
    )
    .catch((err) => {
      console.log(err);
    });
});

function closeDialog() {
  store.setDecodedText("");
  store.setWasShown(false);
}

function goTo() {
  router.push("/party-movement");
}
function goBack() {
  router.push("/");
}
</script>
<template>
  <v-btn @click="goBack()">Вернуться</v-btn>
  <v-sheet
    color="grey lighten-4"
    style="height: 100%"
    class="d-flex align-center justify-center flex-column"
  >
    <v-autocomplete
      v-if="store.cameras.length"
      v-model="selectedCamera"
      :items="cameras"
      outlined
      dense
      label="Выберите камеру"
      class="w-100"
    ></v-autocomplete>
    <div id="reader" class="d-flex justify-center"></div>
  </v-sheet>

  <v-dialog v-model="store.getWasShown">
    <v-card>
      <v-card-text
        >Результат: <b>{{ store.getDecodedText }}</b>
      </v-card-text>
      <v-card-actions>
        <v-btn @click="closeDialog()">close</v-btn>
        <v-btn @click="goTo()">go</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>