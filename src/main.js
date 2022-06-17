import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import { createPinia } from 'pinia'
import './assets/style/main.scss'


createApp(App).use(createPinia())
  .use(vuetify)
  .use(router)
  .mount('#app')
