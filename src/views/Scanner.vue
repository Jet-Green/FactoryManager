<script setup>
import { onMounted } from "vue";

import { useScannerStore } from "../store/scanner";
// import { Html5QrcodeScanner } from "html5-qrcode";
import { Html5Qrcode } from "html5-qrcode";
import { useRouter } from "vue-router";

const store = useScannerStore();
const router = useRouter();

onMounted(() => {
  const html5QrCode = new Html5Qrcode(/* element id */ "reader");

  html5QrCode
    .start(
      store.getCameraId,
      {
        facingMode: "user",
        fps: 15, // Optional, frame per seconds for qr code scanning
        // qrbox: { width: 250, height: 250 },
        aspectRatio: 3 / 4,
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
    class="d-flex align-center justify-center"
  >
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