import { defineStore } from 'pinia'

export const useScannerStore = defineStore('scanner', {
  state: () => { return { cameraId: 0, decodedText: '' } },
  getters: {
    getCameraId: (state) => state.cameraId,
    getDecodedText: (state) => state.decodedText
  },
  actions: {
    setCameraId(id) {
      this.cameraId = id;
    },
    setDecodedText(text) {
      this.decodedText = text;
    }
  },
})
