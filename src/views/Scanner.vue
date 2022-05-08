<script setup>
import { onMounted, reactive } from "vue";

import { useScannerStore } from "../store/scanner";
import { Html5QrcodeScanner } from "html5-qrcode";
import { Html5Qrcode } from "html5-qrcode";

let decoded = reactive("jhk");
const store = useScannerStore();
onMounted(() => {
  const html5QrCode = new Html5Qrcode(/* element id */ "reader");

  console.log(store.getCameraId);
  html5QrCode
    .start(
      store.getCameraId,
      {
        fps: 10, // Optional, frame per seconds for qr code scanning
        qrbox: { width: 250, height: 250 }, // Optional, if you want bounded box UI
      },
      (decodedText, decodedResult) => {
        store.setDecodedText(decodedText);
        // do something when code is read
      },
      (errorMessage) => {
        // parse error, ignore it.
      }
    )
    .catch((err) => {
      // Start failed, handle it.
    });
});
</script>
<template>
  <div>
    <h1>scanner</h1>
    <h2>{{ store.getDecodedText }}</h2>
    <div id="reader" width="600px"></div>
  </div>
</template>