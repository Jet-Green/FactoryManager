import { defineStore } from 'pinia'

import { Html5Qrcode } from "html5-qrcode";

export const useScannerStore = defineStore('scanner', {
  state: () => {
    return {
      cameraId: 0,
      decodedText: '',
      wasShown: false,
      cameras: null
    }
  },
  getters: {
    getCameraId: (state) => state.cameraId,
    getDecodedText: (state) => state.decodedText,
    getWasShown: (state) => state.wasShown,
    getCameras: (state) => state.cameras
  },
  actions: {
    setCameraId(id) {
      this.cameraId = is
    },
    setCameras() {
      Html5Qrcode.getCameras()
        .then((devices) => {
          if (devices.length) {
            this.cameras = devices;
            this.cameraId = devices[0].id
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
