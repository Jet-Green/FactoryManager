<script setup>
import { onMounted, ref } from "vue";

import { useScannerStore } from "../store/scanner";
import { Html5Qrcode } from "html5-qrcode";
import { useRouter } from "vue-router";

const store = useScannerStore();
const router = useRouter();

let orderNumber = ref('')

onMounted(() => {
  const html5QrCode = new Html5Qrcode(/* element id */ "reader");

  html5QrCode
    .start(
      { facingMode: "environment" },
      {
        fps: 12, // Optional, frame per seconds for qr code scanning
        qrbox: { width: 250, height: 250 },
        // aspectRatio: 0.6,
      },
      (decodedText, decodedResult) => {
        store.setDecodedText(decodedText);
        let newVersion = /[a-z]{1}\d{2}-\d{4}-.{3}/i
        let oldVersion = /[a-z]{1}-\d{2}-\d{2}-.{4}/i
        let oldVersionMatchedOrder = decodedText.match(oldVersion)
        let newVersionMatchedOrder = decodedText.match(newVersion)

        orderNumber = oldVersionMatchedOrder ? oldVersionMatchedOrder[0] : newVersionMatchedOrder[0]
        console.log(orderNumber);
      },
      (errorMessage) => { }
    )
    .catch((err) => {
      console.log(err);
    });
  const html5QrCodeForFiles = new Html5Qrcode(/* element id */ "reader-for-files");
  const fileinput = document.getElementById('qr-input-file');
  fileinput.addEventListener('change', e => {
    if (e.target.files.length == 0) {
      // No file selected, ignore 
      return;
    }

    const imageFile = e.target.files[0];
    // Scan QR Code
    html5QrCodeForFiles.scanFile(imageFile, true)
      .then(decodedText => {
        store.setDecodedText(decodedText);
        let newVersion = /[a-z]{1}\d{2}-\d{4}-.{3}/i
        let oldVersion = /[a-z]{1}-\d{2}-\d{2}-.{4}/i
        let oldVersionMatchedOrder = decodedText.match(oldVersion)
        let newVersionMatchedOrder = decodedText.match(newVersion)

        orderNumber = oldVersionMatchedOrder ? oldVersionMatchedOrder[0] : newVersionMatchedOrder[0]
        console.log(orderNumber);
      })
      .catch(err => {
        // failure, handle it.
        alert(`Ошибка: ${err}`)
      });
  });

});


store.$onAction(({ name, store }) => {
  if (name === "setDecodedText") {
    store.setWasShown(true);
  }
});

function closeDialog() {
  store.setDecodedText("");
  store.setWasShown(false);
}

function goTo() {
  router.push({
    name: "InfoAboutOrder",
    params: { data: orderNumber },
  });
  store.setWasShown(false);
}
function goBack() {
  router.push("/");
}
</script>
<template>
  <div style="height: 100%;">
    <v-btn @click="goBack()" icon="mdi-arrow-left" size="x-small" class="ma-2"></v-btn>
    <div id="reader" height="100%"></div>
    <div id="reader-for-files" style="display: hidden"></div>
    <input type="file" id="qr-input-file" accept="image/*" class="ma-2">
  </div>

  <v-dialog v-model="store.getWasShown">
    <v-card>
      <pre class="ma-2">
      {{ store.getDecodedText }}
      </pre>
      <v-card-actions>
        <v-btn @click="closeDialog()">закрыть</v-btn>
        <v-btn @click="goTo()">перейти</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>