import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

// load styles
import "@/assets/css/vendor/bootstrap.min.css";
import "@/assets/css/style.css";

createApp(App).use(store).use(router).mount("#app");
