<script setup>
import { onMounted } from "vue";
// To use Html5QrcodeScanner
import { Html5QrcodeScanner } from "html5-qrcode";
// To use Html5Qrcode
import { Html5Qrcode } from "html5-qrcode";
onMounted(() => {
  let cameraId = null;
  // This method will trigger user permissions
  Html5Qrcode.getCameras()
    .then((devices) => {
      /**
       * devices would be an array of objects of type:
       * { id: "id", label: "label" }
       */
      if (devices && devices.length) {
        cameraId = devices[0].id;
        // .. use this to start scanning.
        const html5QrCode = new Html5Qrcode(/* element id */ "reader");

        html5QrCode
          .start(
            cameraId,
            {
              fps: 10, // Optional, frame per seconds for qr code scanning
              qrbox: { width: 250, height: 250 }, // Optional, if you want bounded box UI
            },
            (decodedText, decodedResult) => {
              console.log(decodedText);
              console.log(decodedResult);
              // do something when code is read
            },
            (errorMessage) => {
              // parse error, ignore it.
            }
          )
          .catch((err) => {
            // Start failed, handle it.
          });
      }
    })
    .catch((err) => {
      // handle err
    });
});
</script>
<template>
  <div>
    <h1>scanner</h1>
    <div id="reader" width="600px"></div>
  </div>
</template>