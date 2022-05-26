<script setup>
import { onMounted, watch, ref } from "vue";

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
      { facingMode: "environment" },
      {
        fps: 14, // Optional, frame per seconds for qr code scanning
        qrbox: { width: 250, height: 250 },
        aspectRatio: 0.6,
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

// store.$subscribe((mutation, state) => {
//   console.log(mutation);
//   if (mutation.events.key == "decodedText" && state.decodedText !== "") {
//     store.setWasShown(true);
//   }
// });

// watch(selectedCamera, (newVal) => {
//   html5QrCode.stop();
//   console.log(newVal);

//   let oldReader = document.getElementById("reader");
//   oldReader.remove();

//   let container = document.getElementById("video-container");
//   let newReader = document.createElement("div");
//   newReader.setAttribute("id", "reader");
//   container.appendChild(newReader);

//   const html5QrCode = new Html5Qrcode(/* element id */ "reader");
//   let id = null;
//   for (let c of camerasInObjs) {
//     if (c.name == newVal) {
//       id = c.id;
//     }
//   }
//   html5QrCode
//     .start(
//       { facingMode: "environment" },
//       {
//         fps: 14, // Optional, frame per seconds for qr code scanning
//         qrbox: { width: 250, height: 250 },
//         aspectRatio: 1 / 2,
//       },
//       (decodedText, decodedResult) => {
//         store.setDecodedText(decodedText);
//       },
//       (errorMessage) => {}
//     )
//     .catch((err) => {
//       console.log(err);
//     });
// });

function closeDialog() {
  store.setDecodedText("");
  store.setWasShown(false);
}

function goTo() {
  router.push("/party-movement");
  store.setWasShown(false);
}
function goBack() {
  router.push("/");
}
</script>
<template>
  <v-btn @click="goBack()">Вернуться</v-btn>
  <!-- <v-sheet
    color="grey lighten-4"
    style="height: 100%"
    class="d-flex align-center justify-center flex-column"
  > -->
  <!-- <v-autocomplete
      v-if="store.cameras.length"
      v-model="selectedCamera"
      :items="cameras"
      outlined
      dense
      label="Выберите камеру"
      class="w-100"
    ></v-autocomplete> -->
  <div id="reader" height="100%"></div>
  <!-- </v-sheet> -->

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