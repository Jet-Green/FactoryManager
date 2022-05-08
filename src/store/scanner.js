import { defineStore } from 'pinia'

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
    setCameraId(id) {
      this.cameraId = id;
    },
    setDecodedText(text) {
      this.decodedText = text;
    },
    setWasShown(bool) {
      this.wasShown = bool
    }
  },
})
