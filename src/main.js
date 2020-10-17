
import { createApp } from 'vue'
import App from './App.vue'


import axios from 'axios'
import './mock/'
const app = createApp(App)
app.mount("#app")
// app.config.globalProperties.$http = axios
