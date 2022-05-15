import { defineStore } from 'pinia'

import { Html5Qrcode } from "html5-qrcode";

export const useScannerStore = defineStore('scanner', {
  state: () => {
    return {
      cameraId: 0,
      decodedText: '',
      wasShown: false
    }
  },
  getters: {
    getCameraId: (state) => state.cameraId,
    getDecodedText: (state) => state.decodedText,
    getWasShown: (state) => state.wasShown
  },
  actions: {
    setCameraId() {
      Html5Qrcode.getCameras()
        .then((devices) => {
          if (devices.length) {
            this.cameraId = devices[0].id;
          }
        })
        .catch((err) => {
          // handle err
        });
    },
    setDecodedText(text) {
      this.decodedText = text;
    },
    setWasShown(bool) {
      this.wasShown = bool
    }
  },
})
