import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import "@fortawesome/fontawesome-free/css/all.css";
import axios from "axios";
import VueAxios from "vue-axios";
import { initializeApp } from "firebase/app";
import VueApexCharts from "vue3-apexcharts";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBof0XQEFx3u8JB3taUzXAjwmHXq-4CD1s",
  authDomain: "handy-2eb2b.firebaseapp.com",
  projectId: "handy-2eb2b",
  storageBucket: "handy-2eb2b.appspot.com",
  messagingSenderId: "893745641804",
  appId: "1:893745641804:web:0b205fb0387fb485e5f7e9",
};

const app = createApp(App);

// Initialize Firebase
initializeApp(firebaseConfig);

app.use(VueAxios, axios);
app.use(VueApexCharts);
// app.component('apexchart', VueApexCharts);
app.provide("axios", app.config.globalProperties.axios);

createApp(App).use(store).use(router).mount("#app");
