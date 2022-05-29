<script setup>
import { onMounted } from "vue";

import { useScannerStore } from "../store/scanner";
import { Html5Qrcode } from "html5-qrcode";
import { useRouter } from "vue-router";

const store = useScannerStore();
const router = useRouter();

onMounted(() => {
  const html5QrCode = new Html5Qrcode(/* element id */ "reader");

  html5QrCode
    .start(
      { facingMode: "environment" },
      {
        fps: 14, // Optional, frame per seconds for qr code scanning
        qrbox: { width: 250, height: 250 },
        // aspectRatio: 0.6,
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

store.$onAction(({ name, store }) => {
  if (name === "setDecodedText" && store.decodedText != "") {
    store.setWasShown(true);
  }
});

function closeDialog() {
  store.setDecodedText("");
  store.setWasShown(false);
}

function goTo() {
  router.push("/info-about-order");
  store.setWasShown(false);
}
function goBack() {
  router.push("/");
}
</script>
<template>
  <!-- <v-autocomplete
      v-if="store.cameras.length"
      v-model="selectedCamera"
      :items="cameras"
      outlined
      dense
      label="Выберите камеру"
      class="w-100"
    ></v-autocomplete> -->
  <div style="height: 100%; background-color: grey">
    <v-btn
      @click="goBack()"
      icon="mdi-arrow-left"
      size="x-small"
      class="ma-2"
    ></v-btn>
    <div id="reader" height="100%"></div>
  </div>

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