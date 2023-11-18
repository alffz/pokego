import "./assets/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap-icons/font/bootstrap-icons.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import axios from "axios";
import App from "./App.vue";
import router from "./router";

axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;
axios.defaults.headers.common["Content-Type"] = "application/json";
axios.defaults.headers.common["Accept"] = "application/json";

const app = createApp(App);
app.use(createPinia());
app.use(router);

app.mount("#app");
