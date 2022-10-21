import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'
import '@fortawesome/fontawesome-free/css/all.css'
import axios from 'axios'
import VueAxios from 'vue-axios'

const app = createApp(App);
app.use(VueAxios, axios)
app.provide('axios', app.config.globalProperties.axios)

createApp(App).use(store).use(router).mount('#app')
